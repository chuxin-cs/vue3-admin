import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// app
import { AppController } from './app.controller';
import { AppService } from './app.service';

// import module
import { UserModule } from './module/user/user.module';
import { UserEntity } from './module/user/user.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'gva',
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
