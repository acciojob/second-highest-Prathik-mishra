let largest = arr[0];
let secondLargest = -1;
for(let i = 2; i < arr.length; i++){
    if(arr[i]>largest){
        secondLargest = largest;
        largest = arr[i];
    }
    else if(arr[i]<largest && secondLargest<arr[i]){
        secondLargest=arr[i]
    }
   
}

alert(secondLargest);
