```npm run test:unit```

- configurado dentro do package.json os tipos e config de testes
```
    "test": "npm run test:unit && npm run test:integration",
    "test:integration": "NODE_ENV=test mocha --require @babel/register --opts tests/integration/mocha.opts tests/integration/**/*.spec.js",
    "test:unit": "NODE_ENV=test mocha --require @babel/register --opts tests/unit/mocha.opts tests/unit/**/*.spec.js"
```