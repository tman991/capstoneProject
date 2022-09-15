const travelData = require("./db.json")
let globalId = 1

module.exports = {

    getFact: (req, res) => {
        const facts = ["The Vatican City is the smallest city in the world!", "New York is the biggest city in the world!", "Tokyo is the most populated city in the world!", "La Rinconada, Peru has the highest elevation in the world at 16,732'"];
       // const {getFact} = req.randomFact
        // random fun facts
        let randomIndex = Math.floor(Math.random() * facts.length);
        let randomFact = facts[randomIndex];
        res.status(200).send(randomFact);
        
    },

    createData: (req, res) => {
        console.log(req.body)
        const { nameValue, destinationValue, budgetValue, thingsValue} = req.body
    
    let newTravelData = { 

        id: globalId,
        nameValue, 
        destinationValue,
        budgetValue,
        thingsValue

    }

    travelData.push(newTravelData)
    res.status(200).send(newTravelData)
    globalId++
        console.log(travelData)
    }


   
}



