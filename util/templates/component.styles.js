module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import styled from "styled-components";
// IMPORT CONSTANTS FROM THEME FOLDER FOR USE HERE
// import { COLOR, TYPOGRAPHY } from "../../theme/constants";

export const ${componentName}Wrapper = styled.div\`
  background-color: azure;
\`;

export const ${componentName}Heading = styled.h1\`
  color: black;
\`;

export const ${componentName}Description = styled.h2\`
  color: black;
\`;

`,
  extension: `.styles.tsx`,
  directory: `/src/`
});
