import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserModule } from 'src/entities/user/user.module';

@Module({
  imports: [
    PassportModule, 
    UserModule,
    JwtModule.registerAsync({
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get('SECRET_KEY'),
      signOptions: { expiresIn: '60m' }
    }),
    inject: [ConfigService],
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy ],
  exports: [AuthService],
})
export class AuthModule {}

