import styled from "styled-components";
import Todo from "../todo/Todo";

function List() {
  return (
    <ListBox>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </ListBox>
  );
}

export default List;

const ListBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 180px));
  gap: 20px;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
