import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { DatabaseService } from 'src/database/database.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [PassportModule, JwtModule.registerAsync({
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get('SECRET_KEY'),
      signOptions: { expiresIn: '60m' }
    }),
    inject: [ConfigService],
  })],
  providers: [AuthService, LocalStrategy, DatabaseService, JwtStrategy ],
  exports: [AuthService],
})
export class AuthModule {}

