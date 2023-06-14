const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

canvas.width = 600
canvas.height = 300

function init(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.font = '25px arial black'
    ctx.fillText("Aperte 'Start' para começar um jogo.",50,150)
}