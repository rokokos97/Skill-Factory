let arr = [1,2,3,4,5,0,null,true,[],"7"];

let checkArr = function (arr) {
    let zeroArr = []
    let evenArr = []
    let oddArr = []
    for(let i=0; i<arr.length;i++){
        if(arr[i]===0){
            zeroArr.push(arr[i])
        } else if (typeof arr[i]==="number"&&arr[i]%2===0){
            evenArr.push(arr[i])
        } else if (typeof arr[i]==="number"&&arr[i]%2!==0){
            oddArr.push(arr[i])
        }
    }
    console.log(`В данном массиве ${zeroArr.length} элементов "0", ${evenArr.length} - четных элементов и ${oddArr.length} - нечетных `)
    console.log(zeroArr);
    console.log(evenArr);
    console.log(oddArr);
}
checkArr([1,2,3,4,5,0,null,true,[],"7",0,0,45,96,14,3.34,6e4]);