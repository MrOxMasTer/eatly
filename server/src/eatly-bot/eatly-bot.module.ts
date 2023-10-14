import { Module, NotFoundException } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { PrismaService } from 'src/database/prisma.service';

import { session } from 'telegraf';
import { useNewReplies } from 'telegraf/future';

import { AuthModule } from 'src/auth/auth.module';

import { EatlyBotUpdate } from './eatly-bot.update';
import { StartScene } from './scenes/start.scene';

const findToken = () => {
  const TG_TOKEN = process.env.TG_TOKEN;

  if (TG_TOKEN) return TG_TOKEN;

  throw new NotFoundException(`Не найден ${process.env.TG_TOKEN}`);
};

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: findToken(),
      middlewares: [session(), useNewReplies()],
    }),
    AuthModule,
  ],
  providers: [StartScene, EatlyBotUpdate, PrismaService],
})
export class EatlyBotModule {}
