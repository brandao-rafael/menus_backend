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
- GET http://localhost:3001/products/
- GET http://localhost:3001/products/'id'
- POST http://localhost:3001/products/
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
- PUT http://localhost:3001/products/'id' 
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
- DELETE http://localhost:3001/products/'id'

### Menu
- GET http://localhost:3001/menu/
- GET http://localhost:3001/menu/'id'
- POST http://localhost:3001/menu/
```json
{
    "name": "nome do menu",
}
```
- PUT http://localhost:3001/menu/'id'
```json
{
    "name": "nome do menu",
}
```
- DELETE http://localhost:3001/menu/'id'

### Category
- GET http://localhost:3001/category/
- GET http://localhost:3001/category/'id'
- POST http://localhost:3001/category/
```json
{
    "name": "nome da categoria",
}
```
- PUT http://localhost:3001/category/'id'
```json
{
    "name": "nome da categoria",
}
```
- DELETE http://localhost:3001/category/'id'
