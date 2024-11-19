// Ejercicios clase 2

/*
Escribe qué valor debe ser X e Y para que las siguientes condiciones se cumplan (den true)
Cada ejercicio puede tenenr un valor de X e y distinto
Es posible que alguna condición no se pueda dar nunca. Indica por qué
*/
let result;
let x;
let;

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

// Es imposible porque se junta un número con .length. Habria que hacer: number.toString().length 
result = x.length > 5 && x.length < 6.0000000000001;
console.log(result);

// y = 'camión' x = 'carretera'
result = y.length && x.length && x.length !== y.length;
console.log(result);

// Es imposible porque un numero no puede tener length. Habria que hacer : number.toString().length
result = x.length > 0 && x.length < 1;
console.log(result);

// x = true y = 'text'
result = typeof x === 'boolean' && typeof y === 'string';
console.log(result);

// x = 5 y = '5'
result = x !== y && x === 5 && y == 5;
console.log(result);

// x = 0 y = 1
result = !x || (x && !y) || (y && x);
console.log(result);

// Es imposible porque no se puede usar un número con un .length
result = y === x && y !== 'number' && x.length;
console.log(result);

// x = 2 y = -1
result = (!x && !y && x) || (y && x && x < 100 && y < 0);
console.log(result);

// Es imposible porquue ambas se contardicen
result = y !== '' && typeof y === 'number';
console.log(result);

// Es imposible porque el .toLowerCase transforma todo el string en minisculas por lo tanto no va a incuir 'A'
result = y.toLowerCase().includes('A');
console.log(result);

// y = ''
result = y === '' && typeof y !== 'number';
console.log(result);

// No se puede ya que para dar true, y = 0,  pero aparece y !== 0
result = !y && y !== false && y !== 0;
console.log(result);

// x = 0
result = typeof x == 'number' && !x;
console.log(result);

// x = 0.5 y = 0.5
result = (x === y && x < 1 && y > 0) || (x === y && x > 1 && y < 0) || (x !== y && x === y + 1) || x == 5;
console.log(result);

// x = 40 y = 'Juan es de Cantabria'
result = x > 5 && y.length * 2 == x;
console.log(result);

result = 'Juan es de Cantabria'.length
console.log(result)  // Prueba para saber el .length
