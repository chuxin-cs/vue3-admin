import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  create(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.save(user);
  }

  async update(id: string, user: UserEntity): Promise<void> {
    await this.userRepository.update(id, user);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  getList(): any[] {
    return [
      { id: 1, name: 'Vue' },
      { id: 2, name: 'React' },
      { id: 3, name: 'Angular' },
      { id: 4, name: 'JQuery' },
    ];
  }
}
