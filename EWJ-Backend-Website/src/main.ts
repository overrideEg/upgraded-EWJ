import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as admin from 'firebase-admin';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { AllExceptionsFilter } from './shared/exception.filter';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { SwaggerModule } from '@nestjs/swagger';
// const cluster = require('cluster');
// const numCPUs = require('os').cpus().length;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());
  app.use(helmet());

  app.setGlobalPrefix('v1');
  app.enableCors();
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  //   }),
  // );
  app.useGlobalFilters(new AllExceptionsFilter());
  const options = new DocumentBuilder()
    .setTitle('EWJ Website Endpoints')
    .setDescription('EWJ Website EndPoints Docs')
    .setVersion('1.0')
    .setContact('override', 'https://overrideeg.com', 'info@overrideeg.com')
    .addBearerAuth()
    .setTermsOfService('https://overrideeg.com/privacy-policy.html')
    .build();

  const configService: ConfigService = app.get(ConfigService);

  const adminConfig: admin.ServiceAccount = {
    projectId: 'beutydoz',
    privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDbGfWjPAA5WoZ9\nS4HhGUWDCt5ox5v6nYfuUcLimSPvxsC29qiDTlIhPWm479NM1KBi+8cm1fdJKPzJ\nbbRpowBMresjD13HLtI3FnxHVDeW2gG/SyyFLsvmWZaLsUhlbOuw6OCRijG7wM3J\nVpzkNmoKW9XhWdO9CwVl6ytfPFhfp/PA9emMscGamPfE6+AX6f4AcwDxqNerZGYO\nHcuTKD/I7/DqkK6mtr73X6VACtwnDG8n4RJ+Y8koPyy83bHNNGEggVBElEzVFZOS\noyQ+uRTM7IMVftRYe+cE9hHe/pLnS5u4aN2p6MueK3MDr6BwV/ARi6SpJi9dK99n\nTnJMN3lDAgMBAAECggEAQpnaBsQa51RCtHyK3vNxI1ve7qfanKxdIQ7+eCYH+/+F\nHjjNUZixs4P5CqvwJZcup9gUGhSJZlZMvSgZYtEXKrflVZN6tKzhXrh5j68kdLkR\nNeZygouOlJdgAVejA52/6VdoyCTjaEi75TtsVpzJ0BtJYQaOrBTZD7mURg9QZ8bU\nIkdbmobVT9HeOAAxvkaJ5DLEY7prZUZ5WIrpUts2/mwb4ZzSnEw1SD0u4VYFI4dn\nJT6rTc5dCCcb/77U+6kPg49A9REnYwj8xlhvW0PwGOLW5A00oT4pwqXWg2Vbu7sO\naptrfIhVgeLGpff3Uyk05tHpWSo0SWKf24tY7sLP8QKBgQD+W9/xcuOJLt6nNrYf\n5kzfJORmsuUrofs54HS34puWax44fF36LqK7ys0fC0mgBao6+W8PGN804u/9XmT6\ng4aLGZszajfP+R1tAjWnrhr17DLapGia6YdFfJL99vvrl/LBnuUd8QDZo7700tpf\nfjb05TR94ocYM1MjeLhr6/1y0QKBgQDcg9mRMiu45cQeeqIpDB51Qs1F4dHP9SkD\n5Fu2avAqGbRDaVnP+U+ZTnP24ONBueRevyF95mzGnLQNdwsznAYq70a9yakkJNHx\nOwcDvHC3IdBCImb/94hfV7OuGH8o580LMVJ6qIE342EbZLi8G/Tj9whlOLnqmNSg\nEe9ZPZQn0wKBgQDiA81YBJh+e3FI7+qhKcjAt01knC3auZI8eV/9TZSm8gPmeUwg\nVHQxniDqJuODF8WNpbqzlYwwuD47yza7C0fwLg6kfwuc92TYShBXMPOv9fOyKEjy\n7fNPIUST+nUbgOcqeQBpvI7e1QuHDB0SoVo//bLI8RLNxD1p1Yk6DHYnIQKBgHx1\nWk2N0ImJ/Pfq5S1frq0mJ+9iNeY2i5CryWuazbQlT82gX1V3dAql8eOMKBfHkHI9\nU+zYKdqrRSA4aTUWwZBn/jhN4k4JDgkl9J6SM9fYmM9K1XFwxyJwwHPpVZPDyMGh\nc9jQ1CW0CvHIFk/tQ3mKys0+iAg1fARgOwPWMpGLAoGAIqY6MyQudRL4xVrx11nB\ntEBoWDo7r5XePfidOWEqxDOLkEAYKtpa+/F11bVZnOjvnZ0Rk1iUTSbhgXvqeu2e\nBYDJ9CPx+r6WzpphEniQuVw2Rz0QTFZwzyNM9n7jZNGVhSAsVPaKw5UTJYELZdys\n0nlGqAAHbw02xLooTdk6SEA=\n-----END PRIVATE KEY-----\n'.replace(
      /\\n/g,
      '\n',
    ),
    clientEmail: 'firebase-adminsdk-t4fci@beutydoz.iam.gserviceaccount.com',
  };

  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
  });
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // In this case it is an HTTP server
  await app.listen(process.env.PORT || 3019, () => {
    console.log('App Started at port', process.env.PORT || 3019);
  });
}
bootstrap();
