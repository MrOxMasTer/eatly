import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { PrismaService } from 'src/database/prisma.service';

import { session } from 'telegraf';
import { useNewReplies } from 'telegraf/future';

import { AuthModule } from 'src/auth/auth.module';

import { EatlyBotUpdate } from './eatly-bot.update';
import { StartScene } from './scenes/start.scene';

@Module({
    imports: [
        TelegrafModule.forRoot({
            token: process.env.TG_TOKEN,
            middlewares: [session(), useNewReplies()],
        }),
        AuthModule,
    ],
    providers: [StartScene, EatlyBotUpdate, PrismaService],
})
export class EatlyBotModule {}
