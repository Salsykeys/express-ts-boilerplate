import z from "zod/v3";

const registerSchema = z.object({
    email: z.string().email('Email is required'),
    password: z.string().min(6, 'Minimum length is 6 characters'),
    name: z.string().min(3, 'Minimum length is 3 characters')
})

const loginSchema = z.object({
    email: z.string().email('Email is required'),
    password: z.string()
});

export { registerSchema, loginSchema };