import { z } from 'zod';

// export const loadENV = async () => {
//     const projectDir = process.cwd();

//     return loadEnvConfig(projectDir);
// };

// const dotenv = loadENV().then((env) => env);

// console.log(dotenv);

const checkConfig = async () => {
    const SchemaEnv = z.object({
        API_URL: z.string(),
    });

    const CONFIG = {
        API_URL: process.env.API_URL,
    };

    const result = SchemaEnv.parse(CONFIG);

    console.log(result);
};

checkConfig();
