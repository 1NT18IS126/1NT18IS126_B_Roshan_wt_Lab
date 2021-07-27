var Fro = document.getElementById("from")
var To = document.getElementById("to")
var Sig = document.getElementById("signal")
var today = new Date()
var time =today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

var arr = []
const sub = () => {
	blank()
	var data = {
		From: from.value,
		To: to.value,
		Sig: signal.value,
	}
	console.log(data)
	arr.push(data)
}

const blank = () => {
	document.getElementById("out").innerHTML = ""
}

const display = () => {
	var output = ""
	let num = Math.floor(Math.random() * 3) + 1
  let num1 = Math.floor(Math.random() * 4) + 1
	arr.forEach((ele) => {
		red = ele.Sig - num1;
		green = ele.Sig - red
		if (num == 1) {
			output = `<h3>No of signals between ${Fro.value} and ${To.value} is ${ele.Sig}\nRed:${red} Green:${green} Light Traffic (${time})<h3> `
		} else if (num == 2) {
			output = `<h3>No of signals between ${Fro.value} and ${To.value} is ${ele.Sig}\nRed:${red} Green:${green} Normal Traffic (${time})<h3> `
		} else if (num == 3) {
			output = `<h3>No of signals between ${Fro.value} and ${To.value} is ${ele.Sig}\nRed:${red} Green:${green} Heavy Traffic (${time})<h3> `
		}
	})
	document.getElementById("out").innerHTML = output
}