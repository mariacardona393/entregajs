
// Función sumArray: Suma de todos los elementos de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - La suma de todos los elementos del array
const sumArray = (array) => {
    return array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  };
  
  const numbers1 = [1, 2, 3, 4, 5];
  const sum = sumArray(numbers1);
  console.log(sum); // Output: 15
  
  // Función filterEvenNumbers: Filtrar números pares de un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con solo los números pares del array original
  const filterEvenNumbers = () => {
    
  };
  
  // Función findMaxNumber: Encontrar el mayor número en un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Number - El mayor número en el array
  const findMaxNumber = (array) => {
    return Math.max(...array);
  };
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const maxNumber = findMaxNumber(numbers);
  console.log(maxNumber); // Output: 6
  
  // Función toUpperCaseStrings: Convertir un array de strings a mayúsculas
  // Parámetros: array (Array) - Un array de strings
  // Devuelve: Array - Un nuevo array con todas las strings convertidas a mayúsculas

  const toUpperCaseStrings = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].toUpperCase());
    }
    return result;
  };
  
  const strings = ['hello', 'teacher', 'i am maria fernanda '];
  const upperCaseStrings = toUpperCaseStrings(strings);
  console.log(upperCaseStrings); // Output: ['HELLO', 'TEACHER', ' I AM MARIA FERNANDA']

  
  // Función calculateAverage: Calcular el promedio de un array de números
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Number - El promedio de los números en el array
  const calculateAverage = (array) => {
    const sum = array.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    const average = sum / array.length;
    return average;
  };
  
  const numbers3 = [1, 2, 3, 4, 5];
  const average = calculateAverage(numbers3);
  console.log(average); // Output: 3
  
  // Función sortNumbersAscending: Ordenar un array de números de forma ascendente
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con los números ordenados de forma ascendente
  const sortNumbersAscending = (array) => {
    return array.slice().sort((a, b) => a - b);
  };
  
  const numbers4 = [9, 3, 12, 11, 400, 28, 5,2,0];
  const sortedNumbers = sortNumbersAscending(numbers4);
  console.log(sortedNumbers); // Output: [2, 3, 5, 9, 11, 12, 28, 30, 400]
  
  // Función findFirstElement: Encontrar el primer elemento que cumple una condición en un array
  // Parámetros: 
  // - array (Array) - Un array de elementos
  // - condition (Function) - Una función de condición que devuelve true o false
  // Devuelve: Any - El primer elemento que cumple con la condición, o undefined si ninguno lo hace
  const findFirstElement = (array, condition) => {
    for (let i = 0; i < array.length; i++) {
      if (condition(array[i])) {
        return array[i];
      }
    }
    return undefined;
  };
  
  const numbers5 = [1, 2, 3, 4, 5];
  const isOdd = (num) => num % 2 !== 0;
  const firstOddNumber = findFirstElement(numbers5, isOdd);
  console.log(firstOddNumber); // 1
  
  // Función countElements: Contar la cantidad de elementos en un array
  // Parámetros: array (Array) - Un array de elementos
  // Devuelve: Number - La cantidad de elementos en el array
  const countElements = (array) => {
    return array.length;
  };
  
  const myArray = [1, 2, 3, 4, 5];
  const numberOfElements = countElements(myArray);
  
  console.log(`The array has ${numberOfElements} elements.`);
  
  // Función concatenateArrays: Concatenar dos arrays
  // Parámetros: 
  // - array1 (Array) - El primer array a concatenar
  // - array2 (Array) - El segundo array a concatenar
  // Devuelve: Array - Un nuevo array que es la concatenación de los dos arrays proporcionados
  const concatenateArrays = (array1, array2) => {
    if (Array.isArray(array1) && Array.isArray(array2)) {
      return [...array1, ...array2];
    } else {
      throw new Error('Both parameters must be arrays');
    }
  };
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const mergedArray = concatenateArrays(array1, array2);
  console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
  
  // Función squareNumbers: Calcular el cuadrado de cada número en un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con los cuadrados de los números en el array original
  const squareNumbers = (array) => {
    return array.map((number) => number ** 2);
  };
  
  const numbers6 = [1, 2, 3, 4, 5];
  const squaredNumbers = squareNumbers(numbers6);
  console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


  // Función flecha para agregar habilidades a un jugador de un juego
  const agregarHabilidad = (jugador, nuevaHabilidad) => {
    if (!jugador.habilidades) {
      jugador.habilidades = [];
    }
    if (!jugador.habilidades.includes(nuevaHabilidad)) {
      jugador.habilidades.push(nuevaHabilidad);
    }
    return jugador;
  };
  
  // Example usage:
  const jugador = {
    nombre: 'John Doe',
    nivel: 50,
    monedas: 10000,
  };
  
  const nuevaHabilidad = 'Super ataque';
  const jugadorModificado = agregarHabilidad(jugador, nuevaHabilidad);
  console.log(jugadorModificado);
  /* Output:
  {
    nombre: 'John Doe',
    nivel: 50,
    monedas: 10000,
    habilidades: ['Super ataque']
  }
  */

// Función para calcular la duración total de reproducción de todas las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'duracion'.
// Retorna:
// - Un número que representa la duración total de todas las películas en minutos.
const calcularDuracionTotal = (peliculas) => {
  return peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
};

const peliculas = [
  { titulo: 'Movie 1', duracion: 90 },
  { titulo: 'Movie 2', duracion: 120 },
  { titulo: 'Movie 3', duracion: 105 },
];
const duracionTotal = calcularDuracionTotal(peliculas);
console.log(duracionTotal); // Output: 315


// Función para buscar películas por título y género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'genero'.
// - titulo: String que representa el título a buscar.
// - genero: String que representa el género a buscar.
// Retorna:
// - Un array de objetos que representan películas que coinciden con el título y el género especificados.
const buscarPeliculas = (peliculas, titulo, genero) => {
    return peliculas.filter(
      (pelicula) => pelicula.titulo.toLowerCase().includes(titulo.toLowerCase()) && pelicula.genero.toLowerCase() === genero.toLowerCase()
    );
  };
  
  // Example usage:
  const peliculas1 = [
    { titulo: 'Movie 1', genero: 'Action' },
    { titulo: 'Movie 2', genero: 'Comedy' },
    { titulo: 'Movie 3', genero: 'Action' },
    { titulo: 'Movie 4', genero: 'Drama' },
  ];
  const resultado = buscarPeliculas(peliculas1, 'movie', 'action');
  console.log(resultado); // Output: [ { titulo: 'Movie 1', genero: 'Action' }, { titulo: 'Movie 3', genero: 'Action' } ]

// Función para calcular el promedio de puntajes de las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'puntaje'.
// Retorna:
// - Un número que representa el promedio de puntajes de todas las películas.
const calcularPromedioPuntajes = (peliculas2) => {
    const puntajes = peliculas.map((pelicula) => pelicula.puntaje);
    const sumaPuntajes = puntajes.reduce((acumulador, puntaje) => acumulador + puntaje, 0);
    const promedio = sumaPuntajes / peliculas.length;
    return promedio;
  };
  
  // Example usage:
  const peliculas2 = [
    { titulo: 'Movie 1', puntaje: 8 },
    { titulo: 'Movie 2', puntaje: 9 },
    { titulo: 'Movie 3', puntaje: 7 },
    { titulo: 'Movie 4', puntaje: 6 },
  ];
  const promedioPuntajes = calcularPromedioPuntajes(peliculas2);
  console.log(promedioPuntajes); // Output: 7.5
// Función para filtrar películas por año de lanzamiento.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'año'.
// - año: Número que representa el año de lanzamiento a filtrar.
// Retorna:
// - Un array de objetos que representan películas lanzadas en el año especificado.
const filtrarPorAño = (peliculas, año) => {
    // Filtrar las películas por año de lanzamiento.
    
};

// Función para calcular el promedio de duración de las películas por género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'duracion' y 'genero'.
// - genero: String que representa el género de las películas a considerar.
// Retorna:
// - Un número que representa el promedio de duración de las películas del género especificado.
const calcularPromedioDuracionPorGenero = (peliculas, genero) => {
    // Filtrar las películas por género.
    
};


// Clase base que representa un vehículo
class Vehiculo {
    /**
     * Constructor de la clase Vehiculo.
     * @param {string} marca - La marca del vehículo.
     * @param {string} modelo - El modelo del vehículo.
     * @param {number} año - El año de fabricación del vehículo.
     */
   

    /**
     * Método para obtener la información del vehículo.
     * @returns {string} - La información del vehículo en formato de cadena de texto.
     */
    obtenerInformacion() {
        
    }
}


// Clase que representa un automóvil
class Automovil extends Vehiculo {
    /**
     * Constructor de la clase Automovil.
     * @param {string} marca - La marca del automóvil.
     * @param {string} modelo - El modelo del automóvil.
     * @param {number} año - El año de fabricación del automóvil.
     * @param {string} color - El color del automóvil.
     * @param {number} cilindrada - La cilindrada del motor del automóvil.
     * @param {number} potencia - La potencia del motor del automóvil.
     * @param {number} numPuertas - El número de puertas del automóvil.
     * @param {number} numAsientos - El número de asientos del automóvil.
     * @param {string} tipoTransmision - El tipo de transmisión del automóvil.
     */
    

    /**
     * Método para obtener la información del automóvil.
     * @returns {string} - La información del automóvil en formato de cadena de texto.
     */
    obtenerInformacion() {
        
    }
}

// Clase que representa una motocicleta
class Motocicleta extends Vehiculo {
    /**
     * Constructor de la clase Motocicleta.
     * @param {string} marca - La marca de la motocicleta.
     * @param {string} modelo - El modelo de la motocicleta.
     * @param {number} año - El año de fabricación de la motocicleta.
     * @param {string} color - El color de la motocicleta.
     * @param {number} cilindrada - La cilindrada del motor de la motocicleta.
     * @param {number} potencia - La potencia del motor de la motocicleta.
     * @param {number} numRuedas - El número de ruedas de la motocicleta.
     * @param {string} tipo - El tipo de motocicleta (deportiva, touring, etc.).
     */
    

    /**
     * Método para obtener la información de la motocicleta.
     * @returns {string} - La información de la motocicleta en formato de cadena de texto.
     */
    obtenerInformacion() {
       
    }
}

// Clase que representa un camión
class Camion extends Vehiculo {
    /**
     * Constructor de la clase Camion.
     * @param {string} marca - La marca del camión.
     * @param {string} modelo - El modelo del camión.
     * @param {number} año - El año de fabricación del camión.
     * @param {string} color - El color del camión.
     * @param {number} cilindrada - La cilindrada del motor del camión.
     * @param {number} potencia - La potencia del motor del camión.
     * @param {number} numEjes - El número de ejes del camión.
     * @param {number} capacidadCarga - La capacidad de carga del camión en toneladas.
     * @param {string} tipoCarroceria - El tipo de carrocería del camión (remolque, furgón, etc.).
     */
    

    /**
     * Método para obtener la información del camión.
     * @returns {string} - La información del camión en formato de cadena de texto.
     */
    obtenerInformacion() {
        
    }
}

// Clase que representa un autobús
class Autobus extends Vehiculo {
    /**
     * Constructor de la clase Autobus.
     * @param {string} marca - La marca del autobús.
     * @param {string} modelo - El modelo del autobús.
     * @param {number} año - El año de fabricación del autobús.
     * @param {string} color - El color del autobús.
     * @param {number} cilindrada - La cilindrada del motor del autobús.
     * @param {number} potencia - La potencia del motor del autobús.
     * @param {number} capacidadPasajeros - La capacidad de pasajeros del autobús.
     * @param {string} tipoCombustible - El tipo de combustible del autobús.
     * @param {string} tipoMotor - El tipo de motor del autobús (diésel, gasolina, eléctrico, etc.).
     */
   

    /**
     * Método para obtener la información del autobús.
     * @returns {string} - La información del autobús en formato de cadena de texto.
     */
    obtenerInformacion() {
        
    }
}

// Clase que representa una bicicleta
class Bicicleta extends Vehiculo {
    /**
     * Constructor de la clase Bicicleta.
     * @param {string} marca - La marca de la bicicleta.
     * @param {string} modelo - El modelo de la bicicleta.
     * @param {number} año - El año de fabricación de la bicicleta.
     * @param {string} tipo - El tipo de bicicleta (montaña, carretera, urbana, etc.).
     * @param {number} numMarchas - El número de marchas de la bicicleta.
     * @param {string} material - El material del que está hecha la bicicleta (aluminio, acero, carbono, etc.).
     * @param {string} suspencion - El tipo de suspensión de la bicicleta (delantera, trasera, doble, rígida, etc.).
     * @param {string} frenos - El tipo de frenos de la bicicleta (disco, v-brake, caliper, etc.).
     * @param {string} tipoManubrio - El tipo de manubrio de la bicicleta (recto, curvo, doble altura, etc.).
     */
  

    /**
     * Método para obtener la información de la bicicleta.
     * @returns {string} - La información de la bicicleta en formato de cadena de texto.
     */
    obtenerInformacion() {
        
    }
}

/**
 * Por favor no borrar el código que hasta de aqui en adelante.
 */

// Exportar las funciones para su uso en otros archivos.
 
  module.exports = { 
    sumArray, 
    filterEvenNumbers, 
    findMaxNumber, 
    toUpperCaseStrings, 
    calculateAverage, 
    sortNumbersAscending, 
    findFirstElement, 
    countElements, 
    concatenateArrays, 
    squareNumbers,
    agregarHabilidad,
    calcularDuracionTotal,
    buscarPeliculas,
    calcularPromedioPuntajes,
    filtrarPorAño,
    calcularPromedioDuracionPorGenero,
    Vehiculo, Automovil, Motocicleta, Camion, Autobus, Bicicleta
  };
  