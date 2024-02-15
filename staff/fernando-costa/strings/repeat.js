delete String.prototype.repeat

function repeat(string, count) {
    
    // crear una variable auxiliar 'result' para almacenar el string con sus repeticiones
    // inicializar la variable anterior con string vacío
    var result = ''
    // inicializar un bucle for con una variable auxiliar (ejem. 'i')
    // poner condición de continuidad en el for limitada a 'count' veces
    // incrementamos la variable auxiliar 'i' una vez cada iteración
    // asignar a la variable auxiliar 'result' su valor anterior más el valor del string (todo dentro del cuerpo del for)
    for (var i = 0; i < count; i++){
        result = result + string
    }
    // retornar el valor de la variable 'result'
    return result
    
}

// CASE 1

var s = 'happy! '

var result = repeat(s, 3)

console.log(result)
// 'happy! happy! happy!'