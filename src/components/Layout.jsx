import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;
