// Ejercicios clase 2

/*
Escribe qué valor debe ser X e Y para que las siguientes condiciones se cumplan (den true)
Cada ejercicio puede tenenr un valor de X e y distinto
Es posible que alguna condición no se pueda dar nunca. Indica por qué
*/
let result;
let x;
let y;

// Ejemplo, x= 3, y = 1
result = x > y;
console.log(result);

// x = 7 y = 1
result = x > y + 5;
console.log(result);

// y = 6
result = 'pepito'.length === y;
console.log(result);

// x = 'Pepito se fue a comprar fruta :)' y = 32
result = 'La venganza de los ornitorrincos salvajes'.length < y + 10 && x.length === y;
console.log(result);

// x = 5 y = 5
result = x >= y;
console.log(result);

// x = 'x'
result = x !== 'number';
console.log(result);

// y = 6 x = 'camión'
result = y && !x; 
console.log(result);

// x = 1 y = 1 -- x = 7 y = 2
result = y <= x || x > y;
console.log(result);

// x = 27 y = 51 
result = -1 + x === y - 25;
console.log(result);

// y = 'text'
result = typeof y === 'String';
console.log(result);

// x = 0.5 y = 0.3
result = x > 0 && x < 1 && y > 0 && y < x;
console.log(result); 
 

// x = 'j'
result = x !== '' && x.length < 2;
console.log(result);

// x = 6  
result = typeof x === 'number' && x > '5';
console.log(result);

// x = '5.00001' 
result = x.length > 5 && x.length < 6.0000000000001;
console.log(result);

// y = 'camión' x = 'carretera'
result = y.length && x.length && x.length !== y.length;
console.log(result);

// Es imposible porque un numero no puede tener length. Habria que hacer : number.toString().length
// el tamaño de una cadena de texto no puede ser decimales
result = x.length > 0 && x.length < 1;
console.log(result);

// x = true y = 'text'
result = typeof x === 'boolean' && typeof y === 'string';
console.log(result);

// x = 5 y = '5'
result = x !== y && x === 5 && y == 5;
console.log(result);

// x = 0 y = 1
result = !0 || (0 && !1) || (1 && 0);
console.log(result);

// x = '5'  y ='5'
result = y === x && y !== 'number' && x.length;
console.log(result);

// x = 2 y = -1
result = (!x && !y && x) || (y && x && x < 100 && y < 0);
console.log(result);

// 
result = y !== '' && typeof y === 'number';
console.log(result);

// Es imposible porque el .toLowerCase transforma todo el string en minisculas por lo tanto no va a incuir 'A'
result = y.toLowerCase().includes('A');
console.log(result);

// y = ''
result = y === '' && typeof y !== 'number';
console.log(result);

// No se puede ya que para dar true, y = 0,  pero aparece y !== 0
// y = ''
result = !y && y !== false && y !== 0;
console.log(result);

// x = 0
result = typeof 0 == 'number' && !0;
console.log(result);

// x = 0.5 y = 0.5
result = (x === y && x < 1 && y > 0) || (x === y && x > 1 && y < 0) || (x !== y && x === y + 1) || x == 5;
console.log(result);

// x = 40 y = 'Juan es de Cantabria'
result = x > 5 && y.length * 2 == x;
console.log(result);

result = 'Juan es de Cantabria'.length
console.log(result)  // Prueba para saber el .length




// ejercicios clase 3


const month = 12;
let monthName 

if (month === 1 ) {
    monthName = 'enero';
} else if (month === 2) {
    monthName = 'febrero';
} else if (month === 3) {
    monthName = 'marzo';
} else if (month ===4) {
    monthName = 'abril';
} else if (month === 5) {
    monthName = 'mayo';
} else if (month === 6) {
    monthName = 'junio';
} else if (month === 7) {
    monthName = 'julio';
} else if (month === 8) {
    monthName = 'agosto';
} else if (month === 9) {
    monthName = 'septiembre';
} else if (month === 10) {
    monthName = 'octubre';
} else if (month === 11) {
    monthName = 'noviembre';
} else if (month === 12) {
    monthName = 'diciembre';
} 
 console.log(monthName)





 function whatMonthName(month) {
    
let monthName;

if (month === 1 ) {
    monthName = 'enero';
} else if (month === 2) {
    monthName = 'febrero';
} else if (month === 3) {
    monthName = 'marzo';
} else if (month === 4) {
    monthName = 'abril';
} else if (month === 5) {
    monthName = 'mayo';
} else if (month === 6) {
    monthName = 'junio';
} else if (month === 7) {
    monthName = 'julio';
} else if (month === 8) {
    monthName = 'agosto';
} else if (month === 9) {
    monthName = 'septiembre';
} else if (month === 10) {
    monthName = 'octubre';
} else if (month === 11) {
    monthName = 'noviembre';
} else if (month === 12) {
    monthName = 'diciembre';
} 
 console.log(monthName);
 }

 whatMonthName(1)
 whatMonthName(2)
 whatMonthName(3)
 whatMonthName(4)
 whatMonthName(5)
 whatMonthName(6)
 whatMonthName(7)
 whatMonthName(8)
 whatMonthName(9)
 whatMonthName(10)
 whatMonthName(11)
 whatMonthName(12)
 
 
 //Ejercicios clase 3 en casa

 /*
  Crear una función que me diga si un número está entre 0 y 10  
   => utilizar un return;
*/
function between0And10(num) {
    if (num >= 0 & num <=10) {
        return true;
    } else {
        return false
    }
}
console.log(between0And10(7))

    /*
  Crea una función que me diga si un parámetro es de tipo cadena de texto o número.
*/
function textOrNum(param) {
    if (typeof param === 'string') {
        return 'string'
    } else if (typeof param === 'number') {
        return 'number';
    }   
}
console.log(textOrNum(9))

   




  
 












