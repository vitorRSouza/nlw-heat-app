const myObj = {id:1,nome:"vitor"}
console.log( {...myObj} )

delete myObj.nome

const newObj = {...myObj, newValue: "tchau"}
console.log(newObj)
