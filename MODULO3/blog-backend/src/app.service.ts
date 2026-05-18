import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductDTO } from './product_dto';

@Injectable()
export class AppService {
  // 1. Cambiamos los IDs a números para que coincidan con el generador aleatorio
  private products: ProductDTO[] = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      stock: 15
    },
    {
      id: 2,
      name: "Laptop DELL",
      price: 999.99,
      stock: 15
    }
  ];

  getHealth(): any {
    return {
      status: 'online',
      service: 'blog service api', // Corregido "servise"
      version: '0.0.1',
      date: new Date()
    };
  }

  createProducto(product: ProductDTO): ProductDTO {
    const newProduct: ProductDTO = {
      ...product,
      id: Math.floor(Math.random() * 1000) + 1, // El ID se asigna al final o se sobreescribe
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): ProductDTO[] {
    return this.products;
  }

  // 2. Corregida la sintaxis y el tipo de retorno (ahora es un solo objeto)
  findById(id: string): ProductDTO {
    return this.products!.find(product => product.id === Number(id))!;
  }

  update(id: string, updatedProductDto: ProductDTO): any {
  const product: ProductDTO = this.products!.find(product => product.id === Number(id))!;
  if (!product) {
    return;
  }
  Object.assign(product, updatedProductDto);
  return product;
  }

  deleteById(id: string): any{
    const index = this.products!.findIndex(product => product.id === Number(id))!;
    if (index === -1){
      return;
    }
    const deletedProduct = this.products[index]
    this.products.splice(index, 1);
    return deletedProduct
  }

  areaTriangulo(data: any): any {
    const area = (data.base * data.altura) /2;
    return {
      "base": data.base,
      "altura": data.altura,
      "areaTriangulo": area,
    };
  }
}