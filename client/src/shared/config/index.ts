// import { z } from 'zod';

// const checkConfig = () => {
//     const SchemaEnv = z.object({
//         API_URL: z.string(),
//     });

//     const CONFIG = {
//         API_URL: process.env.API_URL,
//     };

//     const result = SchemaEnv.parse(CONFIG);

//     console.log(result);
// };
// checkConfig();

const getEnvVar = (key: string) => {
    if (process.env[key] === undefined) {
        throw new Error(`Env variable ${key} is required`);
    }
    return process.env[key] || '';
};

/** API entrypoint */
export const API_URL = getEnvVar('NEXT_PUBLIC_API_URL');

/** Режим запуска программы */
export const NODE_ENV = getEnvVar('NODE_ENV');
/** Режим разработки */
export const isDevEnv = NODE_ENV === 'development';
/** Режим продакшена */
export const isProdEnv = NODE_ENV === 'production';
