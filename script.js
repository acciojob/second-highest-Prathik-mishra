//your JS code here. If required.
let arr=[];
let largest=arr[0];
let secondlargest=-1;
for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
secondlargest=largest;
largest=arr[i];
    }
    else if(largest<arr[i]&&secondlargest>arr[i]){
        secondlargest=arr[i]
    }
   
}
console.log(secondlargest);