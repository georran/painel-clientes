import { NumeroServicoModule } from './numero-servico/numero-servico.module';
import { Cliente } from './cliente/entities/cliente.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import 'reflect-metadata';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'cips_db.sqlite',
      entities: [Cliente],
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    ClienteModule,
    NumeroServicoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
