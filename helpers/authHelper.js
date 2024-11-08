import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    try {
        const saltRoutes = 10;
        const hashedPassword = await bcrypt.hash(password, saltRoutes);
        return hashedPassword;
        } catch(error) {
        console.log(error)
    }
}


export const compareHashPassword = async (password, hashedPassword) => {
    return bcrypt.compare(password,hashedPassword)
}

