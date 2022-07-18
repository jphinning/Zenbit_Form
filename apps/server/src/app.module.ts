import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Form } from './forms/entities/form.entity';

import { FormsModule } from './forms/forms.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-52-205-61-230.compute-1.amazonaws.com',
      port: 5432,
      username: 'bvlbejsauwumma',
      password: '42193267f52b60fdf75d7a5618d3c1753807bd051048d75325a6b9a0f64028c3',
      database: 'desfqtmrcdstak',
      entities: [Form],
      synchronize: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    FormsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
