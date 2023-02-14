import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-height: 184px;
`;

interface IProps {
  children: React.ReactNode;
}
const FormCart: React.FC<IProps> = ({ children }) => (
  <Container className=" bg-alt relative  dark:bg-altDark h-fit p-4 shadow-md dark:shadow-stone-800  rounded-md">
    {children}
  </Container>
);

export default FormCart;
