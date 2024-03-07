const botoes = document.querySelectorAll(".botaonuvem");
const textos = document.querySelectorAll(".aba-conteudo")

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativa");
            textos[j].classList.remove("ativa");
        }
        botoes[i].classList.add("ativa");
        textos[i].classList.add("ativa");
    }
}

const contadores = document.querySelectorAll(".contador"); 
const tempoObjetivo1 = new Date("2024-10-23T00:00:00"); 
const tempoObjetivo2 = new Date("2024-06-25T00:00:00"); 
const tempoObjetivo3 = new Date("2024-04-30T00:00:00"); 
const tempoObjetivo4 = new Date("2024-12-31T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];



function tclc(tempoObjetivo){
    let tempoAtual = new Date(); 
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);
    
    segundos %=60;
    minutos %=60;
    horas %=24

    if (tempoFinal>0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
} 

function update(){
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias"+i).textContent = tclc(tempos[i])[0];
        document.getElementById("horas"+i).textContent = tclc(tempos[i])[1];
        document.getElementById("min"+i).textContent = tclc(tempos[i])[2];
        document.getElementById("seg"+i).textContent = tclc(tempos[i])[3];
    }
}

function start(){
    update();
    setInterval(update,1000);
}

start();