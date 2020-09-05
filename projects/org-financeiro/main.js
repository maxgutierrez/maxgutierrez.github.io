const renda = document.querySelector('#renda');
const result = document.querySelectorAll("#content > div > p")
const calcBtn = document.querySelector("#calcular")


const list = [
	{ name:"Gasto Mensal", percent:0.5, value:0 },
	{ name:"Educação", percent:0.1, value:0 },
	{ name:"Lazer", percent:0.1, value:0 },

	{ name:"Liberdade financeira", percent:0.1, value:0 },
	{ name:"Objetivos cm", percent:0.1, value:0 },
	{ name:"Reserva/Oportunidades", percent:0.1, value:0 },
]

const calcular = (event)=>{
	event.preventDefault();
	
	list.forEach(element => {
		element.value = renda.value * element.percent
		
		result[list.indexOf(element)].innerHTML = `R$ ${element.value},00`
	});
	debugger
}
calcBtn.addEventListener('click', calcular)