import { join } from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { DatabaseModule } from './database/database.module';
import { DishesModule } from './dishes/dishes.module';
import { EatlyBotModule } from './eatly-bot/eatly-bot.module';
import { FilesModule } from './files/files.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { RolesModule } from './roles/roles.module';
import { StatusModule } from './status/status.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, 'static'),
        }),
        DatabaseModule,
        UserModule,
        RolesModule,
        AuthModule,
        RestaurantsModule,
        FilesModule,
        StatusModule,
        DishesModule,
        CategoryModule,
        EatlyBotModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
