import { Injectable } from '@nestjs/common';

const hello: string = `
API ROUTES

Products
- GET https://menus-backend.vercel.app/products/
- GET https://menus-backend.vercel.app/products/'id'
- POST https://menus-backend.vercel.app/products/
- PUT https://menus-backend.vercel.app/products/'id' 
- DELETE https://menus-backend.vercel.app/products/'id'

Menu
- GET https://menus-backend.vercel.app/menu/
- GET https://menus-backend.vercel.app/menu/'id'
- POST https://menus-backend.vercel.app/menu/
- PUT https://menus-backend.vercel.app/menu/'id'
- DELETE https://menus-backend.vercel.app/menu/'id'

Category
- GET https://menus-backend.vercel.app/category/
- GET https://menus-backend.vercel.app/category/'id'
- POST https://menus-backend.vercel.app/category/
- PUT https://menus-backend.vercel.app/category/'id'
- DELETE https://menus-backend.vercel.app/category/'id'
`;

@Injectable()
export class AppService {
  getHello(): string {
    return hello;
  }
}
