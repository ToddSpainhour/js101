console.log("Objects objects objects!")

const wordLength = (word) =>{
return word.length
}

console.log(wordLength('cats'))

console.log(`This sentence is ${wordLength('How many letters will this be?')} letters long.`)

//age check function

const ageCheck = (age) => {
if (age < 21) {
    console.log("No drinks for you!");
} else {
    console.log("Have fun, but don't drink and drive!")
}
}

ageCheck(18)
ageCheck(21)



//objects

const expense = {
    dateCreated: '01/17/2020',
    location: "Nashville",
    cost: 12750,
    isGood: true,
}

//dot notation

console.log(expense.cost)

//braket notation 

console.log(expense['cost'])


const employee = {
    firstName: "Todd",
    lastName: "Spainhour",
    startDate: "15 December 2019",
    parRate: "So much money!",
    currentProject: "Voter Registration Events",
}

console.log(employee["firstName"])
console.log(employee)
console.log(employee["startDate"])

//challenge create a function called statusMaker
//takes in single employee. If the employee's first name starts with an M, then add a key of status and a value of 'VIP'
//if their name doesn't start with 'M' add a status and a value of peasant
//return complete employee info


const statusMaker = (employee) => {
    if (employee.firstName[0] === "M") {
    employee.status = "VIP";
} else {
    employee.status = "Peasent"
}
return employee;
}


console.log(statusMaker(employee))


