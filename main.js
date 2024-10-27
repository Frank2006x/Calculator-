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
let operator
