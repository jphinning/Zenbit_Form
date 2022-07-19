import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';


import { ConfigurationModule } from './config/config.module';
import { FormsModule } from './forms/forms.module';

@Module({
  imports: [ConfigurationModule, FormsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
