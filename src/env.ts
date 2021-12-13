import envDev from "./env.development";

const env = {
    API_KEY: "23fed8fe-f9aa-4d6a-8e63-da6eb1e70d07",
    API_BASE_PATH: "https://api-staging.fool.com/commerce",
}

export default {
    ...env,
    ...envDev,
};
