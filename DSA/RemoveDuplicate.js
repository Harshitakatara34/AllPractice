// 9) Remove duplicates from an array.

// input: arr = [1,1,22,22,3]
// output: [1, 22, 3]


let arr=[1,2,2,3,3,4,4,4]
let obj={}
for(let i=0;i<arr.length;i++){
  if(obj[arr[i]]==undefined){
    obj[arr[i]]=1
  }
  else{
    obj[arr[i]]++
  }
}
let ans=[]
for(let key in obj){
 ans.push(key)
 
}
 console.log(ans)