import {
  CacheModule,
  HttpModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
}                           from '@nestjs/common';
import { TypeOrmModule }    from '@nestjs/typeorm/dist/typeorm.module';
import { Connection }       from 'typeorm';
import { AppController }    from './app.controller';
import { AppService }       from './app.service';
import { AuthModule }       from './Modules/Auth/auth.module';
import { UserModule }       from './Modules/User/user.module';
import { MailerModule }     from '@nestjs-modules/mailer';
import { PugAdapter }       from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { MongooseModule }   from '@nestjs/mongoose';
import { ConfigModule }     from '@nestjs/config';
import { SolutionModule }   from 'src/Modules/solution/solution.module';
import { AssessmentModule } from './Modules/assessment/assessment.module';
import { CategoryModule }   from './Modules/category/category.module';
import { ContactUsModule }  from './Modules/contact-us/contact-us.module';
import { ProductModule }    from './Modules/product/product.module';
import { ResourceModule }   from './Modules/resource/resource.module';

const overrideModules = [
  AuthModule,
  UserModule,
  SolutionModule,
  AssessmentModule,
  CategoryModule,
  ContactUsModule,
  ProductModule,
  ResourceModule,
  SolutionModule,
];
const nestModules = [
  MongooseModule.forRoot('mongodb://localhost/EWJ'),
  MailerModule.forRootAsync({
    useFactory: () => ({
      transport: 'smtps://ewj-portal@gmail.com:EWJ123123@smtp.gmail.com',
      defaults: {
        from: '"SIT APP" <sitapptr@gmail.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  }),
  CacheModule.register(),
  HttpModule,
  ConfigModule.forRoot({
    // expandVariables: true,
  }),
];

@Module({
  imports: [...nestModules, ...overrideModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }

  // constructor(private connection: Connection) {}
}
