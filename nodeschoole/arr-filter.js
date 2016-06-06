var nums=[1,2,3,4,5,6,7,8,9,10],
    filtered=nums.filter(evenNums);

function evenNums(num) {
    return num%2===0
}

var food=['apple','pizza','pear'];
var pets=['cat','dog','rat'];
for(var i=0;i<pets.length;i++){
    pets[i]+='s';
}
console.log(pets);