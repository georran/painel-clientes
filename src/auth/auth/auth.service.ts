import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

const users = [
    {
        id: 1,
        username: 'Joja',
        password: '$2b$10$lkhXp28cphMtDeg8a2Ep3eg/sLBORw9aSBL9x.kdRM0t4CQUaBYGi', //1597
        role: 'admin'
    },

    {
        id: 2,
        username: 'mariano',
        password: '$2b$10$lkhXp28cphMtDeg8a2Ep3eg/sLBORw9aSBL9x.kdRM0t4CQUaBYGi',
        role: 'user'
    }
]
@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {

    }
    login(username: string, password: string) {
        const user = this.validateCredentials(username, password);

        const payload = {
            sub: user.id,
            username: user.username,
            role: user.role
        };

        return this.jwtService.sign(payload);
    }

    validateCredentials(username: string, password: string) {
        const user = users.find(
            u =>
                u.username === username && bcrypt.compareSync(password, u.password),
        );

        if (!user)
            throw new Error("Usuário não encontrado");


        return user;
    }
}
