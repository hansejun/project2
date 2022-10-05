import styled from "styled-components";

function Form() {
  return (
    <FormBox>
      <ColorBox>
        <span>Color Picker</span>
        <div>
          <ColorInput color={"#F4CEB8"} type="radio" name="color" required />
          <ColorInput color={"#9BECC8"} type="radio" name="color" required />
          <ColorInput color={"#EEABE0"} type="radio" name="color" required />
          <ColorInput color={"#D4B6F4"} type="radio" name="color" required />
          <ColorInput color={"#F4B6B8"} type="radio" name="color" required />
        </div>
      </ColorBox>
      <InputBox>
        <input type="text" />
        <button>Add</button>
      </InputBox>
    </FormBox>
  );
}

export default Form;

const FormBox = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
`;
const ColorBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  div {
    margin-left: 20px;
  }
  span {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
    user-select: none;
  }
`;
const ColorInput = styled.input`
  appearance: none;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  &:checked {
    border: 2px solid #0175ff;
  }
`;
const InputBox = styled.div`
  width: 100%;
  border-radius: 20px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
  input {
    width: 80%;
    padding: 15px;
    border: none;
    border-radius: 20px 0px 0px 20px;
    outline: none;
    font-size: 15px;
  }
  button {
    width: 20%;
    padding: 15px;
    border: none;
    border-radius: 0px 20px 20px 0px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
