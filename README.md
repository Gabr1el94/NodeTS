# NODE-TS

![N|Solid](data:image/png;base64,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)

# O que é NodeJS?
   - É uma plataforma em desenvolvimento voltado ao service-side, onde é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados. Nisso podemos utilizar como console, browser, e também API's-client para executar em testes à manipulação de dados.

# O que é TypeScript!

  É um superconjunto que foi desenvolvido pela equipe da Microsoft com o objetivo de realizar a paradigma de Orientação a Objeto, e transpilar em que introduz aprimoramentos de sintaxes na linguagem em JS. 
##### Obs: Ele não veio como substituto do JS, e sim um complemento para facilitar o caminho na hora de programar.

# Por que usar o Node-TS? 
  Como já tinha falado anteriormente que o TS é o complemento do JS. Logo, significa que posso utilizar em quaisquer frameworks que foi desenvolvido em Javascript(dependendo da sua necessidade).

# Como Implementar?

 ***1º)*** Instale gerenciamento de pacote global através por este comando:
```
   npm install -g typescript ts-node
```
 ***2º)*** Primeiramente devemos criar um arquivo "tsconfig.json" e depois implementar as configurações abaixo que será compilado em TS:
```{
    "compilerOptions": {
      "target": "es6", 
      "module": "commonjs",
      "moduleResolution": "node",
      "sourceMap": true,
      "pretty": true,
      "baseUrl": "./src",
      "outDir":"./dist"
    },
    "include": [
      "src/**/*.ts"
    ],
    "exclude": [
      "node_modules"
    ]
  }
```

 ***3º)*** Inicia o gerenciamento de pacotes do NodeJS:
```sh
   $ mkdir TestNode 
   $ cd TestNode
   $ npm init -y
```
 ***4º)*** Instalando as dependências:
```
     npm install --save @types/express express body-parser mongoose   nodemon
```
 ***5º)*** Configurando pelo o arquivo "packages.json" :
```
   {
  "name": "NodeTS",
  "version": "1.0.0",
  "description": "API restful with Node and Tyscript.",
  "main": "index.js",
  "scripts": {
    "build": "tsc",
    "dev": "ts-node ./src/server.ts",
    "start": "nodemon ./dist/server.js",
    "prod": "npm run build && npm run start"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.16.1",
    "body-parser": "^1.18.3",
    "express": "^4.16.4",
    "gulp": "^3.9.1",
    "gulp-typescript": "^3.1.1",
    "mongoose": "^5.4.6",
    "nodemon": "^1.18.9",
    "typescript": "^2.0.6"
  },
  "dependencies": {
    "@types/express": "^4.16.1",
    "body-parser": "^1.18.3",
    "express": "^4.16.4",
    "mongoose": "^5.4.6",
    "nodemon": "^1.18.9"
  }
}
```
 ***6º)*** Crie um arquivo "/lib/app.ts" :
  ```
     npm install --save @types/express express body-parser mongoose   nodemon
 ```
 
***7º)*** Crie um arquivo e implemente classe "/lib/app.ts"  :
```
 import * as express from "express";
 import * as bodyParser from "body-parser";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();        
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;
```

***8º)*** Crie um arquivo e implemente primeira rota de teste service "/lib/service.ts"  :
```
    import app from "./app";
    const PORT = 3000;

    app.listen(PORT, () => {
       console.log('Express server listening on port ' + PORT);
    })
```

***9º)*** Após implementação execute o teste:
   ```
     npm run dev
  ```
  And Good Programming!
