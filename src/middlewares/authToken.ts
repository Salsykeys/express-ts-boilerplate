import { type Request, type Response, type NextFunction } from "express";
import jwt from 'jsonwebtoken';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if(!authHeader) return res.status(401).json({
        meta: {
            success: false,
            message: 'Unauthenticated',
        }
    });

    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
        if(err) {
            const message = err.name === 'TokenExpiredError'
                ? 'Expired Token'
                : 'Invalid Token'
            return res.status(401).json({
                meta: {
                    success: false,
                    error: message
                }
            })
        }
        req.user = decoded as { id: number, email: string };
        next();
    })
}

export default verifyToken;