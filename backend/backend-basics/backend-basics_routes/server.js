import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/") {
    response.end("Look at /api/fish/1 or /api/fish/2");
  } else if (request.url === "/api/fish/1") {
    response.statusCode = 200;
    response.end("Shrimp");
  } else if (request.url === "/api/fish/2") {
    response.statusCode = 200;
    response.end("Anemonefish");
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});
