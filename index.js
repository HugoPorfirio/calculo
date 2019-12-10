const readlineSync = require('readline-sync')

var expected_origin = [11, 16, 17, 18]
var expected_destiny = [11, 16, 17, 18]

// var origin = readlineSync.question('Entre com a Origem: ');
origin = readlineSync.keyInSelect(expected_origin, 'Qual a origem?');
// index = readlineSync.keyInSelect(expected_origin, 'Qual a origem?');
var destiny = readlineSync.keyInSelect(expected_destiny, 'Qual o destino?');
var time = readlineSync.question('Entre com o tempo ');
origin = expected_origin[origin]
destiny = expected_destiny[destiny]

// origin = parseInt(origin)
// destiny = parseInt(destiny)
time = parseInt(time)



var results_choices = {
  'origin': origin,
  'destiny': destiny,
  'time': time
}
var plano30 = null
var plano60 = null
var plano120 = null
plano = null


// if( time <= 30 ){
//   var plano30 = 0
//   console.log(`ligacao gratuita plano 30 R$: 0,00`);
// }else{
//   plano = 30
// }
// if( time <= 60 ){
//   var plano = 0
//   console.log(`ligacao gratuita plano 60 R$: 0,00`);
// }else{
//   plano60 = 60
// }
// if( time <= 120 ){
//   var plano120 = 0
//   console.log(`ligacao gratuita plano 120 R$: 0,00`);
// }else{
//   plano = 120
// }

if( origin == 11 &&  destiny == 16 ){
  var minuto = 1.90

if( time <= 30 ){
  plano30 = 'R$ 0,00' 
  console.log(`ligacao gratuita plano 30 R$: 0,00`);
}else{
  plano30 = 30
  calcPlano = parseFloat((time - plano30))
  calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )

  plano30 = calculo
  // console.log("calculo: ",calculo);
}
if( time <= 60 ){
  console.log(`ligacao gratuita plano 60 R$: 0,00`);
  plano60 = 'R$ 0,00' 
}else{
  plano60 = 60
  calcPlano = parseFloat((time - plano60))
  calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
  plano60 = calculo
  // console.log("calculo: ",calculo);
}
if( time <= 120 ){
  console.log(`ligacao gratuita plano 120 R$: 0,00`);
  plano120 = 'R$ 0,00' 
}else{
  plano120 = 120
  calcPlano = parseFloat((time - plano120))
  calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
  plano120 = calculo 
  // console.log("calculo: ",calculo);
}

  
  
}
if( origin == 16 &&  destiny == 11 ){
  var minuto = 2.90
  if( time <= 30 ){
    plano30 = 'R$ 0,00' 
    console.log(`ligacao gratuita plano 30 R$: 0,00`);
  }else{
    plano30 = 30
    calcPlano = parseFloat((time - plano30))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
  
    plano30 = calculo
    // console.log("calculo: ",calculo);
  }
  if( time <= 60 ){
    console.log(`ligacao gratuita plano 60 R$: 0,00`);
    plano60 = 'R$ 0,00' 
  }else{
    plano60 = 60
    calcPlano = parseFloat((time - plano60))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
    plano60 = calculo
    // console.log("calculo: ",calculo);
  }
  if( time <= 120 ){
    console.log(`ligacao gratuita plano 120 R$: 0,00`);
    plano120 = 'R$ 0,00' 
  }else{
    plano120 = 120
    calcPlano = parseFloat((time - plano120))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
    plano120 = calculo
    // console.log("calculo: ",calculo);
  }
  
}
if( origin == 11 &&  destiny == 17 ){
  var minuto = 1.70
  if( time <= 30 ){
    plano30 = 'R$ 0,00' 
    console.log(`ligacao gratuita plano 30 R$: 0,00`);
  }else{
    plano30 = 30
    calcPlano = parseFloat((time - plano30))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
  
    plano30 = calculo
    // console.log("calculo: ",calculo);
  }
  if( time <= 60 ){
    console.log(`ligacao gratuita plano 60 R$: 0,00`);
    plano60 = 'R$ 0,00' 
  }else{
    plano60 = 60
    calcPlano = parseFloat((time - plano60))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
    plano60 = calculo
    // console.log("calculo: ",calculo);
  }
  if( time <= 120 ){
    console.log(`ligacao gratuita plano 120 R$: 0,00`);
    plano120 = 'R$ 0,00' 
  }else{
    plano120 = 120
    calcPlano = parseFloat((time - plano120))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
    plano120 = calculo 
    // console.log("calculo: ",calculo);
  }
  
}
if( origin == 17 &&  destiny == 11 ){
  var minuto = 2.70
  if( time <= 30 ){
    plano30 = 'R$ 0,00' 
    console.log(`ligacao gratuita plano 30 R$: 0,00`);
  }else{
    plano30 = 30
    calcPlano = parseFloat((time - plano30))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
  
    plano30 = calculo
    // console.log("calculo: ",calculo);
  }
  if( time <= 60 ){
    console.log(`ligacao gratuita plano 60 R$: 0,00`);
    plano60 = 'R$ 0,00' 
  }else{
    plano60 = 60
    calcPlano = parseFloat((time - plano60))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
    plano60 = calculo
    // console.log("calculo: ",calculo);
  }
  if( time <= 120 ){
    console.log(`ligacao gratuita plano 120 R$: 0,00`);
    plano120 = 'R$ 0,00' 
  }else{
    plano120 = 120
    calcPlano = parseFloat((time - plano120))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
    plano120 = calculo
    // console.log("calculo: ",calculo);
  }
  
}if( origin == 11 &&  destiny == 18 ){
  var minuto = 0.90
  if( time <= 30 ){
    plano30 = 'R$ 0,00' 
    console.log(`ligacao gratuita plano 30 R$: 0,00`);
  }else{
    plano30 = 30
    calcPlano = parseFloat((time - plano30))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
  
    plano30 = calculo
    // console.log("calculo: ",calculo);
  }
  if( time <= 60 ){
    console.log(`ligacao gratuita plano 60 R$: 0,00`);
    plano60 = 'R$ 0,00' 
  }else{
    plano60 = 60
    calcPlano = parseFloat((time - plano60))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
    plano60 = calculo
    // console.log("calculo: ",calculo);
  }
  if( time <= 120 ){
    console.log(`ligacao gratuita plano 120 R$: 0,00`);
    plano120 = 'R$ 0,00' 
  }else{
    plano120 = 120
    calcPlano = parseFloat((time - plano120))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
    plano120 = calculo 
    // console.log("calculo: ",calculo);
  }
  
}
if( origin == 18 &&  destiny == 11 ){
  var minuto = 1.90
  if( time <= 30 ){
    plano30 = 'R$ 0,00' 
    console.log(`ligacao gratuita plano 30 R$: 0,00`);
  }else{
    plano30 = 30
    calcPlano = parseFloat((time - plano30))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
  
    plano30 = calculo
    // console.log("calculo: ",calculo);
  }
  if( time <= 60 ){
    console.log(`ligacao gratuita plano 60 R$: 0,00`);
    plano60 = 'R$ 0,00' 
  }else{
    plano60 = 60
    calcPlano = parseFloat((time - plano60))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
    plano60 = calculo
    // console.log("calculo: ",calculo);
  }
  if( time <= 120 ){
    console.log(`ligacao gratuita plano 120 R$: 0,00`);
    plano120 = 'R$ 0,00' 
  }else{
    plano120 = 120
    calcPlano = parseFloat((time - plano120))
    calculo = parseFloat(  ( (minuto * 0.1) + minuto )  * calcPlano )
    plano120 = calculo
    // console.log("calculo: ",calculo);
  }
  
}

// console.table(results_choices)
console.table({
  "plano30": plano30,
  "plano60": plano60,
  "plano120": plano120
})
