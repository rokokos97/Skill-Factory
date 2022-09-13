 function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
 const int = [0,100]
 let a = getRandomIntInclusive(int[0],int[1])
 console.log("a=", a);

