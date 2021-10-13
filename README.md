# Component Library

This is the shared, reusable component library. To keep the components smaller, each individual component is its own node package within the repository (see `src/components/*`).

## What's different

To accomplish having one repository with multiple packages, we're using [Lerna](https://github.com/lerna/lerna). Some key concepts about Lerna:

  - Lerna is configured to look for `package.json` files inside of `src/components/*`. That's how it knows which modules it manages.
  - Use `lerna exec {command}` to execute something on each individual package. For example `lerna exec yarn` will install the dependencies for each individual package.
  - Use `lerna publish` to publish any individual component to our private repository.
    - This looks for changes to the component since its last commit (see `gitHead` in the component's `package.json`), and is configured to ignore changes to markdown files.
    - You will then be prompted _for each changed component_ to set its current version (see [https://semver.org/](https://semver.org/) for descriptions on what major vs. minor vs. patch means).
    - Lerna then executes a series of steps:
      1. Updates the version in the component's `package.json`.
      1. Commits the changes
      1. Creates a tag
      1. Pushes to `origin`.
      1. Runs `build` on the package.
      1. Publishes the new package to our private repository. This is configured in `lerna.json` (`commmand.publish.registry`).

After the package has been published, your consuming code can install as any other package `yarn add @ii/mycomponent`.


## Creating a new component

- `yarn new-component {componentName}`.
    - This creates a new entry in `src/components/{componentName}` and adds all necessary files and dependencies.
    - This runs `utils/create-component.js` and sources its content from `util/templates`.
    - The component's package name will automatically be prefixed with `@ii/`.

## Storybook
- `yarn storybook`
- Storybook is the interactive "playground" to be able to preview and test drive each of the components in here.
- The `new-component` command will create a `stories` folder inside the component's directory.
- Storybook is configured at the root level to look for stories in `src/components/*/stories.tsx` (important -- do not change that middle wildcard to `**` or it'll get stories inside the `node_modules` folders, too!), so even though each component is its own module, we can view them all at once from the root Storybook.

## Testing
- `yarn test`
- Runs all of the tests for each individual components.
- As with Storybook, this can be run at the global level to test everything at once, but the tests all live within their individual component.