// *3) Given an array of integer* nums and an integer target, return indices of the two numbers such that they add up to the target.
// Input: nums = [2,7,11,15], target = 9Output: [0,1]Output: Because nums[0] + nums[1] == 9, we return [0, 1].


function Ans(arr,target){
    let ans=[]
    for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
          ans.push(i)
        }
      }
    }
    console.log(ans)
  }
  Ans([2,7,11,15],9)