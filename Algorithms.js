// #1 REVERSE A STRING

function reverseString(str) {
  var newStr = "";
  for(var i = str.length-1; i => 0 ; i--){
   newStr += str[i];
  }
  console.log(newStr);
  return newStr;
}
reverseString("hello");

// #2 FACTORIALZE A NUMBER

function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
factorialize(5);

// #3 PALINDROME

function palindrome(str) {
  var newStr = "";
  if(str.length === 1 || str.length ===0 ){
    return true;
  }
  for(var i = str.length-1; i > -1; i--){
    newStr += str[i];
  }
  if(newStr === str){
    return true;
  }else{
    return false;
  }
}
palindrome("eye");

// #4 LONGEST WORD
function findLongestWord(str) {
  var longest = 1;
  var count = 1;
  for(var i = 0; i<str.length-1; i++){
    if (str[i+1] != " "){
      count++;
      if(count>longest){
      longest = count;
      }
    }else{
     count = 0;
    }
  }
  return longest;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

// #6
function largestOfFour(arr) {
  var newArr=[];
  var temp = 0;
  for(var i = 0; i <arr.length; i++){
    for(var j = 0; j<arr.length; j++){
      if(arr[i][j]>temp){
        temp = arr[i][j];
      }
    }
    newArr.push(temp);
    temp =0;
  }
  return newArr;
}
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
