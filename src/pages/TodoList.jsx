import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Form from "../components/form/Form";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";
import { useSelector, useDispatch } from "react-redux";
import { changeTodo } from "../redux/modules/todos";
function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onDragEnd = (data) => {
    const idx = data.source.index;
    const targetIdx = data.destination.index;
    dispatch(changeTodo({ idx, targetIdx }));
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
