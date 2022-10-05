import styled from "styled-components";

function Todo() {
  return (
    <TodoBox>
      <TodoContent>
        <h3>Financial App</h3>
        <span>18 May 2020</span>
      </TodoContent>
      <TodoBtns>
        <span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
        <span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </span>
      </TodoBtns>
    </TodoBox>
  );
}

export default Todo;

const TodoBox = styled.div`
  width: 100%;
  height: 170px;
  background-color: #9becc8;
  border-radius: 20px;
  padding: 15px 20px 20px 20px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TodoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  h3 {
    font-size: 23px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  span {
    font-size: 13px;
    color: #565656;
    font-weight: 500;
  }
`;
const TodoBtns = styled.div`
  display: flex;
  justify-content: end;
  span {
    width: 30px;
    height: 30px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 5px;
    transition: background-color 0.2s linear;
    svg {
      width: 18px;
      color: black;
    }
    cursor: pointer;
    &:last-child {
      background-color: rgba(0, 0, 0, 0.9);
      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
      }
      svg {
        color: white;
      }
    }
    &:first-child {
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        svg {
          color: white;
        }
      }
    }
  }
`;
