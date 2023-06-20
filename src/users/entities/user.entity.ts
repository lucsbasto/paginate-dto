import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @PrimaryGeneratedColumn()
  @Exclude()
  public id: number;

  @CreateDateColumn()
  @Exclude()
  public createdAt: Date;
}
