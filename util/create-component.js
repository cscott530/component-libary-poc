require("colors");
const fs = require("fs");
const templates = require("./templates");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content
  );
});

console.log(
  "Successfully created component under: " + componentDirectory.green
);

// Add newly generated component to index.ts export
const exportDirectory = `./src/index.ts`;

const appendIndexComments = `\n// Your New Component Export \n`;
const appendIndexImports = `import { ${componentName} } from "./components/${componentName}/${componentName}"; \n`;
const appendIndexExports = `export { ${componentName} }; \n`;

fs.appendFile(exportDirectory, appendIndexComments, function (err) {
  if (err) throw err;
});

fs.appendFile(exportDirectory, appendIndexImports, function (err) {
  if (err) throw err;
});

fs.appendFile(exportDirectory, appendIndexExports, function (err) {
  if (err) throw err;
});