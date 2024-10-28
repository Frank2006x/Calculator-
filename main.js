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
function operate(a,b,operate){
    if (operate=='+'){
        add(a,b)

    }else if (operate=='-'){
        sub(a,b)
    }else if (operate=='*'){
        mul(a,b)
    }else{
        div(a,b)
    }

}
let a
let b
let active=false

let display=document.getElementById('text')
const operator={
    '+':document.getElementById('+'),
    '-':document.getElementById('-'),
    '*':document.getElementById('*'),
    '/':document.getElementById('/')
}
const equal=document.getElementById('=');
const buttons=document.querySelectorAll('button')
if (!active){
    for (const i in operator){
        operator[i].addEventListener('click',()=>{
            Object.values(operator).forEach(btn => btn.style.backgroundColor = '#52c9dc');
            active=true
            a=display.textContent
            operator[i].style.backgroundColor='red'
        });
    }
}
   

equal.addEventListener('click',()=>{
    b=display.textContent
    for (const i in operator){
        operator[i].style.backgroundColor='#52c9dc';
    }
    console.log(a,b)
})

for (let i =0 ; i <10 ;i++){
    assignNumberButton(i.toString(),i)

}
