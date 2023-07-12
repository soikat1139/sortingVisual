const element=document.querySelector("#visualtion")



const randomInt=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);

const arr=[]

for(let i=0;i<15;i++){
    arr.push(randomInt(10,400))
}
console.log(arr)



for(let i=0;i<arr.length;i++){
    const div=document.createElement("div")
    div.style.height=`${arr[i]}px`
    div.style.backgroundColor="green"
    // div.style.width="30px"
    //add a classList to the duiv element
    div.classList.add("bar")
    element.appendChild(div)
}



function mergeSort(arr,left,right){
    if(left>=right){
        return;
    }
    const mid=Math.floor((left+right)/2);
    mergeSort(arr,left,mid)
    mergeSort(arr,mid+1,right)
    merge(arr,left,mid,right)
}

function merge(arr,left,mid,right){ 
    const leftArr=arr.slice(left,mid+1)
    const rightArr=arr.slice(mid+1,right+1)
    let i=0,j=0,k=left;
    while(i<leftArr.length && j<rightArr.length){
        if(leftArr[i]<rightArr[j]){
            arr[k]=leftArr[i]
            i++
        }else{
            arr[k]=rightArr[j]
            j++
        }
        k++
    }
    while(i<leftArr.length){
        arr[k]=leftArr[i]
        i++
        k++
    }
    while(j<rightArr.length){
        arr[k]=rightArr[j]
        j++
        k++
    }
}

mergeSort(arr,0,arr.length-1)

console.log(arr)



const button=document.createElement("button")
button.innerText="Sort"
button.classList.add("btn")
element.appendChild(button)



button.addEventListener("click",()=>{
    const divs=document.querySelectorAll(".bar")
    for(let i=0;i<divs.length;i++){
        setTimeout(()=>{
            divs[i].style.backgroundColor="blue"
            divs[i].style.height=`${arr[i]}px`
        },i*100)
    }
})



const initButton=document.createElement("button")
initButton.innerText="Init"
initButton.classList.add("btn")
element.appendChild(initButton)


initButton.addEventListener("click",()=>{
    window.location.reload()
}
)

