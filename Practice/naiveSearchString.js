//count the number of how many times a substring comes in a string

/*
function naiveStr(long, short){
    let count = 0
    for(let i=0; i<long.length; i++){
        for(let j=0;j<short.length; j++){
            if(short[j]!=long[i+j]){
                break;
            }
            if(j===short.length-1){
                count++
            }
        }
    }
    return count
}

let result = naiveStr("The world is awesome", "The")
console.log(result)

Time complexity: Big O(n^2)

*/