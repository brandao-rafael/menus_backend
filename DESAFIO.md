# Qual foi a maior dificuldade que você enfrentou ao realizar o teste?
##### Minha maior dificuldade foi trabalhar com o NestJs e com o PrismaORM, pois nunca tinha trabalhado com eles antes somente com Express e Sequelize, mas foi uma experiência muito boa, pois aprendi bastante coisa nova. A sintaxe no começo foi um pouco desafiadora mas após muita consulta na documentação pude entender melhor seus funcionamentos.
---
# Descreva a funcionalidade e o por quê da utilização das bibliotecas escolhidas por você para concluir o desafio.
##### Ultilizei o class validator para validar os dados de entrada, apesar de ja conhecer a biblioteca Joi, optei por utilizar o class validator pois era uma biblioteca que nunca havia trabalhado, mesmo não tendo aprofundado muito para não gastar muito tempo em uma próxima oportunidade de trabalhar com ela já terei uma base.
##### No restante do projeto utilizei as bibliotecas recomendadas, pois além de ter a oportunidade de conhecer NestJs e o PrismaORM, os requisitos do desafio pedem esses dois frameworks, então optei por utilizar as bibliotecas recomendadas pelos critérios do desafio.
##### Sobre a aplicação e o design pattern, optei por utilizar o design MSC, pois é um design pattern que já estou acostumado a utilizar e acho que é um design pattern que se encaixa bem em aplicações pequenas e médias, caso a aplicação fosse escalar seria legal mudar esse padrão, pois teriamos muitos controllers e services dentro de um diretório só.
##### Como banco de dados optei pelo mongoDb por ser um banco de dados remoto, porém não é a melhor escolha para esse tipo de aplicação, pois o mongoDb não é um banco relacional e logo que vi o desafio pensei em usar o MySql pois o mongoDb não é tão eficiente e consistente com transações entre documentos.
<br>

###Endpoints disponíveis:


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
---
#Como você se vê daqui a 5 anos?
##### Em cinco anos, visualizo-me em uma senioridade maior em uma empresa que valorize o aprendizado contínuo e a progressão de carreira, pois pretendo nunca deixar de aprender. No pessoal, espero ter realizado algumas aspirações, como voar de paramotor e vivenciar um Grande Prêmio de Fórmula 1 em Interlagos. Além disso, pretendo estar envolvido ativamente em causas sociais, sejam elas voltadas ao meio ambiente ou ao bem-estar animal.