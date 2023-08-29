import { Injectable } from '@nestjs/common';

const hello: string = `
API ROUTES\n

Products\n
- GET https://menus-backend.vercel.app/products/\n
- GET https://menus-backend.vercel.app/products/'id'\n
- POST https://menus-backend.vercel.app/products/\n
- PUT https://menus-backend.vercel.app/products/'id' \n
- DELETE https://menus-backend.vercel.app/products/'id'\n

Menu\n
- GET https://menus-backend.vercel.app/menu/\n
- GET https://menus-backend.vercel.app/menu/'id'\n
- POST https://menus-backend.vercel.app/menu/\n
- PUT https://menus-backend.vercel.app/menu/'id'\n
- DELETE https://menus-backend.vercel.app/menu/'id'\n

Category\n
- GET https://menus-backend.vercel.app/category/\n
- GET https://menus-backend.vercel.app/category/'id'\n
- POST https://menus-backend.vercel.app/category/\n
- PUT https://menus-backend.vercel.app/category/'id'\n
- DELETE https://menus-backend.vercel.app/category/'id'\n
`;

@Injectable()
export class AppService {
  getHello(): string {
    return hello;
  }
}
