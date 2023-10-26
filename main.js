import config from './config.js';
const apiKey = config.apiKey;
console.log(apiKey);

const userId = localStorage.getItem('user_id');
document.getElementById('btn-clear-history').addEventListener('click', async () => {
    clearHistory(userId);
  });

document.getElementById('btn-submit').addEventListener('click', async () => {
    await sendMessage();
  });

  const messageInput = document.getElementById('message-input');

messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada é a tecla "Enter"
        event.preventDefault(); // Impede a quebra de linha padrão
        sendMessage(); // Chama a função sendMessage() ao pressionar "Enter"
    }
});


// Função que envia mensagens do usuário para a API da OpenAI
async function sendMessage() {
    //pegando os elementos necessários do meu html
    const message = document.getElementById('message-input');
    const status = document.getElementById('status');
    const btnSubmit = document.getElementById('btn-submit');
    const historyBox = document.getElementById('history');

    // Recuperar o ID do usuário do Local Storage
    const userId = localStorage.getItem('user_id');
    

    if (!message.value) {
        message.style.border = '1px solid red'; // Destacar a entrada vazia em vermelho
        return;
    }

    message.style.border = 'none'; // Remover o destaque vermelho
    status.style.display = 'block'; // Exibir o status de carregamento
    status.innerHTML = 'Carregando...'; // Exibir "Carregando..."
    btnSubmit.disabled = true; // Desabilitar o botão de envio
    btnSubmit.style.cursor = 'not-allowed'; // Alterar o cursor para 'not-allowed'
    message.disabled = true; // Desabilitar a entrada de mensagem

    if(userId == 104042383727619940911){
        try {
            const modelo = localStorage.getItem('model');
            const temperaturaStr = localStorage.getItem('temp');
            const temperatura = parseFloat(temperaturaStr);
            console.log(modelo);
            console.log(temperaturaStr);
            console.log(temperatura);
            
            // Enviar uma solicitação para a API da OpenAI
            const response = await fetch("https://api.openai.com/v1/completions", {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`, // Enviar a chave de autenticação
                },
                body: JSON.stringify({
                    model: modelo, // Modelo de linguagem
                    prompt: message.value, // Mensagem do usuário como prompt
                    max_tokens: 150, // Tamanho máximo da resposta
                    temperature: temperatura // Criatividade na resposta
                })
            });
    
            // Extrair a resposta da API
            const data = await response.json();
            const modelResponse = data.choices[0].text;
            status.style.display = 'none'; // Ocultar o status de carregamento
    
            // Salvar as mensagens em cookies com base no usuário
            saveMessageToCookies(userId, 'user', message.value);
            saveMessageToCookies(userId, 'model', modelResponse);
    
            // Exibir a mensagem do usuário e a resposta no histórico
            showHistory(historyBox, userId);
            message.value = ''; // Limpar a entrada de mensagem
    
        } catch (error) {
            console.error(`Error -> ${error}`);
            status.innerHTML = 'Erro, tente novamente mais tarde...'; // Exibir mensagem de erro
        } finally {
            btnSubmit.disabled = false; // Restaurar o botão de envio
            btnSubmit.style.cursor = 'pointer'; // Restaurar o cursor padrão
            message.disabled = false; // Habilitar a entrada de mensagem
        }
    }
    else{
        try {
            // Enviar uma solicitação para a API da OpenAI
            const response = await fetch("https://api.openai.com/v1/completions", {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`, // Enviar a chave de autenticação
                },
                body: JSON.stringify({
                    model: "text-davinci-003", // Modelo de linguagem
                    prompt: message.value, // Mensagem do usuário como prompt
                    max_tokens: 150, // Tamanho máximo da resposta
                    temperature: 0.5 // Criatividade na resposta
                })
            });
    
            // Extrair a resposta da API
            const data = await response.json();
            const modelResponse = data.choices[0].text;
            status.style.display = 'none'; // Ocultar o status de carregamento
    
            // Salvar as mensagens em cookies com base no usuário
            saveMessageToCookies(userId, 'user', message.value);
            saveMessageToCookies(userId, 'model', modelResponse);
    
            // Exibir a mensagem do usuário e a resposta no histórico
            showHistory(historyBox, userId);
            message.value = ''; // Limpar a entrada de mensagem
    
        } catch (error) {
            console.error(`Error -> ${error}`);
            status.innerHTML = 'Erro, tente novamente mais tarde...'; // Exibir mensagem de erro
        } finally {
            btnSubmit.disabled = false; // Restaurar o botão de envio
            btnSubmit.style.cursor = 'pointer'; // Restaurar o cursor padrão
            message.disabled = false; // Habilitar a entrada de mensagem
        }
    }

}

// Função para exibir mensagens no histórico do chat
function showHistory(historyBox, user) {
    const messages = getMessagesFromCookies(user);
    // Limpar o histórico
    historyBox.innerHTML = '';
    // Exibir todas as mensagens salvas em cookies
    for (const message of messages) {
        const box = createMessageElement(message.sender, message.content);
        historyBox.appendChild(box);
    }
    // Rolagem automática para mostrar a mensagem mais recente
    historyBox.scrollTop = historyBox.scrollHeight;
}

// Função para salvar mensagens em cookies com base no usuário
function saveMessageToCookies(user, sender, content) {
    const messages = getMessagesFromCookies(user);
    messages.push({ sender, content });
    document.cookie = `${user}ChatHistory=${JSON.stringify(messages)}`;
}

// Função para obter mensagens salvas em cookies com base no usuário
function getMessagesFromCookies(user) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        if (cookie.trim().startsWith(`${user}ChatHistory=`)) {
            const chatHistory = cookie.trim().substring(`${user}ChatHistory=`.length);
            return JSON.parse(chatHistory);
        }
    }
    return [];
}

// Função auxiliar para criar elementos de mensagem
function createMessageElement(sender, content) {
    const box = document.createElement('div');
    box.className = sender === 'user' ? 'box-my-message' : 'box-response-message';
    const message = document.createElement('p');
    message.className = sender === 'user' ? 'my-message' : 'response-message';
    message.innerHTML = content;
    box.appendChild(message);
    return box; // Retornar o elemento criado
}

// Carregar mensagens ao carregar a página (certifique-se de chamar isso com o identificador de usuário)
document.addEventListener('DOMContentLoaded', () => {
    const historyBox = document.getElementById('history');
    const userId = localStorage.getItem('user_id'); // Recupere o ID do usuário do Local Storage
    showHistory(historyBox, userId);
});


function clearHistory(user) {
    document.cookie = `${user}ChatHistory=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    const historyBox = document.getElementById('history');
    historyBox.innerHTML = '';
    console.log("apagou");
}

