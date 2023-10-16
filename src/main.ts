import { NestFactory } from "@nest";
import { HonoRouter } from "@nest/hono";
import { AppModule } from "./app.module.ts";
import { HttpExceptionFilter } from "./exception.ts";

const app = await NestFactory.create(AppModule, HonoRouter);
// app.setGlobalPrefix("/api");
app.useGlobalFilters(HttpExceptionFilter);

const port = 8000;
app.listen({ port });
