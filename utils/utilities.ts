import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export const utilities = {
    encodePassword: async (pass: string) => {
        const hash = await bcrypt.hash(pass, 10);
        return hash
    },
    validatePassword: async (pass: string, hash: string) => {
        const result = await bcrypt.compare(pass, hash);
        return result;
    },
    generateToken: async (email: string) => {
        const token = await jwt.sign({
            data: email
        }, 'zoho-manager', { expiresIn: 60 });
        return token
    }
}