import middyCore from "@middy/core";
import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from "aws-lambda";

// despite typing, only use the V2 format
// - https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html#http-api-develop-integrations-lambda.proxy-format
// - https://middy.js.org/docs/intro/typescript
// - https://middy.js.org/docs/writing-middlewares/with-typescript
export const middy = middyCore<
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2
>();
