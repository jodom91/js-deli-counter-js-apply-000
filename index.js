// should return "Welcome, newPerson, you are number (# back of line) in line"
//"Welcome, Ada. You are number 1 in line."
// this is if somebody new walks into the store
var actualLine = [];
var i=1 
      function takeANumber(actualLine) {
          
          actualLine.push(i++); //[1] i=2
          var welcomePhrase = ". You are number " + i-1; //You are number 1
          return(welcomePhrase);
      }  
      
actualLine = [0]
      
  // accepts an array and returns first person in that array so they can be served.
  // if nobody is in the array, returns"There is nobody waiting to be served!"
  // kicks off first element in array.
  
      function nowServing(katzDeliLine) { 
          if(katzDeliLine.length>0) {
          var firstInLine = "Currently serving " + katzDeliLine[0] + ".";
          katzDeliLine.shift();
          return firstInLine;
      } else {
          return "There is nobody waiting to be served!"
      }    
      }
      
      //accepts an array and returns the array as a String
      //"The line is currently..."
      //if nobody in line, return "the line is currently empty"
      
      function currentLine(katzDeliLine) {
          var i = 0;
          var lineLength = "The line is currently: ";
          if (katzDeliLine.length>0){  
              
              while(i < katzDeliLine.length){
              lineLength = lineLength + (i+1) + ". " + katzDeliLine[i] +", ";
              i++;
              }
              
            lineLength = lineLength.substr(0,lineLength.length-2);
            return lineLength;
          } else {
          return "The line is currently empty.";
          }
      }