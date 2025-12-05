import dotenv from "dotenv";
import fs from 'fs';

dotenv.config();

export const logger = (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const method = req.method;
    const path = req.originalUrl;

    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const yyyy = now.getFullYear();
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');

    const time = `${dd}.${mm}.${yyyy} ${hh}:${min}:${ss}`;

    const logLine = `[${time}] ${ip} ${method} ${path}\n`;

    if (process.env.NODE_ENV === "PROD") {
        console.log(logLine);
    } else if (process.env.NODE_ENV === "DEV") {
        fs.appendFileSync('access.log', logLine);
    }

    next();
};
