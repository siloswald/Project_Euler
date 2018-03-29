var fibonacci = [0,1];
var i = 0;
var sum = 0;
while (fibonacci[0]+fibonacci[1] < 4000000){
    i= fibonacci[0]+fibonacci[1];
    fibonacci[0]=fibonacci[1];
    fibonacci[1]=i;

    if(i%2 === 0){
        sum += i;
    }
}
console.log(sum);
