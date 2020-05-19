function takeANumber(array, name){
  array.push(name);
  return (`Welcome, ${name}. You are number ${array.length} in line.`)
  
}

function nowServing(array){
  if (array.length > 0) {
    var newArray = array.slice()
    array.shift()
    return (`Currently serving ${newArray[0]}.`)
    
  } else {
    return (`There is nobody waiting to be served!`)
  }
}

function currentLine(array) {
  var newString = '';
  
  for (let i = 0; i < array.length; i++){
    newString = newString + (`${i+1}. ${array[i]} ,`)
  }
  if (array.length > 0){
    return (`The line is currently: ${newString}`)
  } else {
    return (`The line is currently empty.`)
  }
}