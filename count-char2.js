//We need to Go through and check the value.
//If its the first occurance of the letter return that index.
//So the first loop
    //l needs to check for previous occurances of the letter

function countLetters (input) {
    var cholder = "";
    var holder = 0;
    var object = {};
    var array = []
    for(let i = 0; i < input.length; i++) {
      cholder = input[i];
      //Log where the letter occurs
      for(let j = 0; j < input.length; j++) {
        if (cholder === input[j]) {
            array.push(j)
        }
    }
    object[cholder] = array;
      holder = 0;
      cholder = "";
      array = []
    
}
console.log(object);
}
countLetters("lighthouse in the house")