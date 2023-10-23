console.log("hola mundo");

console.log("cambie los colores de cada div");

/******************************************/

// variables
const calculadora = document.getElementById('calculadora') //llamo al elemento por id
const resultado = document.getElementById('resultado')

// eventos
calculadora.addEventListener('click', añadirNumeros)

// Operaciones
let operaciones = [] //array vacio de las operaciones

// añadirNumeros
function añadirNumeros(e){
	if(e.target.getAttribute('type') === 'button'){
		if(e.target.className != 'operacion'){
			resultado.value += e.target.innerText
		} else if(e.target.id === 'sumar'){
			operaciones.push(resultado.value);
			operaciones.push('+');
			calculadora.reset();
		}else if(e.target.id === 'igual'){
			operaciones.push(resultado.value);
			calculadora.reset();
			const resultadoOperacion = eval(operaciones.join(''));
			resultado.value = resultadoOperacion;
			operaciones = [];
		} else if(e.target.id === 'restar'){
			operaciones.push(resultado.value);
			operaciones.push('-');
			calculadora.reset();
		} else if(e.target.id === 'multiplicar'){
			operaciones.push(resultado.value);
			operaciones.push('*');
			calculadora.reset();
		} else if(e.target.id === 'dividir'){
			operaciones.push(resultado.value);
			operaciones.push('/');
			calculadora.reset();
		} else if(e.target.id === 'limpiador'){
			operaciones = [];
			calculadora.reset();
		}
        console.log(resultado.value);
	}
}