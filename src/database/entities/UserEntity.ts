import { User } from "@prisma/client";

class UserEntity implements User {
    
    readonly id: string;
    name: string;
    email: string;
    password: string;
    birthDate: Date;
    cellNumber: number;
    readonly created_at: Date;
    readonly updated_at: Date;
}

export { UserEntity };