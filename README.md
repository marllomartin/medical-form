# Formulário Médico
<div align="center">
<img src=https://i.imgur.com/UGAHSfu.png>
</div>

## Tecnologias Utilizadas
* [JavaScript](https://www.javascript.com/)
* [Docker](https://www.docker.com/)
### Back-End
* [MySQL](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)
* [Node.js](https://nodejs.org/en/)
  * [Express](https://expressjs.com/pt-br/)
  * [CORS](https://www.npmjs.com/package/cors)
  * [HTTP-Status-Codes](https://www.npmjs.com/package/http-status-codes)

### Front-End
* [React](https://reactjs.org/)
  * [React Icons](https://react-icons.github.io/react-icons/)
  * [react-phone-number-input](https://www.npmjs.com/package/react-phone-number-input)
  * [Styled Components](https://styled-components.com/)
  * [Axios](https://axios-http.com/ptbr/docs/intro)
  * [SWR](https://swr.vercel.app/pt-BR)


## Rodando o projeto com o Docker (recomendado)
Caso tenha o Docker configurado em sua máquina, o `docker-compose` fará as orquestrações dos contêiners automaticamente.

### Clonando o projeto:
```
git clone git@github.com:marllomartin/medical-form.git
```
### Acessando a pasta do projeto:
```
cd medical-form
```
### Inicializando o Docker
```
docker-compose up --build
```

## Rodando o projeto localmente

### Clonando o projeto:
```
git clone git@github.com:marllomartin/medical-form.git
```
### Acessando a pasta do projeto:
```
cd medical-form
```

### Inicializando o Back-End:
#### Atenção!
O Back-End do projeto utiliza variáveis de ambiente. Renomeie o arquivo `.env.example` para `.env` e altere os valores de acordo com suas próprias configurações.

#### Mudando para a pasta de Back-End:
```
cd back-end
```
#### Instalando as dependências:
```
npm install
```
#### Rodando o Back-End:
```
npm start
```

### Inicializando o Front-End:
#### Mudando para a pasta de Front-End:
```
cd front-end
```
#### Instalando as dependências:
```
npm install
```
#### Rodando o Front-End:
```
npm start
```
