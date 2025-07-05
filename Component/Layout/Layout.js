import styled from "styled-components";
import Navigation from "../Navigation/Navigation.js";

const Wrapper = styled.div`
  padding-bottom: 6rem; /* passt zur Höhe der fixen Navigation */
  min-height: 100vh;
  background-color: white;
`;
const BottomGap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6rem; /* gleiche Höhe wie Navigation */
  background-color: white;
  z-index: 999; /* unter Navigation (1000) */
`;

export default function Layout({ children }) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
      <BottomGap />
      <Navigation />
    </>
  );
}
