/* Habilitar Animação */
const itens = document.querySelectorAll("[data-anime]");

const animeScroll = () => { 
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    itens.forEach((element) => {
        if(windowTop > element.offsetTop){
            element.classList.add("animate");
        }else {
            element.classList.remove("animate");
        }
    })
}
animeScroll();

window.addEventListener("scroll", () =>{
    animeScroll();
});
/* Validação do form(html) */

const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const labelNome = document.querySelector("#labelNome");
const labelEmail = document.querySelector("#labelEmail");
const buttonEnviar = document.querySelector("#buttonEnviar")
let entradaNome = false;
let entradaEmail = false;


inputNome.addEventListener("keyup", ()=> {
    if (inputNome.value.length < 3){
        labelNome.innerText = "Nome - (Digite um nome válido)"
        labelNome.style.color = "red"
        entradaNome = false;
    }else{
        labelNome.innerText = "Nome"
        labelNome.style.color = "rgb(44, 150, 221)"
        entradaNome = true;
    }
    validaButton();
})

inputEmail.addEventListener("keyup", () =>{
    if(inputEmail.value.length == 0){
        labelEmail.innerText = "E-mail - Digite um e-mail válido"
        labelEmail.style.color = "red"
        entradaEmail = false;
    }else{
        labelEmail.innerText = "E-mail "
        labelEmail.style.color = "rgb(44, 150, 221)"
        entradaEmail = true;
    }
    validaButton();
})

const validaButton = () => {
    if(entradaNome == false || entradaEmail == false){
        buttonEnviar.setAttribute("disable", "disable");
        buttonEnviar.classList.add("buttonDisable");
        
    }else{
        buttonEnviar.removeAttribute("disable", "disable");
        buttonEnviar.classList.remove("buttonDisable");
    }
}
validaButton();

buttonEnviar.addEventListener("click", () =>{
    alert("Formulário enviado com sucesso!")
} )
