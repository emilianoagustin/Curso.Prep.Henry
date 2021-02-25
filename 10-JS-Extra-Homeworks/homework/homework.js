// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const strToArr = Array.from(string)
  const count = strToArr.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1
    return acc
  },{})
  return count
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  const strArray = s.split('')
  let filterUppercase = strArray.filter((char, i) => {
    return char === char.toUpperCase()
  })
  let filterLowercase = strArray.filter((char, i) => {
    return char === char.toLowerCase()
  })
  return filterUppercase.join('') + filterLowercase.join('')
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const strArr = str.split(' ');
  let itemArr;
  let newArr = [];
  
  strArr.map((elem) => {
    itemArr = elem.split('').reverse().join('')
    newArr.push(itemArr)
    return newArr
  });
 
  return newArr.join(' ')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const numToStr = numero.toString()
  console.log(numToStr.length/2)
  for (let i = 0; i < numToStr.length/2; i++) {
    if(numToStr[i] !== numToStr[numToStr.length - 1 - i]){
      return 'No es capicua' 
    }
  }
  return 'Es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let toDelete = ['a', 'b', 'c']
  const strArray = Array.from(cadena)
  let strFiltered = strArray.filter((char) => {
    return !toDelete.includes(char)
  })
  return strFiltered.join('')
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let mapped = arr.map((el, i) => {
    return { index: i, value: el.toLowerCase() };
  })
  mapped.sort((a,b) => {
    if (a.value.length > b.value.length) return 1
    if (a.value.length < b.value.length) return -1
    return 0  
  })
  let result = mapped.map((el) =>{
    return arr[el.index];
  })
  return result
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let filtered = arreglo1.filter((num) => {
    return arreglo2.includes(num)
  })
  return filtered;  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

