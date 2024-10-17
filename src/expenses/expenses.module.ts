/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ExpensesRepository } from './expenses.repository';
import {Expense} from './expense.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Expense])
    ],
    controllers:[ExpensesController],
    providers:[ExpensesService]
})
export class ExpensesModule {}
