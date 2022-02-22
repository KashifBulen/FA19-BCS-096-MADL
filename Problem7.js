function check_num_10(num)
{
  const end_pos = num.length - 1;
 
   if(num[0] == 10 || num[end_pos] == 10)
   {
         console.log("Yes 10 is Present");
   }
   else
   {
       console.log("No 10 is not Present");
   }
}


console.log(check_num_10([1, 3, 10,5,6,7,10]));
console.log(check_num_10([1, 3, 5, 1]));
console.log(check_num_10([10, 4, 6,2,4,10,,5,6,3]));