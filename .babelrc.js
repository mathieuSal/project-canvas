const isTest = String(process.env.NODE_ENV) === 'test'

{
  "presets": [
    ["@babel/preset-env"],
    "@babel/react",
    "@babel/preset-typescript"
  ],
  "plugins": ["@babel/plugin-proposal-object-rest-spread"]
}
