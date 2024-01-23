const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
"w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?",
"/"];
let stageEl=document.getElementById("passOne")
 let yourInputEl=document.getElementById("yourInputId")
 function getRandomPassword(){
    let password=""
    for(let i=0; i<15; i++){
        let randomIndex=Math.floor(Math.random()*characters.length)
        password+=characters[randomIndex]
    }
    
  // Set the generated password in the input field and display it
    yourInputEl.value = password
 }
 function copyPassword(){
    // Get the input element by its ID
    let inputEL=document.getElementById("yourInputId")
    //select text inside the input element
    inputEL.select()
    try{
        //execute copy command
        document.execCommand("copy")
           
        // Update the content and display of the copied message
        let copiedMessage = document.querySelector('.copy-password button');
        copiedMessage.classList.add("active");

        // You can add a delay to hide the message after a certain time (e.g., 2 seconds)
        setTimeout(function() {
            copiedMessage.classList.remove("active");
        }, 2000);

        window.getSelection().removeAllRanges();
        
    }
    catch(err){
        // Handle any errors that may occur during copying
        console.error('Unable to copy text:', err);
    }
 }