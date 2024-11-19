import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Para chamadas à API
import { 
  Button, 
  Container, 
  ExpenseButton, 
  ExpenseForm, 
  ExpenseItem, 
  ExpenseList, 
  Input, 
  InputDescricao, 
  Label, 
  LabelTitle 
} from './styles';

interface Expense {
  _id: string;
  description: string;
  amount: number;
  date: string;
}

const App: React.FC = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [total, setTotal] = useState<number>(0);

  // Função para carregar as despesas e o total
  const fetchExpenses = async () => {
    try {
      const { data: expenseData } = await axios.get('http://localhost:3010/despesa');
      const { data: totalAmount } = await axios.get('http://localhost:3010/despesa/total');
      setExpenses(expenseData);
      setTotal(totalAmount);
    } catch (error) {
      console.error('Erro ao buscar despesas:', error);
    }
  };

  // Carrega as despesas ao montar o componente
  useEffect(() => {
    fetchExpenses();
  }, []);

  // Função para criar uma nova despesa
  const handleCreateExpense = async () => {
    try {
      const newExpense = {
        description,
        amount: parseFloat(amount),
        date,
      };
      await axios.post('http://localhost:3010/despesa', newExpense);
      setDescription('');
      setAmount('');
      setDate('');
      fetchExpenses(); // Atualiza a lista de despesas
    } catch (error) {
      console.error('Erro ao cadastrar despesa:', error);
    }
  };

  // Função para excluir uma despesa
  const handleDeleteExpense = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3010/despesa/${id}`);
      fetchExpenses(); // Atualiza a lista de despesas
    } catch (error) {
      console.error('Erro ao excluir despesa:', error);
    }
  };

  // Função para atualizar uma despesa
  const handleUpdateExpense = async (id: string) => {
    const updatedDescription = prompt('Descrição:', '');
    const updatedAmount = prompt('Valor:', '');
    const updatedDate = prompt('Data (YYYY-MM-DD):', '');

    if (updatedDescription && updatedAmount && updatedDate) {
      try {
        const updatedExpense = {
          description: updatedDescription,
          amount: parseFloat(updatedAmount),
          date: updatedDate,
        };
        await axios.put(`http://localhost:3010/despesa/${id}`, updatedExpense);
        fetchExpenses(); // Atualiza a lista de despesas
      } catch (error) {
        console.error('Erro ao atualizar despesa:', error);
      }
    }
  };

  return (
    <Container>
      <ExpenseForm>
        <LabelTitle>Controle de Despesas</LabelTitle>
        <InputDescricao 
          placeholder="Descrição da Despesa" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <Input 
          type="number" 
          placeholder="Valor" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
        <Input 
          type="date" 
          placeholder="Data" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
        <Button onClick={handleCreateExpense}>Cadastrar Despesa</Button>
      </ExpenseForm>

      <ExpenseList>
        <LabelTitle>Total das Despesas: R$ {total.toFixed(2)}</LabelTitle>
        {expenses.map((expense) => (
          <ExpenseItem key={expense._id}>
            <Label>Descrição: {expense.description}</Label>
            <Label>Valor: R$ {expense.amount.toFixed(2)}</Label>
            <Label>Data: {new Date(expense.date).toLocaleDateString()}</Label>
            <div>
              <ExpenseButton onClick={() => handleUpdateExpense(expense._id)}>Alterar</ExpenseButton>
              <ExpenseButton onClick={() => handleDeleteExpense(expense._id)}>Excluir</ExpenseButton>
            </div>
          </ExpenseItem>
        ))}
      </ExpenseList>
    </Container>
  );
};

export default App;
