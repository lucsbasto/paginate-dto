import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { UserEntity } from './users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forRoot({
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    database: process.env.DB_NAME!,
    type: 'postgres',
    entities: [UserEntity],
    synchronize: true,
    logging: true,
    autoLoadEntities: true
  }),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
