let arr = [1,1,3,4]
for(let i=0; i<arr.length;i++){
    let fromIndex = i+1;
    console.log("arr[i]", arr[i]);
    console.log("fromIndex", fromIndex);
    let matchNumbers = arr.includes(arr[i],fromIndex);
    if(matchNumbers===true){
        console.log(matchNumbers);
        break;
    }else if(matchNumbers===false && i===arr.length-1){
        console.log(matchNumbers);
        break;
    }
}