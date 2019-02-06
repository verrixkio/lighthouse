function countLetters (input) {
    var cholder = "";
    var holder = 0;
    var object = {};
    for(let i = 0; i < input.length; i++) {
      cholder = input[i];
      for(let j = 0; j < input.length; j++) {
        if (cholder === input[j]) {
          holder += 1;
        }
      }
      object[cholder] = holder;
      holder = 0;
      cholder = "";
    }
    console.log(object);
    };
countLetters("lighthouse in the house")