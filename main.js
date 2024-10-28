function assignNumberButton(buttonId,number){
    const button=document.getElementById(buttonId)
    button.addEventListener('click',()=>{
        if (active==true){
            display.textContent=''
            active=false
        }
        display.textContent = display.textContent == 0 ? number 
        : display.textContent + number;
    })
}
function numberAssigner(){
    a=display.textContent

}


function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function div(a,b){
    return a/b
}
function operate(a,b,op){
    if (op=='+'){
        return add(a,b)

    }else if (op=='-'){
        return sub(a,b)
    }else if (op=='*'){
        return mul(a,b)
    }else{
        return div(a,b)
    }

}
let a
let b
let op
let active=false

let display=document.getElementById('text')
const operator={
    '+':document.getElementById('+'),
    '-':document.getElementById('-'),
    '*':document.getElementById('*'),
    '/':document.getElementById('/')
}
const equal=document.getElementById('=');

const backspace=document.getElementById('backspace')
if (!active){
    for (const i in operator){
        operator[i].addEventListener('click',()=>{
            Object.values(operator).forEach(btn => btn.style.backgroundColor = '#52c9dc');
            active=true
            a=parseInt(display.textContent)
            op=i
            operator[i].style.backgroundColor='red'
        });
    }
}
   

equal.addEventListener('click',()=>{
    b=parseInt(display.textContent)
    for (const i in operator){
        operator[i].style.backgroundColor='#52c9dc';
    }
    console.log(a,b)
    console.log(op)
    const result=operate(a,b,op)
    console.log(result)
    display.textContent=operate(a,b,op)
})

for (let i =0 ; i <10 ;i++){
    assignNumberButton(i.toString(),i)

}
