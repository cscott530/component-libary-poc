module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import { ${componentName} } from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";


describe("${componentName} Sample Tests", () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      title: "Test1",
      description: "Test2",
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it("should render", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("${componentName}ID");
    expect(testComponent).toBeTruthy();
  });

  it("should have title as passed as a prop", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("${componentName}ID");

    expect(testComponent.firstElementChild.textContent).toContain("Test1");
  });

  it("should have both title and description elements when passed as props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("${componentName}ID");

    expect(testComponent.childElementCount).toBe(2);
  });
});

`,
  extension: `.test.tsx`,
});
