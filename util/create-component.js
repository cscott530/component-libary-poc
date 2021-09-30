require("colors");
const { exec } = require("child_process");
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
  const fileDirectory = `${componentDirectory}${template.directory}`;
  if (!fs.existsSync(fileDirectory)) {
    fs.mkdirSync(fileDirectory);
  }

  const fileName = template.fileName || `${componentName}${template.extension}`;
  fs.writeFileSync(
    `${fileDirectory}${fileName}`,
    template.content
  );
});

fs.copyFileSync('./util/templates/tsconfig.json', `${componentDirectory}/tsconfig.json`)

console.log(
  "Successfully created component under: " + componentDirectory.green
);

// Add newly generated component to index.ts export
const exportDirectory = `./src/index.ts`;

const appendIndexComments = `\n// Import & Export ${componentName} \n`;
const appendIndexImports = `import { ${componentName} } from "./components/${componentName}"; \n`;
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



console.log("Install dependencies, now. This may take a while.");
// Now do install
process.chdir(componentDirectory);
exec(`yarn add -D @types/react @types/react-dom husky react react-dom tsdx tslib typescript styled-components`);