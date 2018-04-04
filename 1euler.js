function euler_01() //Implement function function_name(object)
{
    var sum = 0, x = 1000; //Assign value = 0 to sum variable, assign value = 1000 to x variable
    
    while (x --) //implement post-decrement operand condition to variable x
{
if ( x % 3 === 0 ||  x % 5 === 0 ) //assigning parameters to variable x
{
    sum += x; //sum is either larger or equal to x
    }
}
return sum; //return variable sum
}
console.log(euler_01(1000)) //log function with object literal 1000

//You can add other keywords to loops that allow for different functionality 

//Keywords: do while if for 

//Post-Increment Operand:
//a++ 
//add 1 to a, returns the old value.
//++a 
//add 1 to a, returns the new value.

//Post-Decrement Operand:
//a--
//subtract 1 to a, returns the old value
//--a
//add 1 to a, returns the new value
