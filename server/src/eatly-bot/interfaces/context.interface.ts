import { Context, Scenes } from 'telegraf';

interface ExtWizardSession extends Scenes.WizardSessionData {}

interface SceneState {}

export interface ExtSession extends Scenes.WizardSession<ExtWizardSession> {
    isAuth: boolean;
}

export interface CustomContext extends Context {
    session: ExtSession;
    scene: Scenes.SceneContextScene<CustomContext, ExtWizardSession> & {
        state: SceneState;
    };
    wizard: Scenes.WizardContextWizard<CustomContext>;
}
