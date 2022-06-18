import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/entities/user/user.service';
import { User } from 'src/entities/user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
    ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // bearer token in Authorization header
      ignoreExpiration: false, // if true, will ignore token expiration
      secretOrKey: configService.get('SECRET_KEY'), // secret key
    });
    console.log(this.configService.get('SECRET_KEY'));
  }

  async validate(payload) {
    const user = await this.userService.findOneById(payload.sub);
    return {id:user.id, email:user.email, name:user.name, gender:user.gender};
  }
}