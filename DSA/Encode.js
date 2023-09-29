// *1) Encoder*

// encode ("aaaabccaadeeee")
// [[4,a] [1,b] [2,c] [2,a] [1,d][4,e]]
// - 
// Output should be nested array

let encode= "aaaabccaadeeee"
// [[4,a] [1,b] [2,c] [2,a] [1,d][4,e]]
function Encode(encode){
  let count=1
  let ans=[]
  for(let i=0;i<encode.length;i++){
    if(encode[i]!=encode[i+1]){
      ans.push([count,encode[i]])
      count=1
    }
   else{
      count++;
   } 
  }
  console.log(ans)
}
Encode(encode)