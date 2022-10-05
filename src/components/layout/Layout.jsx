import styled from "styled-components";

function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;

const Wrapper = styled.div`
  background-color: #ececee;
  width: 700px;
  min-height: 650px;
  margin: 0 auto;
  border-radius: 30px;
  padding: 50px 20px 30px 20px;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
