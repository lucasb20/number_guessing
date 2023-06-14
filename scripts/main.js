const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

canvas.width = 600
canvas.height = 300

const start_color = '#D3D3D3'
const hot_color = '#FF7F7F'
const cold_color = '#ADD8E6'
const very_hot_color = '#FFA500'
const very_cold_color = '#87CEEB'
const nums = []
let choose_num = 0
const but_choose = document.querySelector('#but_choose')
const but_start = document.querySelector('#but_start')

const pos_x = 250,pos_y=150 

let startTime, elapsedTime, timer

let count_choose = 0

function init(){
    ctx.font = '25px arial black'
    ctx.fillText("Aperte 'Start' para começar um jogo.",50,150)
}

but_start.addEventListener('click',start)
but_choose.addEventListener('click',choose)

function start(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillText("Digite um número.",180,150)
    nums.length = 0
    for(let i=1;i<=1000;i++){
        nums.push(i)
    }

    if(choose_num != 0)alert(`A resposta anterior era ${choose_num}.`)

    choose_num = Math.floor(Math.random()*nums.length)+1
    canvas.style.background = start_color

    startTime = Date.now();
    elapsedTime = 0;
    timer = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    console.log(`Tempo decorrido: ${elapsedTime / 1000} segundos`);
}, 1000);
}

function choose(){
    let num = document.querySelector('#num').value
    if(num<1 || num > 1000){
        return alert('Fora da faixa.')
    }

    ctx.clearRect(0,0,canvas.width,canvas.height)

    count_choose++

    if(num == choose_num){
        ctx.fillText("Parabéns, você acertou.",pos_x-120,pos_y-20)
        clearInterval(timer);
        ctx.fillText(`Tempo gasto: ${elapsedTime / 1000}s.`,pos_x-120,pos_y+5)
        ctx.fillText(`Quantidade de tentativas: ${count_choose}.`,pos_x-120,pos_y+30)
        canvas.style.background = start_color
        count_choose = 0
        return 0
    }

    if(Math.abs(num-choose_num)>200){
        ctx.fillText("Muito frio.",pos_x-20,pos_y)
        canvas.style.background = very_cold_color
    }
    else if(Math.abs(num-choose_num)>50){
        ctx.fillText("Frio.",pos_x,pos_y)
        canvas.style.background = cold_color
    }
    else if(Math.abs(num-choose_num)>25){
        ctx.fillText("Quente.",pos_x,pos_y)
        canvas.style.background = hot_color
    }
    else{
        ctx.fillText("Muito quente.",pos_x-20,pos_y)
        canvas.style.background = very_hot_color
    }

    return 0
}