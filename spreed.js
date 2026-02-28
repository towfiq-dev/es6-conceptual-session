// const num =[1,2,3,4,5,6,7,8,9]
// console.log(...num);
// const num2 =[2,4,6,8,0]
// console.log(...num2);
// const num3 = [...num, ...num2]
// console.log(...num3);

 const arr1 =[1,2,3,4,5]
 const arr2 = [...arr1, 6,7,8,9,0]
 console.log(arr2);

 const arr5 =[2,4,6,8,10]
 function sum(num1,num2,num3,num4,num5) {
  return num1+num2+num3+num4+num5
 }
 console.log(sum(...arr5));


 const num =[1,2,3,4,5]
 const arrow1 = (num1,num2,num3,num4,num5)=>{
  return num1+num2+num3+num4+num5
 }
 console.log(arrow1(...num));
 const min =[1,2,3,4,5]
 console.log(Math.min(...min));
 
 