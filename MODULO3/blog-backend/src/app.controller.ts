import { Body, Controller, Delete, Get,Inject,Param,Post, Put} from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDTO } from './product_dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHealth(): any {
    return this.appService.getHealth();
  }

  @Post("/products")
  createProducto(@Body() product:ProductDTO): ProductDTO {
    return this.appService.createProducto(product);
  }
  @Get("/products")
  findAll(): ProductDTO[] {
    return this.appService.findAll();
  }

  @Get("/products/:id")
  findById(@Param('id') id: string): ProductDTO {
    return this.appService.findById(id);
  }

  @Put("/products/:id")
  update(@Param('id') id: string, @Body() updatedProductDto: ProductDTO): any {
    return this.appService.update(id, updatedProductDto);
  }

  @Delete("/products/:id")
  deleteById(@Param('id') id: string): ProductDTO {
    return this.appService.deleteById(id);
  }
  
  @Post("/area-triangulo")
  areaTriangulo(@Body() data: any): any{
    return this.appService.areaTriangulo(data);
  }
}
