import { DataSource, Repository } from "typeorm";
import { UserEntity } from "./entities/user.entity";
import { PageOptionsDto } from "src/common/dtos";
import { Injectable } from "@nestjs/common";

@Injectable()

export class UserRepository extends Repository<UserEntity> {
  constructor (private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager())
  }

  async getUsers(pageOptionsDto: PageOptionsDto): Promise<{count: number, result: UserEntity[]}>{
    const {skip, take, order} = pageOptionsDto
    const queryBuilder = this.createQueryBuilder("user")
    .orderBy("user.createdAt", order)
    .skip(skip)
    .take(take)
    const count = await queryBuilder.getCount()
    const result = await queryBuilder.getMany()
    return {count, result}
  }
}