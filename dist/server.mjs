import {
  registerForEvent
} from "./chunk-OI4SOXZT.mjs";
import {
  errorHandler
} from "./chunk-H3NAOUVC.mjs";
import {
  checkIn
} from "./chunk-G7EQJWEA.mjs";
import {
  createEvent
} from "./chunk-A7YSTEC2.mjs";
import "./chunk-677O5SV4.mjs";
import {
  getAttendeeBadge
} from "./chunk-6JKV2QA2.mjs";
import {
  getEventAttendees
} from "./chunk-VX5M4J6O.mjs";
import {
  getEvent
} from "./chunk-ETMFBFLE.mjs";
import "./chunk-UX6HP52O.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o Back-End da aplica\xE7\xE3o pass.in constru\xEDda durante o NLW Unite da RocketSeat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
