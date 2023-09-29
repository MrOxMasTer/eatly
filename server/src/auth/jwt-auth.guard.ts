import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean {
        // Достаем все GET запросы, на котором висит гвард
        const req = context.switchToHttp().getRequest();

        try {
            // Достаем заголовок авторизации
            const authHeader = req.headers.authorization;
            const bears = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];

            if (bears !== 'Bears' || !token) {
                throw new UnauthorizedException({
                    message: 'Пользователь не авторизован',
                });
            }

            const user = this.jwtService.verify(token);

            req.user = user;

            return true;
        } catch (e) {
            throw new UnauthorizedException({
                message: 'Пользователь не авторизован',
            });
        }
    }
}
