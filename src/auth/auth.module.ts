import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { DatabaseService } from 'src/database/database.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [PassportModule],
  providers: [AuthService,DatabaseService, LocalStrategy],
})
export class AuthModule {}
