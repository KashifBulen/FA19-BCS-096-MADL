//String vowel
function isVowel(char)
{
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false;
}

function find_leftMost_vowel(str){
    let vowel = " "
    let index = 0
    for(let i=0; i<str.length; i++)
    {
        if(isVowel(str[i].toLowerCase()))
        {
            vowel = str[i]
            index = i
        }
    
    }
    
    console.log("left most vowel in string is: " +vowel+ " on index "+index)
}



let str = "Checking"
find_leftMost_vowel(str)

//Reverse number
console.log("\n\n")

function Reverse_num(num){
    let result = 0
    let mul = 0;
    for (let i = num; i > 0; i = ~~(i/10)) {
        let digit = i % 10;
        result = result * 10 + digit;
    }
    console.log(result)
}

let num = 123456

Reverse_num(num)