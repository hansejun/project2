import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Todo from "../todo/Todo";

function List({ todos, id }) {
  return (
    <Droppable droppableId={Date.now() + ""}>
      {(provided, info) => (
        <ListBox
          id={id}
          ref={provided.innerRef}
          isDraggingOver={info.isDraggingOver}
          isDraggingFromThis={Boolean(info.draggingFromThisWith)}
          {...provided.droppableProps}
        >
          {todos?.map((todo, index) => (
            <Todo {...todo} key={todo.id} index={index} />
          ))}
          {provided.placeholder}
        </ListBox>
      )}
    </Droppable>
  );
}

export default List;

const ListBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 180px));
  gap: 20px;
  min-height: 380px;
  max-height: 420px;
  padding: 20px 0px;
  overflow-y: scroll;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
