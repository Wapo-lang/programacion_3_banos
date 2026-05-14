import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): any {
    return {
      "status": "Online",
      "service": "Blog service api",
      "version": "0.0.1",
      "date": new Date()
    };
  }
}