import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    
    if (type == 'outcome') {
      const verifyIncomes = this.transactionsRepository.getTotalIncome(value);

      if (verifyIncomes){
        throw Error('Withdrawal is greater than the balance amount');
      }
    }

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type
    });

    return transaction;

  }
}

export default CreateTransactionService;
