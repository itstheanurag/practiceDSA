// write a function to sort an array of zero's and One's

let arr=[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0]
console.log(sort(arr))
function sort(a){
    let i =0
    let j=a.length-1
    while(i<j){
        if(a[i]==1&&a[j]==0){
            [a[i],a[j]]=[a[j],a[i]]
            i++
            j--
        }
        else if(a[i]==0&&a[j]==1){
            i++
            j--
        }
        else if(a[i]==1&&a[j]==1){
            j--
        }
        else if(a[i]==0&&a[j]==0){
            i++
        }
    }return a
}