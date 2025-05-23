import createSwaggerPath from './path';
import createSwaggerSchema from './schema';

const swaggerDocInfo: object = {
  description: 'Dokumentasi Restfull API Transaction Converter',
  version: '1.0.0',
  title: 'TRANSACTION CONVERTER',
  contact: {
    email: '',
  },
  license: {
    name: 'MIT',
    url: 'https://opensource.org/licenses/MIT',
  },
};

export const swaggerDocLocalApi: object = {
  openapi: '3.0.0',
  info: swaggerDocInfo,
  servers: [
    {
      url: '/api/v1',
      description: 'Private API',
    },
  ],
  paths: createSwaggerPath(),
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: createSwaggerSchema(),
  },
};
