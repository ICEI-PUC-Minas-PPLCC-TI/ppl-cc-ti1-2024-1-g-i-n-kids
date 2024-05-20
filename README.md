# I&N Kids
Este projeto tem como propósito fornecer aos pais recursos e orientações práticas para reduzir o tempo que as crianças passam em frente às telas de dispositivos eletrônicos, como celulares e tablets. A plataforma visa capacitar os pais com uma variedade de dicas e atividades envolventes que incentivam o envolvimento ativo e offline das crianças. Ao oferecer alternativas divertidas e educativas, o intuito é promover um equilíbrio saudável entre o uso da tecnologia e outras formas de interação, contribuindo assim para o desenvolvimento físico, mental e social das crianças.

## Alunos integrantes da equipe
* Artur Bomtempo Colen
* Daniella Emily Cornelio da Silva
* Davi Gonçalves Ayres Lanna
* Julia Rodrigues Cronenberger
* Leticia Paulinelli Costa Marini
* ⁠Lucas Alves Berão
* Pedro Henrique Félix Dos Santos

## Professores responsáveis
* Gustavo Henrique Borges Martins
* Wesley Dias Maciel

## Instruções de utilização
### 1. Acessar e rodar a API JSON Server para testar o projeto
* Crie uma conta e faça login no [Repl.it](https://replit.com/~)
* Acesse [este link](https://replit.com/@ArturColen/IandNKidsServer) para ver o JSON Server do projeto e clique no botão `Fork`
* Após fazer isso, o JSON Server da I&N KIDS será copiado para o espaço com seus projetos do Repl.it e aparecerá uma tela com o código
* Clique em `Run` e aguarde até que o servidor esteja em execução (aparecerá uma mensagem no console, escrit "JSON Server is running")
<img width="1440" alt="Screenshot 2024-05-19 at 21 12 43" src="https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m-20241-3-i-n-kids/assets/96635074/285bfb6c-f1fb-4ad5-988d-f475cbd22310">

### 2. Alterar as URLS de conexão presentes no projeto
* Depois que a API estiver em execução (passo 1), você terá acesso à quatro rotas, nas quais estará a base de dados (JSON) do projeto. Para acessar cada uma dessas rotas, você pode clicar nas reticências que aparecerão no canto superior da tela em execução. Lá terá o link de acesso da API, copie-o e insira cada uma das rotas ao final da URL para acessar cada uma das bases de dados.
<img width="1440" alt="Screenshot 2024-05-19 at 21 15 39" src="https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m-20241-3-i-n-kids/assets/96635074/6006a1ba-6082-4518-b420-dc0eeee8db47">

Após copiar o link e adicionar as rotas, deverá ficar assim:
```bash
link_da_api/usuarios
link_da_api/postagens
link_da_api/tarefas
link_da_api/contatos
```
* Por final, basta abrir a pasta do código do projeto, ir em cada um dos quatro arquivos de conexão e alterar a `apiUrl` para a URL referente à parte do código. Ficará assim:
```bash
assets/js/usuario/conexao/conexao-usuarios.js
const apiUrl = 'link_da_api/usuarios';

assets/js/postagens/conexao/conexao-postagens.js
const apiUrl = 'link_da_api/postagens';

assets/js/rotina/conexao/conexao-tarefas.js
const apiUrl = 'link_da_api/tarefas';

assets/js/contato/conexao-contato.js
const apiUrl = 'link_da_api/contats';
```

### 3. Testar o projeto
Após realoizar os passos anteriores, já é possível testar o projeto. Verifique se a API está em execução no Repl.it, abra a página HTML que deseja executar e faça os testes necessários.