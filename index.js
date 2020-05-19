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
  var newArray = [];
  var newArrayForSring = []
  
  for (let i = 0; i < array.length; i++){
    newArray.push(`${i+1}. ${array[i]}`)
    
  }
  
  if (array.length > 0){
    newArrayForString = newArray.join(', ')
    return (`The line is currently: ${newArrayForString}`)
  } else {
    return (`The line is currently empty.`)
  }
}