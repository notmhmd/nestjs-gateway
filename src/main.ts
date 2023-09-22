import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RpcExceptionFilter } from "./exception.filters";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new RpcExceptionFilter());
  await app.listen(3000);
}
bootstrap();
