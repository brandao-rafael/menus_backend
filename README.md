# Menus backend

## Overview
This application made for a technical challenge for a backend developer vacancy for a backend job provide a crud to manage menus, categories and products.

## Used technologies
- Node.js
- Nest.js
- Typescript
- PrismaORM
- MongoDB

## How to run
- Clone this repository
- Run `npm install`
- Run `npm run start:dev`

## Endpoints
### Products
- GET https://menus-backend.vercel.app/products/
- GET https://menus-backend.vercel.app/products/'id'
- POST https://menus-backend.vercel.app/products/
```json
{
    "name": "nome do prato",
    "description": "descrição do prato",
    "price": 10.00,
    "image": "url da imagem",
    "category": "categoria do prato",
    "menu": "Diurno ou Noturo"
}
```
- PUT https://menus-backend.vercel.app/products/'id' 
```json
// não é necessário enviar todos os campos
{
    "name": "nome do prato",
    "description": "descrição do prato",
    "price": 10.00,
    "image": "url da imagem",
    "category": "categoria do prato",
    "menu": "Diurno ou Noturo"
}
```
- DELETE https://menus-backend.vercel.app/products/'id'

### Menu
- GET https://menus-backend.vercel.app/menu/
- GET https://menus-backend.vercel.app/menu/'id'
- POST https://menus-backend.vercel.app/menu/
```json
{
    "name": "nome do menu",
}
```
- PUT https://menus-backend.vercel.app/menu/'id'
```json
{
    "name": "nome do menu",
}
```
- DELETE https://menus-backend.vercel.app/menu/'id'

### Category
- GET https://menus-backend.vercel.app/category/
- GET https://menus-backend.vercel.app/category/'id'
- POST https://menus-backend.vercel.app/category/
```json
{
    "name": "nome da categoria",
}
```
- PUT https://menus-backend.vercel.app/category/'id'
```json
{
    "name": "nome da categoria",
}
```
- DELETE https://menus-backend.vercel.app/category/'id'
