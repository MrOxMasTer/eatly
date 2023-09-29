import { Telegraf } from 'telegraf';

import { Ctx, InjectBot, Scene, SceneEnter } from 'nestjs-telegraf';

import { PrismaService } from 'src/database/prisma.service';

import { START_SCENE_ID } from '../const/scenes';
import { CustomContext } from '../interfaces/context.interface';

@Scene(START_SCENE_ID)
export class StartScene {
    constructor(
        @InjectBot() private readonly bot: Telegraf<CustomContext>,
        private readonly prisma: PrismaService,
    ) {}

    @SceneEnter()
    async onSceneEnter(@Ctx() ctx: CustomContext) {
        await ctx.sendMessage('хочешь что-нибудь заказать?');
    }
}
