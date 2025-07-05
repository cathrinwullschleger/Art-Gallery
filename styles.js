import { createGlobalStyle } from "styled-components";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: "300", subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${raleway.style.fontFamily};
  }
  h1 {
    font-size: 5rem;

    display: flex;
   justify-content: center;
  }
  p {
  font-size: 1rem;
}
`;
