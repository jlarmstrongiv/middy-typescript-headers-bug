import { middy } from "./middy";

export const handler = middy.handler(({ headers }) => ({
  body: JSON.stringify(headers, undefined, 2),
  statusCode: 200,
}));
