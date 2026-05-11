import { type Request, type Response } from "express";
import { prisma } from "../../prisma/lib/prisma";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


interface RegisterBody {
    email: string,
    password: string,
    name: string
};

interface LoginBody {
    email: string,
    password: string
}

const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body as LoginBody;
    
        const user = await prisma.user.findUnique({ where: { email }});
        if(!user) {
            res.status(404).json({ message: 'User not found' })
            return;
        } 
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            res.status(401).json({ message: 'Password incorrect' });
            return;
        }
    
        const { password: _, ...userData } = user;
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string,
            { expiresIn: '2h' })
    
        res.status(200).json({
            meta: {
                success: true,
                message: 'Login successful'
            },
            data: userData,
            token: token
        })
    } catch (error) {
        res.status(500).json({
            meta: {
                success: false,
                message: 'Internal server error',
            },
            errors: error instanceof Error ? error.message : 'Unknown error'
        })
    }
}

const register = async (req: Request, res: Response) => {
    try {
    
        const { email, password, name } = req.body as RegisterBody;
    
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { email, password: hashedPassword, name },
        });

        const { password:_, ...userData } = user;

        res.status(201).json({
            meta: {
                success: true,
                message: 'Register successful',
            },
            data: userData,
        })
        
    } catch (error) {
        res.status(500).json({
            meta: {
                status: false,
                message: 'Internal server error',
                errors: error instanceof Error ? error.message : 'Unknown error'
            }
        })
    }
}



export { register, login };