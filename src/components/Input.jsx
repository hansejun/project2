import styled from "styled-components";

const InputBox = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
`;

function Input({ register, type, name }) {
  return <InputBox {...register} type={type} name={name}></InputBox>;
}

export default Input;
