import dotenv from 'dotenv';
dotenv.config();

export const apiKeyAuth = (req, res, next) => {
    const key = req.header(process.env.API_KEY_HEADER);
    if (!key || key !== process.env.API_KEY) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};
