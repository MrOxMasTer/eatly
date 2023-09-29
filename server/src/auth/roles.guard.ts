import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

import { Role, User } from '@prisma/client';

import { ROLES_KEY } from './role-auth.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private reflector: Reflector,
    ) {}

    canActivate(context: ExecutionContext): boolean {
        // Получаем массив ролей, которые могут обработать запрос
        const requiredRoles: string[] = this.reflector.getAllAndOverride(
            ROLES_KEY,
            [context.getHandler(), context.getClass()],
        );

        if (!requiredRoles) {
            return true;
        }

        const req = context.switchToHttp().getRequest();

        try {
            // Достаем заголовок авторизации
            const authHeader = req.headers.authorization;

            if (!authHeader) {
                throw new ForbiddenException({
                    message: 'Нет доступа',
                });
            }

            const user: User & { roles: Role[] } =
                this.jwtService.verify(authHeader);

            req.user = user;

            const res = user.roles.some((role) =>
                requiredRoles.includes(role.value),
            );

            return res;
        } catch (e) {
            throw new ForbiddenException({
                message: 'Нет доступа',
            });
        }
    }
}
