import { Command, Ctx, Help, InjectBot, Start, Update } from 'nestjs-telegraf';
import { PrismaService } from 'src/database/prisma.service';
import { Telegraf } from 'telegraf';

import { START_SCENE_ID } from './const/scenes';
import { CustomContext } from './interfaces/context.interface';

@Update()
export class EatlyBotUpdate {
    constructor(
        @InjectBot() private readonly bot: Telegraf<CustomContext>,
        private readonly prisma: PrismaService,
    ) {}

    @Start()
    startCommand(@Ctx() ctx: CustomContext) {
        ctx.sendMessage('Привет!. Я бот по заказу еды на дом!');

        return ctx.scene.enter(START_SCENE_ID);
    }

    @Help()
    async helpCommand(@Ctx() ctx: CustomContext) {
        return ctx.sendMessage(``);
    }

    // @Roles('ADMIN')
    // @UseGuards(RolesGuard)
    @Command('admin')
    async admin(@Ctx() ctx: CustomContext) {
        await ctx.sendMessage('Админ');
    }
}
