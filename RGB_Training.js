function Division(num1,num2) { 

    // code goes here
    let result;
    for(i=1; i<1000; i++){
      if(num1 % i === 0 && num2 % i === 0){
        result = i;
      }
    }

    return result; 
  
  }
     
  // keep this function call here 
  console.log(Division(22,11));


  function checkForDuplicates(array, keyName) {
    return new Set(array.map(item => item[keyName])).size !== array.length
  }