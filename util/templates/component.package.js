module.exports = (componentName) => ({
  content: `{  "version": "0.0.1",
  "license": "MIT",
  "main": "dist/index.js",
  "typings": "dist/index.d.ts",
  "files": [
    "dist",
    "src"
  ],
  "engines": {
    "node": ">=10"
  },
  "scripts": {
    "start": "tsdx watch",
    "build": "tsdx build",
    "test": "tsdx test --passWithNoTests",
    "lint": "tsdx lint",
    "prepare": "tsdx build"
  },
  "husky": {
    "hooks": {
      "pre-commit": "tsdx lint"
    }
  },
  "prettier": {
    "printWidth": 80,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "es5"
  },
  "name": "@ii/${componentName.toLowerCase()}",
  "author": "Insider Intelligence",
  "module": "dist/${componentName.toLowerCase()}.esm.js",
  "peerDependencies": {
    "react": ">=16"
  }
}

`,
  fileName: `package.json`,
  directory: `/`
});

