# Maratona | Seu Projeto no Ar - Backend 🚀

![image](https://media2.giphy.com/media/D567hs4Dex0GEnAKOY/giphy.gif)

<aside>
⚠️ Este repositório é um template feito para ensinar fundamentos de desenvolvimento web para pessoas iniciantes.
</aside>

<br>

## `Como usar este template:`

- Com o link do template aberto no navegador, clique na setinha ao lado do botão verde "USE THIS TEMPLATE" e escolha a opção "Create a new repository";

- Após isso vá para o repositório criado no seu perfil do github, clique na setinha ao lado do botão verde "CODE" e copie o código;

- Agora vá até o terminal no seu computador e use o código: git clone 'link copiado'

- Com seu repositório baixado na sua máquina, execute o comando `npm install` na pasta dentro projeto clonado para instalar todas as dependências.

- Agora rode o projeto com o comando `npm start`

## `Apresentação`

✓ [Slides](https://www.canva.com/design/DAF91GMXJqk/7JD35oioymzZsDEICh_0MA/edit?utm_content=DAF91GMXJqk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## NodeJs - Guia Rápido

### O que é NodeJS?

Node.js é um ambiente de execução JavaScript do lado do servidor, construído sobre o motor V8 da Google Chrome. Ele permite que você execute código JavaScript no servidor, não apenas no navegador. Essa capacidade de usar JavaScript tanto no lado do cliente quanto no lado do servidor é uma das características distintivas do Node.js.

Em termos mais técnicos, o Node.js permite que o servidor atenda a várias solicitações simultaneamente, sem bloqueio. Isso é possível devido à sua natureza assíncrona e ao uso eficiente de eventos.

**Pra facilitar o entendimento:**
Podemos dizer que o Node.js é como um garçom eficiente em um restaurante movimentado, que consegue atender a várias mesas ao mesmo tempo, sem esperar que uma mesa termine antes de atender a próxima. Ele mantém as coisas fluindo de maneira suave e eficiente.

#### Quem Usa NodeJS?

É utilizado por uma ampla gama de empresas e organizações, desde startups até grandes corporações, em diversas indústrias. Alguns exemplos de empresas que utilizam Node.js incluem: Netflix, Figma, Uber e muitas outras. Eu mesma uso no meu dia a dia de trabalho.

#### Hello World / Olá Mundo

Vamos começar com o básico, o "Hello World" no NodeJS.

**Pra facilitar o entendimento:**

Seria como ligar a luz na sua casa pela primeira vez, apenas para ter certeza de que tudo está funcionando corretamente.

Este é um exemplo básico de configuração de um servidor backend com Node.js usando o framework Express. À medida que você avança no desenvolvimento, pode adicionar mais rotas, integrar um banco de dados, implementar autenticação, entre outras funcionalidades.

```js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3333;
app.use(cors());

app.use(express.json());

app.get("/ola", function (request, response) {
  response.json({ message: "Começou o backend" });
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
```

#### O que é Express

Express é um framework web para Node.js, projetado para simplificar o desenvolvimento de aplicativos web e APIs. Ele fornece uma camada fina de recursos essenciais para construir servidores web robustos e eficientes, sem impor muita complexidade.

#### Rodando Código com Nodemon

Nodemon é uma ferramenta de desenvolvimento que reinicia automaticamente o servidor quando há alterações nos arquivos.

```bash
// após clonar o projeto, instale as dependências:

npm install

// após pode rodar o projeto e abrir o localhost no navegador:

npm start
```

#### O que é Localhost

Em termos simples, quando você acessa "localhost" em um navegador da web, está se referindo ao seu próprio computador.

Em termos técnicos, quando você acessa "localhost" no seu navegador ou em algum aplicativo, está pedindo ao seu próprio dispositivo para fornecer os dados ou serviços, sem sair do seu computador.

#### Como funcionam os arquivos dentro do NodeJS

**server.js:** Aqui temos a configuração do servidor

**controller.js:** Aqui temos a lógica com as regras

**routes.js:** Aqui temos todos as rotas que a API permite

**package.json:** Aqui temos as dependências e scripts

#### O que é CRUD

CRUD é um acrônimo que representa as quatro operações básicas em sistemas de gerenciamento de banco de dados ou em qualquer aplicação que envolva manipulação de dados. As operações são:

- Create (Criar): Adicionar novos dados.

- Read (Ler): Recuperar dados existentes.

- Update (Atualizar): Modificar dados existentes.

- Delete (Excluir): Remover dados existentes.

Essas operações são fundamentais para a interação com bancos de dados e são amplamente utilizadas no desenvolvimento de software.

#### O que são métodos HTTP?

Os métodos HTTP (Hypertext Transfer Protocol) são verbos que indicam a ação a ser realizada em um recurso identificado. Alguns dos métodos HTTP comuns incluem:

- GET: Solicita a representação de um recurso.
- POST: Envia dados para serem processados para um recurso.
- PUT: Atualiza a representação de um recurso ou cria um recurso se ele não existir.
- DELETE: Remove um recurso.
- PATCH: Atualiza parcialmente um recurso.

Esses métodos fornecem uma maneira padronizada de interagir com recursos em uma aplicação web.

#### Explicando os parametros `request` e `response`` em funções de rota NodeJS

Ao criar rotas em uma aplicação Node.js usando frameworks como o Express, é comum usar funções de callback para lidar com requisições HTTP. Essas funções normalmente têm dois parâmetros: request e response.

- **request:** Representa a requisição feita pelo cliente. Contém informações sobre a requisição, como cabeçalhos, parâmetros de consulta, corpo da requisição, etc. É usado para extrair dados enviados pelo cliente.

- **response:** Representa a resposta que será enviada de volta ao cliente. Permite configurar a resposta, definindo cabeçalhos, status HTTP, e enviando dados de volta para o cliente.

Esses parâmetros são essenciais para processar as solicitações do cliente e enviar respostas apropriadas.

No contexto de CRUD, por exemplo, o método HTTP pode indicar a operação (GET, POST, PUT, DELETE), e os parâmetros request e response são usados para manipular e fornecer dados associados a essas operações.

```js
app.get("/ola", function (request, response) {
  response.json({ message: "Começou o backend" });
});
```

O que é banco de dados?
Um banco de dados é um sistema organizado para coletar, armazenar e gerenciar dados de forma eficiente, permitindo o acesso e a manipulação desses dados de maneira rápida e segura.

Para entender melhor

Eu tô fazendo marmitinhas para a semana. Mas o que isso tem a ver com nosso conteúdo de hoje? Assim como uma rotina alimentar organizada facilita a vida diária, um banco de dados bem estruturado e gerenciado é fundamental para o desenvolvimento de aplicativos eficientes e confiáveis. Ele ajuda a garantir que as informações sejam armazenadas de maneira organizada, acessível e segura.

Quais os tipos de banco de dados?
Existem diferentes tipos de bancos de dados, sendo os bancos de dados relacionais os mais comuns. Nesses sistemas, os dados são organizados em tabelas, e as relações entre as tabelas são estabelecidas para garantir a integridade e a consistência dos dados.

Além dos bancos de dados relacionais, existem outros tipos, como bancos de dados NoSQL, que são mais flexíveis e podem lidar com diferentes tipos de dados, e bancos de dados de grafos, projetados para armazenar e consultar dados relacionados a redes complexas de informações.

Qual a diferença entre SQL e NoSQL?
Característica Bancos de Dados NoSQL Bancos de Dados SQL
Modelo de Dados Não-relacional, variável Relacional, tabular
Esquema Dinâmico, sem estrutura fixa Estático, com esquema definido
Flexibilidade Flexível quanto a esquema e tipos Rigidez no esquema e tipos
Escalabilidade Escalabilidade horizontal Escalabilidade vertical
Transações ACID Nem sempre garante ACID Geralmente ACID
Consulta Pode exigir abordagens diferentes SQL padrão para consultas
Relacionamentos Menos enfatizado, uso de referências Relacionamentos são fundamentais
Desenvolvimento Ágil Adequado para desenvolvimento ágil Pode ser mais restritivo
Uso Comum Big Data, aplicações ágeis, não estruturadas Aplicações tradicionais, estruturadas
Exemplos MongoDB, CouchDB, Cassandra MySQL, PostgreSQL, Oracle
O que é MongoDB?
O MongoDB é um sistema de gerenciamento de banco de dados NoSQL (Not Only SQL), orientado a documentos e de código aberto. Ele difere dos bancos de dados relacionais tradicionais ao adotar uma abordagem de armazenamento de dados baseada em documentos no formato BSON (Binary JSON). O BSON é uma representação binária do JSON (JavaScript Object Notation), que é um formato de dados leve e legível por humanos.

O MongoDB é amplamente utilizado em ambientes de desenvolvimento ágil e projetos que requerem escalabilidade e flexibilidade de esquema. Ele é popular para aplicações que manipulam grandes volumes de dados não estruturados ou semi-estruturados.

O que é Mongoose?
Mongoose é uma biblioteca Node.js que proporciona uma camada de modelagem de dados sobre o MongoDB, um banco de dados NoSQL orientado a documentos. Ele é usado para simplificar a interação com o MongoDB, fornecendo uma estrutura de modelagem de dados, validação de esquema, mapeamento objeto-documento (ODM) e outras funcionalidades úteis.

Tutorial Mongo
1\_ Criar a organização

2\_ Criar projeto

2\_ Criar banco de dados

3\_ Incluir cluster e outras infos

4\_ Senha e Usuário

5\_ Autorizar IP

5\_ Pegar string de conexão (connect)

O que é .env ?
O termo "dotenv" (ou "DotEnv") refere-se a uma prática comum na programação de usar um arquivo chamado .env para armazenar variáveis de ambiente. Essas variáveis geralmente incluem configurações sensíveis, como chaves de API, senhas de banco de dados, e outras informações que não devem ser compartilhadas publicamente ou incluídas diretamente no código-fonte.

A biblioteca dotenv é frequentemente usada em várias linguagens de programação para carregar essas variáveis de ambiente do arquivo .env durante a fase de inicialização do aplicativo. Dessa forma, as configurações sensíveis não estão expostas diretamente no código e podem ser facilmente gerenciadas em diferentes ambientes (desenvolvimento, teste, produção) sem a necessidade de alterar o código-fonte.

Por exemplo, em Node.js, você pode usar a biblioteca dotenv para carregar as variáveis de ambiente do arquivo .env

# Jaqueline de Almeieda

✓ Software development | Comunicóloga

### Vamos nos conectar!

- [linkedin](https://www.linkedin.com/in/jaqueline-de-almeida/)
- [github](https://github.com/jaquelinedealmeida)

<br>
Feito com 💜 por Jaqueline de Almeida
