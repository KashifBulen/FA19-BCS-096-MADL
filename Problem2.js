var digits="1,2,3,4,5";


var output = digits.split(",").reduce(sumary, 0);


function sumary(total,value,index,array) 
{
  return total + value;
}

console.log(output);