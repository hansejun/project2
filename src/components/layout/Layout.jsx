import styled from "styled-components";

function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;

const Wrapper = styled.div`
  background-color: #ececee;
  width: 740px;
  min-height: 650px;
  margin: 0 auto;
  border-radius: 30px;
  padding: 50px 20px 30px 20px;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3.6fr 1fr;
  overflow: hidden;
  position: relative;
`;
