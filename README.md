# NODE-TS
![download](https://user-images.githubusercontent.com/13353050/59777167-840b8380-928a-11e9-82b3-143a1d8ecd5d.png)
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
 ***6º)*** Instalação as dependências no ambiente :
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
