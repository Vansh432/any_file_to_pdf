import { configDotenv } from "dotenv";

configDotenv();

const env={
    port:process.env.PORT,
    allowedDomain:process.env.ALLOWED_DOMAIN,
    nodeENV:process.env.NODE_ENV
}

export {env}