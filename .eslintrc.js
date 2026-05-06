module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "airbnb",
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "requireConfigFile": false,
    "babelOptions": {
      "presets": ["@babel/preset-react"]
    }
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "react/function-component-definition": 0,
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "camelcase": 0,
    "react/no-array-index-key": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "react/no-unescaped-entities": 0
  }
};
