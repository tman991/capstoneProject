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

        const displayResultSection = document.getElementById('displayResult')
        const infoCard = document.createElement('div')
        infoCard.classList.add('info')
        infoCard.innerHTML = `
        <h2> Name: ${res.data.nameValue} </h2>
        <h2> Destination: ${res.data.destinationValue} </h2>
        <h2> Budget: ${res.data.budgetValue} </h2>
        <h2> Things: ${res.data.thingsValue} </h2>
        `
        displayResultSection.appendChild(infoCard)

        
    })
    .catch((error) => {
        console.log(error)
    })
}

form.addEventListener('submit', sendData)


const factBtn = document.getElementById("funFactButton")

const getFact = () => {
    axios.get('http://localhost:4005/getFact')
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

factBtn.addEventListener('click', getFact)
