var canvas=document.getElementById("myCanvas")
var draw=canvas.getContext("2d")
var mouseevent=""
var width=screen.width
var height=screen.height
var newidth=screen.width-5
var newheight=screen.height-5
var lastouchx=0
var currentouchx=0
var lastouchy=0
var currentouchy=0

if (width<992) {
    document.getElementById("myCanvas").width=newidth
    document.getElementById("myCanvas").height=newheight
    document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart",start)
function start(e)
{
    color=document.getElementById("color").value 
    thick=document.getElementById("thicknesswidth").value
    lastouchx=e.touches[0].clientX-canvas.offsetLeft
    lastouchy=e.touches[0].clientY-canvas.offsetTop

}
canvas.addEventListener("touchmove",move)
function move(e)
{
    currentouchx=e.touches[0].clientX-canvas.offsetLeft
    currentouchy=e.touches[0].clientY-canvas.offsetTop
    draw.beginPath()
        draw.strokeStyle=color
        draw.lineWidth=thick
        draw.moveTo(lastouchx,lastouchy)
        draw.lineTo(currentouchx, currentouchy)
        draw.stroke()
    lastouchx=currentouchx
    lastouchy=currentouchy
}


canvas.addEventListener("mousedown",down)
function down(e)
{
    color=document.getElementById("color").value 
    thick=document.getElementById("thicknesswidth").value
    mouseevent="mousedown"
    console.log(mouseevent)
}

canvas.addEventListener("mouseleave",gone)
function gone(e)
{
    mouseevent="mouseleave"
    console.log(mouseevent)
}

canvas.addEventListener("mouseup",upper)
function upper(e)
{
    mouseevent="mouseup"
    console.log(mouseevent)
}

canvas.addEventListener("mousemove",poof)
function poof(e)
{
    currentx=e.clientX-canvas.offsetLeft
    currenty=e.clientY-canvas.offsetTop
    if (mouseevent=="mousedown") {
        draw.beginPath()
        draw.strokeStyle=color
        draw.lineWidth=thick
        draw.moveTo(lastx,lasty)
        draw.lineTo(currentx, currenty)
        draw.stroke()
    }
    lastx=currentx
    lasty=currenty
}

function clearcanvas()
{
    draw.clearRect(0,0,canvas.width,canvas.height)
}
