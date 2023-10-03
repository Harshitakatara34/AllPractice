let arr=[0,1,2,5]
let n=6
let count=0
let ans=[]
arr.sort((a,b)=>a-b)
while(count<=n){
  if(arr.includes(count)){
  count++;
}
else{
  ans.push(count)
  count++;
}
}  
console.log(ans)