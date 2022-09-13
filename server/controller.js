const { default: axios } = require("axios");


module.exports = {

    getCountry: (req, res) => {
        const countries = ["Brazil", "Colombia", "Mexico"];
      
        // choose countries
        let randomIndex = Math.floor(Math.random() * countries.length);
        let randomCountries = countries[randomIndex];
      
        res.status(200).send(randomCompliment);
    },


    getName: (req, res) => {
        const names = [""];    

        let randomIndex = Math.floor(Math.random() * names.length);
        let randomName = names[randomIndex];

        res.status(200).send(randomName);

    },


    
    getAge: (req, res) => {
        const age = ["20-30", "30-40", "40-50", "50-60", "Over 60"];    

        let randomIndex = Math.floor(Math.random() * age.length);
        let randomAge = age[randomIndex];

        res.status(200).send(randomName);

    },

} 

getBudget: (req, res) => {
    const budget = ["500 - 1000", "1000 - 2000", "2000 - 3000", "3000 - 4000"];    

    let randomIndex = Math.floor(Math.random() * budget.length);
    let randomBudget = budget[randomIndex];

    res.status(200).send(randomBudget);

}





