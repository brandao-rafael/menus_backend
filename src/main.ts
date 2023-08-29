import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
const express = require('express');

const server = express();

async function createNestApp() {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
    await app.init();
    return server;
}

createNestApp();

export default server;
