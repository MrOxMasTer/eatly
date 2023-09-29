import { Ctx, Wizard, WizardStep } from 'nestjs-telegraf';

import { Telegraf } from 'telegraf';

import { AUTH_WIZARD_SCENE_ID } from '../const/scenes';
import { CustomContext } from '../interfaces/context.interface';

@Wizard(AUTH_WIZARD_SCENE_ID)
export class AuthWizardScene {
    @WizardStep(1)
    async checkAuth(@Ctx() ctx: Telegraf<CustomContext>) {}
}
