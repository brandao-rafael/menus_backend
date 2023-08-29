import { Injectable } from '@nestjs/common';

const hello: string = `
<h1>API ROUTES</h1>

<ul>Products
<li>GET https://menus-backend.vercel.app/products/</li>
<li>GET https://menus-backend.vercel.app/products/'id'</li>
<li>POST https://menus-backend.vercel.app/products/</li>
<li>PUT https://menus-backend.vercel.app/products/'id'</li>
<li>DELETE https://menus-backend.vercel.app/products/'id'</li>
</ul>

<ul>Menu
<li>GET https://menus-backend.vercel.app/menu/</li>
<li>GET https://menus-backend.vercel.app/menu/'id'</li>
<li>POST https://menus-backend.vercel.app/menu/</li>
<li>PUT https://menus-backend.vercel.app/menu/'id'</li>
<li>DELETE https://menus-backend.vercel.app/menu/'id'</li>
</ul>

<ul>Category
<li>GET https://menus-backend.vercel.app/category/</li>
<li>GET https://menus-backend.vercel.app/category/'id'</li>
<li>POST https://menus-backend.vercel.app/category/</li>
<li>PUT https://menus-backend.vercel.app/category/'id'</li>
<li>DELETE https://menus-backend.vercel.app/category/'id'</li>
</ul>
`;

@Injectable()
export class AppService {
  getHello(): string {
    return hello;
  }
}
