function pertence(e,array) {
    res = false
    for(let elem of array){
        if(elem == e){
            res =true
        }
    }
    return res
}



function pertence_alt(array,e){
    res = false
    for (i=0,n=array.length; i<=n; i++){
        if (array[i]==e){
            res=true
        }
    }
    return res
}


function divideAtodos (array, e) {
    let res = true
    for(let elem of array) {
        if (elem % e !=0){
            res = false
        }
    }
    return res
}

function sumaTotal (array){
    let res = 0
    for(let elem of array){
        res += elem
    }
    return res
}

function ordenados (array){
    let res = true
    for(i=0,n=array.length;i<=n-1;i++){
        if (array[i] > array[i+1]){
            res = false
        } 
    }
    return res
}

function len_palabra_es_mayor_7(array){
    //array de palabras
    res = false
    for(let elem of array){
        if (elem.length > 7){
            res = true
        }
    }
    return res
}

function palindroma (palabra) {
    let res = true
    let longitud = palabra.length
    let n = Math.floor(longitud/2)
    for(i=0; i<=n; i++){
       res = res && palabra[i] == palabra[longitud-i-1] 
    }
    return res
}

// EJERCICIO 7::..

function password_check (pass){

    let longitud = pass.length
    let digitos = '0123456789'
    let res = null

    for(elem of pass) {
        if(pertence(elem.toLowerCase(), pass)){
            tieneMinus = true
        }
        if(pertence(elem.toUpperCase(), pass )){
            tieneMayus = true
        }
        if(pertence(elem, digitos)) {
            tieneDigitos = true
        }
    }

    if (longitud > 8 && tieneMinus && tieneMayus){
        res = "VERDE"
    } else if ( longitud < 5){
        res = "ROJO"
    } else {
        res = "AMARILLO"
    }
    return res

}





