
  let sentanceToEnc = (scramble("This is my first post to Github"));
  //prints encrypted string to the console
  console.log(sentanceToEnc);


  let sentanceToDec = unscramble(sentanceToEnc);
  //prints decrypted string to console
  console.log(sentanceToDec);

function scramble(stringToScram) {
  
  let strLen = stringToScram.length;
  let tex = '_';
  let reversedStr = "";
  let emptyStr0 = "";
  let emptyStr1 = "";
  
   if (strLen % 2 == 0) {
    //Number is even
  } else {
    //Number is odd so add char to string, to make str an even length
    stringToScram += tex;
  }
  
    //reverse the string
    for (let i = strLen; i >= 0; i--) {
    reversedStr += stringToScram.charAt(i);
  }
  
    for (let i = 0; i < strLen + 1; i ++) {
      if (i % 2 == 0) {
        //if index is even, add it to one empty string
        emptyStr0 += reversedStr.charAt(i)
      } else {
        //else add it to second empty string
        emptyStr1 += reversedStr.charAt(i)
      }
  } 
  return emptyStr0 += emptyStr1;
}

function unscramble(stringToUnScram) {
  let strLen = stringToUnScram.length;
  let strLenDivTwo = stringToUnScram.length / 2;
  let str0 = stringToUnScram.slice(0, strLenDivTwo);
  let str1 = stringToUnScram.slice(strLenDivTwo, strLen);
  let strToAssemble = "";
  let emptyStr = ''
  let counter1 = -1;
  let counter2 = -1;
  
  //re-assemble string in correct order before reversing it
  for (let i = 0; i < (strLen + 1); i++){ 
    if (i % 2 == 0) {
      counter1++
      strToAssemble += str0.charAt(counter1);
    }  else {
      counter2++
      strToAssemble += str1.charAt(counter2);
    }
  }
  
    //reverse the string while removing dummy char "_"
    //push result in to empty string and return it
    for (let i = strLen; i >= 0; i--) {
      if (strToAssemble.charAt(i) == "_") {
        emptyStr += '';
      } else {
        emptyStr += strToAssemble.charAt(i);
      }
  }
   return emptyStr;
}
