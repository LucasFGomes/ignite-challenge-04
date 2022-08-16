import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAlreadyExists = this.usersRepository.findById(user_id);

    if (!userAlreadyExists) {
      throw new Error(`User ${user_id} not already exists`);
    }

    if (!userAlreadyExists.admin) {
      throw new Error(`User ${user_id} not is admin`);
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
