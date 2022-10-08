const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const CHANGE_TODO = "todos/CHANGE_TODO";

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const removeTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const toggleTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const changeTodo = ({ idx, targetIdx }) => ({
  type: CHANGE_TODO,
  payload: { idx, targetIdx },
});

const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return [...state, { ...payload }];
    case DELETE_TODO:
      return [...state].filter((todo) => todo.id !== payload.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case CHANGE_TODO:
      let newTodos = [...state];
      [newTodos[payload.idx], newTodos[payload.targetIdx]] = [
        newTodos[payload.targetIdx],
        newTodos[payload.idx],
      ];
      return newTodos;
    default:
      return state;
  }
};

export default todos;
