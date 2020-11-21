const fs = require('fs');



// const user = document.querySelector('#user')
// const password = document.querySelector('#password')
// const enterBtn = document.querySelector('#enterBtn')



// enterBtn.addEventListener('click', () =>{

// 	// create a JSON object
// 	const loginData = {
// 		"nome":user,
// 		"senha":password
// 	}
// 	// convert JSON object to string
// 	const data = JSON.stringify(loginData)

// 	// write JSON string to a file
// 	fs.writeFile('/data/logLoginAdm.json', data, (err) => {
// 		if(err) {
// 			throw err
// 		}
// 	})
// 	console.log("JSON data is saved.");
// })




	// create a JSON object
	const loginData = {
		"nome":'user',
		"senha":'password'
	}
	// convert JSON object to string
	const data = JSON.stringify(loginData)

	// write JSON string to a file
	fs.writeFile('./data/logLoginAdm.json', data, (err) => {
		if(err) {
			throw err
		}
	})
	console.log("JSON data is saved.");
