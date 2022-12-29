import { Field, Form } from 'formik';
import styled from '@emotion/styled';

export const PhonebookForm = styled(Form)`
  width: 200px;
  display: grid;
  gap: 20px;
`;

export const Lable = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled(Field)`
  border-radius: 20px;
  box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
    0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
  border: none;
  padding: 15px;
  /* width: 100%; */
  color: red;
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  background-color: #0367a6;
  background-image: linear-gradient(90deg, #0367a6 0%, #008997 74%);
  border-radius: 20px;
  border: 1px solid #0367a6;
  color: #e9e9e9;
  cursor: pointer;
  font-size: 0.6rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 10px 5px;
  text-transform: uppercase;
  text-align: center;
`;
