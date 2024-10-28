import { Catch, Context, ExceptionFilter, HttpException } from "@nest/core";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, context: Context) {
    // console.log("httpException-----", exception);
    context.response.status = exception.status;
    context.response.body = {
      statusCode: exception.status,
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: context.request.url,
      type: "HttpExceptionFilter",
    };
  }
}
