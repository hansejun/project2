import { DragDropContext } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todosState } from "../atom";
import Form from "../components/form/Form";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

function TodoList() {
  const [todos, setTodos] = useRecoilState(todosState);
  const onDragEnd = (data) => {
    const idx = data.source.index;
    const targetIdx = data.destination.index;
    console.log(idx, targetIdx);
    setTodos((prev) => {
      let newTodos = [...prev];
      [newTodos[idx], newTodos[targetIdx]] = [
        newTodos[targetIdx],
        newTodos[idx],
      ];
      return newTodos;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Layout>
        <Lists>
          <List todos={todos} id={1} />
        </Lists>
        <Form />
      </Layout>
    </DragDropContext>
  );
}

export default TodoList;

const Lists = styled.div`
  width: 100%;
  display: flex;
`;

// <List todos={todos.filter((todo) => todo.isDone)} id={2} />
