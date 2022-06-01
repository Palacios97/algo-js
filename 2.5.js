   const readlineSync = require('readline-sync');

    var userName = readlineSync.question( "What is your favorite number?") ;

    while(userName != 42) {
    console.log("are you sure ?");
    var userName = readlineSync.question( "What is your favorite number?") ;
}   
    console.log( "Game Over" ); 

        
      
   