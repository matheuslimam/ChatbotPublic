# Chatbot Leopoldo

**O chatbot que vai te ajudar a aprender!**

Este repositório contém um projeto de chatbot desenvolvido como parte do projeto individual da disciplina de Sistemas Computacionais ministrada pelo Professor Doutor Leopoldo Lusquino Filho na Unesp no Instituto de Ciência e Tecnologia de Sorocaba. O chatbot utiliza a API da OpenAI para gerar respostas com base nas perguntas dos usuários.

## Como funciona

O chatbot é implementado em JavaScript, HTML e CSS, utiliza a API da OpenAI para gerar respostas. O código está dividido em três partes principais: A pagina de login, a pagina de carregamento e a pagina principal.

### Página de Carregamento

* 🕑 Exibe uma mensagem de boas-vindas e redireciona o usuário para a página principal após um curto período de tempo.
* 👤 Exibe o nome do usuário se ele já estiver cadastrado.

### Página Principal do Chatbot

* 💬 Permite que os usuários interajam com o chatbot.
* 📨 Caixa de entrada de mensagem para enviar perguntas.
* 📯 Botão para enviar perguntas.
* 🧹 Botão para limpar o histórico de conversas.

### Pagina de login

* 🔒 Utiliza o botão de login do Google para autenticação dos usuários.
* 👤 Extrai dados do token de autenticação, incluindo nome, ID, e-mail e verificação de e-mail.
* 🔐 Se o login for bem-sucedido e o e-mail for verificado, o usuário é redirecionado para a página de carregamento.
* 🛡️ Se o usuário for um administrador, ele é redirecionado para a página de administração.

## Como utilizar

1. Abra a página principal do chatbot acessando `index.html` ou apenas acesse o link: [lima'sChatBot](https://matheuslimam.github.io/ChatbotLeopoldo/), além disso, coloque a sua API-Key da OpenAI

2. Faça login utilizando sua conta google

3. Digite uma pergunta na caixa de entrada de mensagem.

4. Pressione "Enter" ou clique no botão de envio para enviar a pergunta.

5. O chatbot irá gerar uma resposta com base na pergunta.

6. As mensagens do usuário e as respostas do chatbot são exibidas no histórico.

7. Você pode limpar o histórico de conversas clicando no botão "Limpar Histórico".

## Observações

* ⚠️ O chatbot utiliza a API da OpenAI para gerar respostas. É importante não abusar do uso, pois o proprietário do projeto está pagando pelo acesso à API.
* 🧰 O código do projeto foi desenvolvido em JavaScript e HTML e pode ser personalizado de acordo com as necessidades do usuário.
* 🖥️ O projeto inclui uma página de carregamento que exibe uma mensagem de boas-vindas e redireciona o usuário para a página principal do chatbot.
* 🍪 O histórico de conversas é armazenado em cookies para que os usuários possam ver conversas passadas.
* 📚 O projeto é destinado a fins educacionais e pode ser adaptado para diversos cenários de chatbots.

## Exemplos de uso

Aqui estão alguns exemplos de como usar o chatbot:

**Pergunta sobre um tópico técnico:**
```
 ❓ Pergunta: O que é um algoritmo?
 💡 Resposta: Um algoritmo é uma sequência de instruções que descrevem como resolver um problema.
```
**Pergunta sobre um tópico geral:**
```
 ❓ Pergunta: Qual é a capital do Brasil?
 💡 Resposta: A capital do Brasil é Brasília.
```
**Pergunta pessoal:**
```
 ❓ Pergunta: Como você está hoje?
 💡 Resposta: Estou bem, obrigado!
```
## Contribuições

* 🤝 Contribuições são bem-vindas! Se você encontrar algum bug ou tiver alguma sugestão, por favor, abra uma issue no repositório.

## Licença

O Lima's ChatBot é licenciado sob a licença MIT.

## Autor

Nome: **Matheus Lima Maturano Martins de Catro**

Instituição: **Unesp - ICTS**


Disciplina: **Sistemas Computacionais**
