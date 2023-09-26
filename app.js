const operations =  ["5","2","C","D","+"]


function ShowScore(operationArray)
{
    const scoreArray = [];
    let totalSum = 0;
    for (const operation of operationArray) {

         // Checking D Operation
         if(!scoreArray.length && operation === "D")
         {
            alert("Must be at least one point to double !")
            break
         }
         // Checking C operation
         if(!scoreArray && operation === "C")
         {
            alert("There are not exist any score for removing")
            break
         }

         // Checking + Opearion
         if(scoreArray.length < 2 && operation === '+')
         {
            alert("There must be at least two points for this operation")
            break
         } 

         // Adding Score
        if(Number(operation) === parseInt(operation))
        {
            scoreArray.push(operation)
        }

        // Adding Double Previous Score
        else if(operation === "D")
        {
            let num = scoreArray[scoreArray.length-1]*2
           scoreArray.push(num.toString())
        }

        // Remove Last Score
        else if(operation === "C")
        {
            scoreArray.pop();
        }

        // adding sum of last 2 score
        else if(operation === '+')
        {
           scoreArray.push(Number(scoreArray[scoreArray.length-1]) + Number(scoreArray[scoreArray.length-2]) )
        }

       

    }

    // finding Sum of Scroes
    scoreArray.forEach(item => {
        totalSum+=Number(item)
    })

    // Returing Values
    return `
    Sum of the scores is ${totalSum} 
    // and Scores : ${scoreArray.length?scoreArray:"[empty]"}
    `

}

// Invoke Function 
console.log(ShowScore(operations));