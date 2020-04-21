import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getTotalIncome(outcome: Number) {

    const incomes = this.transactions.reduce((acumulador, currentValue) => {
      if(currentValue.type == 'income') {
        acumulador += currentValue.value;
      } 

      return acumulador;
    }, 0);

    const outcomes = this.transactions.reduce((acumulador, currentValue) => {
      if(currentValue.type == 'outcome') {
        acumulador += currentValue.value;
      } 

      return acumulador;
    }, 0);

    const total = incomes - outcomes;

    if(total >= 0){
      if(outcome > total){
        return true;
      }
    } else {
      return true;
    }

  }

  public getBalance(): Balance {

    const incomes = this.transactions.reduce((acumulador, currentValue) => {
      if(currentValue.type == 'income') {
        acumulador += currentValue.value;
      } 

      return acumulador;
    }, 0);

    const outcomes = this.transactions.reduce((acumulador, currentValue) => {
      if(currentValue.type == 'outcome') {
        acumulador += currentValue.value;
      } 

      return acumulador;
    }, 0);

    const total = incomes - outcomes;

    const balance : Balance = {
      income: incomes,
      outcome: outcomes,
      total
    }

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({
      title, 
      value, 
      type,
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
