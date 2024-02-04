import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import logger from "./utils/logger";
import { config as dotenv_config } from "dotenv";

dotenv_config();

interface IConfig {
    botToken: string;
    clientId: string;
    geniusApiKey: string;
    embedColour: string;
    enableAnalytics: boolean;
    enableAutocomplete: boolean;
    player: {
        leaveOnEndDelay: string;
        leaveOnStopDelay: string;
        leaveOnEmptyDelay: string;
        deafenBot: boolean;
    };
    emojis: {
        stop: string;
        skip: string;
        queue: string;
        pause: string;
        lyrics: string;
        back: string;
    };
    proxy: {
        enable: boolean;
        connectionUrl: string;
    };
    cookies: {
        useCustomCookie: boolean;
        youtubeCookie: string;
    };
    debug: boolean;
}

let config: IConfig = {
    botToken: process.env.BOT_TOKEN,
    clientId: process.env.CLIENT_ID,
    geniusApiKey: process.env.GENIUS_API_KEY,
    embedColour: process.env.EMBED_COLOUR,
    enableAnalytics: process.env.ENABLE_ANALYTICS == "true",
    enableAutocomplete: process.env.ENABLE_AUTOCOMPLETE == "true",
    player: {
        leaveOnEndDelay: process.env.LEAVE_ON_END_DELAY,
        leaveOnStopDelay: process.env.LEAVE_ON_STOP_DELAY,
        leaveOnEmptyDelay: process.env.LEAVE_ON_EMPTY_DELAY,
        deafenBot: process.env.DEAFEN_BOT == "true",
    },
    emojis: {
        stop: process.env.STOP,
        skip: process.env.SKIP,
        queue: process.env.QUEUE,
        pause: process.env.PAUSE,
        lyrics: process.env.LYRICS,
        back: process.env.BACK,
    },
    proxy: {
        enable: false,
        connectionUrl: "",
    },
    cookies: {
        useCustomCookie: false,
        youtubeCookie: "",
    },
    debug: process.env.DEBUG == "true",
};

if (!config.botToken || config.botToken === "") {
    logger.error("Please supply a bot token in your environment variables");
    process.exit(1);
}

if (!config.clientId || config.clientId === "") {
    logger.error("Please supply a client ID in your environment variables");
    process.exit(1);
}

export default config;
