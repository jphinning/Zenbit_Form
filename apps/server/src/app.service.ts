import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AppService {

  // constructor(
  //   @InjectRepository(Form)
  //   private formRepository: Repository<Form>
  // ){}

  getHello(): string {
    return 'Hello World!';
  }
}
