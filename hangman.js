let word = "hello"
let newWord = word.split("")

let board = word.split("").fill("-")
let rightGuesses = []
let wrongGuesses = []

let checkGuess = function(letter){
  
  if(word.includes(letter)){
    for(let i=0; i < newWord.length; i++){
      if (newWord[i] === letter){
        board[i] = letter 
    } else {
  
    }
    }
  } else {
    console.log("wrong Letter")
  }
  checkForWin(board)

  console.log(board)
  
  return board
    
}

let checkForWin = function(board){

  if(board.join("") === word){
    console.log("YOU WON")
    
  }else {
    console.log("pick a letter")
  }
}



checkGuess("l")

checkGuess("e")

checkGuess("h")

checkGuess("o")



