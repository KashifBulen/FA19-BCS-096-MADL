function Even(num){
    let result = 0
    for(let i=0; i< num.length; i++)
    {
        if((num[i]*1) % 2 === 0){
            result += num[i]*1
        }
        
    }
    return result
}

let num = "23617"

const result = Even(num)

console.log(result)