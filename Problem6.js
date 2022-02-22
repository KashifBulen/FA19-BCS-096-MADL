const rand = Math.floor(Math.random() * 11)


const user = window.prompt("Enter a number: ");

if(rand === user){
    window.prompt("You WIN")
}
else{
    window.prompt("Not matched")
}