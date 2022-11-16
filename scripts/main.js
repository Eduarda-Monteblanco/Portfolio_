
const app = document.querySelector("#app");
const appp = document.getElementById('app')
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  await delay(1000)
  
  createText(`<pre>
              ███████╗██████╗ ██╗   ██╗ █████╗ ██████╗ ██████╗  █████╗
              ██╔════╝██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗
              █████╗  ██║  ██║██║   ██║███████║██████╔╝██║  ██║███████║
              ██╔══╝  ██║  ██║██║   ██║██╔══██║██╔══██╗██║  ██║██╔══██║
              ███████╗██████╔╝╚██████╔╝██║  ██║██║  ██║██████╔╝██║  ██║
              ╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝
                              Monteblanco Portfolio
              </pre>`)

  createText("Bem vindo!");
  await delay(700);
  createText("Inicializando o servidor...");
  await delay(1500);
  createText("Você pode digitar alguns comandos para navegar no meu Portfolio:");
 
  createCode("Sobre mim!", "Saiba mais sobre quem eu sou e o que eu faço.");
  createCode("Ajuda", "Veja todos os comandos que você pode executar");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/eduarda-monteblanco";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "ajuda" || value === "Ajuda"){
    trueValue(value);
    
    createCode("projetos", "Meus projetos já desenvolvidos");
    createCode("sobre mim", "Saiba mais sobre quem eu sou e o que eu faço.");
    createCode("limpar", "Limpar o terminal");
    
  }
  else if(value === "projetos" || value === "Projetos"){
    trueValue(value);
    createText(`<pre>
    +-----------------------+
    |    Jogo da Memória    |
    +-----------------------+
    |                       |
    |  Jogo da memória de-  |
    |  senvolvido em puro   |
    |JavaScript, CSS e HTML.|
    |                       |
    +-----------------------+
    |    Veja o projeto     |
    |     funcionando:      |
    |                       |
    |   <a href="https://github.com/Eduarda-Monteblanco" target="_blank"><i class='fab fa-github'></i>  Clique aqui!!</a>   |
    +-----------------------+
    </pre>`)
  }
  else if(value === "sobre mim" || value === "Sobre mim"){
    trueValue(value);
    createText("Olá, meu nome é Eduarda ;)")
    createText("Atualmente sou estudante de Bacharelado em Sistemas de Informação (1/8) e Tecnólogo em Análise e Desenvolvimento de Sistemas (2/4).<br>Trabalho no momento como Técnico em Informática e estou a procura da minha primeira oportunidade no mundo de desenvolvimento.<br><br>Se você tem interesse em me contratar pode encontrar em contato pelo email Eduardamonteblanco@gmail.com")
  }
  
  else if(value === "limpar" || value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`Comando não encontrado: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}



