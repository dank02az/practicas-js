// Ejercicio 1::..

function raiz(a) {
    let res = Math.sqrt(a);
    return Math.round(res);
};

function imprimir_hola(){
    let res = "hola"
    return res
};

function factorial_N(n){
    let factorial = 1
    for (var i=1; i<=n; i++ ) {
        factorial*=i
    }
    return factorial
}

// Ejercicio 2::..

function imprimir_saludo (nombre) {
    let saludo = `Hola ${nombre}`
    return saludo
}

function imprimir_dos_veces(escribillo){
    return escribillo*2
}

function es_multiplo_de_k (n, k) {
    let res = n % k == 0
    return res
}

function es_par(n) {
    let res = es_multiplo_de_k(n,2)
    return res
}

function cantidad_de_pizzas(comensales, min_cant_de_porciones) {
    let porciones = comensales*min_cant_de_porciones 
    let cantidad = Math.round(porciones / 8)
    return cantidad
}

// Ejercicio 3::..

function demasiado_largo(nombre){
    let longitud = nombre.length
    let res = longitud >= 3 && longitud <= 8  
    return res
}

function es_bisiesto(anio) {
    let case1 = es_multiplo_de_k (anio, 4)
    let case2 = es_multiplo_de_k (anio, 100)
    let res = case1 == true && case2 == false
    return res
}


function alguno_es_0 (numero1,numero2){
    res = numero1 == 0 || numero2 == 0
    return res
}

function ambos_son_0 (numero1, numero2){
    res = numero2 == 0 && numero1 == 0
    return res
}

//Ejercicio 4::..


function peso_pino (altura_cm) { 
    let peso = 0
    if (altura_cm <= 300){
        peso = altura_cm / 3
    }
    else {
        altura_extra = 300 - altura_cm 
        peso = ( altura_cm - altura_extra ) / 3
        peso_extra = altura_extra / 2
        peso += peso_extra
    }
    return peso
}


function es_peso_util(peso_kg) {
      res = Math.min(peso_kg,400) == 400 && Math.max(peso_kg,1000) == 1000 
      return res
}

function sirve_pino (altura_cm) {
    res = Math.min(altura_cm,133) == 133 && Math.max(altura_cm,350)
    return res
}

function sirve_pino_alt (altura_cm){
    peso = peso_pino (altura_cm)
    res = es_peso_util (peso)
    return res
}

//Ejercicio 5::...


function devolver_el_doble_si_es_par(un_numero) {
    let res = un_numero
    if (es_par(un_numero)){
        res = 2*un_numero
    }
    return res 
}


function devolver_valor_si_es_par_sino_el_q_sigue(un_numero){
    let res = un_numero
    if (es_par(un_numero)==false) {
        res += 1
    }
    return res
}

function devolver_el_doble_si_es_multiplo3_el_triple_si_es_multiplo9(un_numero){
    let res = un_numero
    if (es_multiplo_de_k(un_numero,3)){
        res = 2*un_numero
    }
    if (es_multiplo_de_k(un_numero,9)){
        res = 3*un_numero
    }
    return res
}

function nombre_largo (nombre) {
    let res = 'Tu nombre tiene menos de 5 caracteres'
    if (nombre.length >= 5) {
        res = 'Tu nombre muchas letras'
    }
    return res
}


// Ejercicio 6 ::..

function imprime_1_10() {
    i=0
    while(i<=100){
        console.log(i)
        i++
    }
}


function imprime_1_10_for() {
    for(i=0;i<=100;i++){
        console.log(i)
    }
}

function pares_entre_10_40 () {
    i=10
    while(i<=40){
        if (es_par(i)) {
            console.log(i)
        }
        i++
    }
}

function pares_entre_10_40_for () {
    for (i=10,n=40; i<=n; i++){
        if(es_par(i)){
            console.log(i)
        }
    }
}

function eco(palabra) {
    let i=0,n=10
    while(i<=n){
        console.log(palabra)
        i++
    }
}

function eco_for(palabra) {
    for(i=0,n=10; i<=n; i++){
        console.log(palabra)
    }
}



function cuenta_regresiva(n) {
    i=n
    while(i>0){
        console.log(i)
        i-- 
    }
    console.log('despegue')    
}

function cuenta_regresiva_for (n) {
    for (i=n;i>0;i--){
        console.log(i)
    }
    console.log('despegue')
}


function viaje_en_el_tiempo(partida,llegada){
    let i=partida
    let n=llegada-1
    while(i!=n){
        console.log(`Viajo un año al pasado, estamos en el ${i}`)
        i--
    }
}


function monitoreo_de_viajes(partida) {
    let llegada = 384
    let i = partida
    while(i>llegada){
        let anioMasCercano = i
        console.log(`Viajó 20 años al pasado, estamos en el año ${anioMasCercano} a.C`)
        i-=20
    }
}



