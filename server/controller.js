const travelData = require("./db.json")
let globalId = 1

module.exports = {

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
    res.status(200).send(travelData)
    globalId++

    }

   
}



