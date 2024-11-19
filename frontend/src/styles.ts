import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
`;

export const ExpenseForm = styled.div`
  width: 25%;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    gap: 10px;
  }
`;

export const InputDescricao = styled.input`
  display: block;
  height: 200px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

export const Input = styled.input`
  display: block;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

export const ExpenseList = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
  border: 1px solid #ccc;
`;

export const ExpenseItem = styled.div`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    display: flex;
    gap: 10px;
  }
`;

export const ExpenseButton = styled(Button)`
  width: auto;
  padding: 5px 10px;
`;

export const Label = styled.p`
  margin: 0;
  font-size: 14px;
  color: black;
`;

export const LabelTitle = styled.p`
  margin: 0;
  font-size: 20px;
  color: black;
  font-weight: bold;
  text-align: center;
`;
