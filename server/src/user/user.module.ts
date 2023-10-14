import { Module, forwardRef } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma.service';

import { RolesModule } from 'src/roles/roles.module';

import { AuthModule } from 'src/auth/auth.module';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [RolesModule, forwardRef(() => AuthModule)],
  providers: [UserService, PrismaService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
