import { Controller } from '@nestjs/common';
import { User2Service } from './user2.service';

@Controller('user2')
export class User2Controller {
  constructor(private readonly user2Service: User2Service) {}
}
