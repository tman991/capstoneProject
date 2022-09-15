let form = document.querySelector("form")

function sendData (event) {
event.preventDefault()
const nameInput = document.getElementById("name")
const destinationInput = document.getElementById('destination')
const budgetInput = document.getElementById('budget')
const thingsInput = document.getElementById('thingsToDo') 

let body = { 

nameValue: nameInput.value,
destinationValue: destinationInput.value,
budgetValue: budgetInput.value,
thingsValue: thingsInput.value

    }

    axios.post('http://localhost:4005/createData', body)
    .then((res) => { 
        console.log(res.data)
        for (let i = 0; i < res.data.length; i++){

        const displayResultSection = document.getElementById('displayResult')
        const infoCard = document.createElement('div')
        infoCard.innerHTML = `
        <h2> Name: ${res.data[i].nameValue} </h2>
        <h2> Destination: ${res.data[i].destinationValue} </h2>
        <h2> Budget: ${res.data[i].budgetValue} </h2>
        <h2> Things: ${res.data[i].thingsValue} </h2>
        `
        displayResultSection.appendChild(infoCard)
         
        }

        
    })
    .catch((error) => {
        console.log(error)
    })
}

form.addEventListener('submit', sendData)
