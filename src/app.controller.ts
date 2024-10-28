import { Body, Controller, Get, Params, Post, Query } from "@nest/core";
import { AppService } from "./app.service.ts";
import { SaveDto } from "./app.dto.ts";

@Controller("")
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get("/")
  hello() {
    return this.appService.hello();
  }

  @Get("/hello/:name")
  helloName(@Params("name") name: string) {
    return `Hello ${name}!`;
  }

  @Get("/query")
  query(@Query("name") name: string) {
    return `Hello ${name}!`;
  }

  /**
   * This example will auto validate the body, because the SaveDto used the `class_validator` decorators.
   *
   * If you set  `SaveDto` to `any` or a interface, it will not work.
   */
  @Post("/save")
  save(@Body() body: SaveDto) {
    console.log(body);
    return {
      success: true,
      data: body,
    };
  }
}
