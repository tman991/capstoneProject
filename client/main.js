const { ParameterDescriptionMessage } = require("pg-protocol/dist/messages")

const countryButton = document.getElementById("countryButton")
const nameInput = document.getElementById('name')
const ageInput = document.getElementById('age')
const budgetInput = document.getElementById('budgetInput')



const getCountry = () => {
    axios.get("http://localhost:4000/api/country/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getName = () => {
    axios.get("http://localhost:4000/api/name/")
    .then(res => {
        const data = res.data;
        alert(data);
    });  
};

const getAge = (event) => {
    event.preventDefault()
    peopleSection.innerHTML = ''

    const body = () => {
        name: nameInput.value
        power: powerInput.value
    }
    axios.get("http://localhost:4000/api/age/", body)  
        .then((response) => {
            const data = response.data; 
            showPeopleOnDom(data)

        })
        
        nameInput.value = ''
        ageInput.value = ''
        budgetInput.value = ''
    }

const getBudget = (event) => {
    event.preventDefault()
    peopleSection.innerHTML = ''
    
    const name = deleteInput.value

    axios.get("http://localhost:4000/api/budget/")
    .then((response) => {
        const data = response.data; 
        showPeopleOnDom(data)


    })
}


countryButton.addEventListener('click', getCountry)
nameInput.addEventListener('submit', getName)
ageInput.addEventListener('submit', getAge)
budgetInput.addEventListener('submit', getBudget)
