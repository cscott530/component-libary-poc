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

fs.copyFileSync('./util/templates/tsconfig.jsonc', `${componentDirectory}/tsconfig.json`)

console.log(
  "Successfully created component under: " + componentDirectory.green
);

// Now do install. CD into new component's directory and install its components
process.chdir(componentDirectory);

console.log("Installing dependencies.");
exec(`yarn add styled-components`);
console.log(
  "Done!" + componentDirectory.green
);

console.log("Installing dev dependencies. This may take a while.");
exec(`yarn add -D husky react @types/react react-dom @types/react-dom tsdx tslib typescript @types/styled-components @typescript-eslint/parser`);
console.log(
  "Done!" + componentDirectory.green
);

console.log('Finalizing....')
exec('yarn');
console.log(
  "Done!" + componentDirectory.green
);