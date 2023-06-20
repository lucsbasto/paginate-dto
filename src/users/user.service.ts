import { Injectable } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { UserRepository } from './user.repository';
import { PageDto, PageMetaDto, PageOptionsDto } from 'src/common/dtos';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

  public async getUsers(
    pageOptionsDto: PageOptionsDto
  ): Promise<PageDto<UserDto>> {
    const { count, result } = await this._userRepository.getUsers(pageOptionsDto);

    
    const pageMetaDto = new PageMetaDto({ itemCount: count, pageOptionsDto });

    return new PageDto(result, pageMetaDto);
  }
}
