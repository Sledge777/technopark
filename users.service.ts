import {Injectable} from '@nestjs/common';
import {User} from "../Backend/src/users/users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "../Backend/src/users/dto/create-user.dto";
import {RolesService} from "../Backend/src/roles/roles.service";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RolesService) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("USER")
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user;
    }
}
