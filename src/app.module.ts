import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
// import { UsersModule } from './users/users.module';
// import { AuthModule } from './authentication/auth.module';
// import { JwtStrategy } from './authentication/jwt.strategy';
// import { ProductsModule } from './products/products.module';
// import { SystemsModule } from './System/systems.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
