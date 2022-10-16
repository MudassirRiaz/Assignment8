// 1. Write a ts program to read and print elements of array.
// var arr:number[]=[1,2,3,4,5,6,7,8,9]
// for(var i=0;i<arr.length;i++){
//     console.log("Value of array at ",i,"is",arr[i])
// }
// 2. Write a ts program to print all negative elements in an array.
// var arr:number[]=[-1,2,-3,4,-5,6,-7,8,-9]
//         for(var i=0;i<arr.length;i++){
//             if(arr[i]<0)
//             console.log("Value of array at ",i,"is",arr[i])
//         }
// 3. Write a ts program to find sum of all array elements. 
// var arr:number[]=[1,2,3,4,5,6,7,8,9]
// var sum:number=0
//   for(var i=0;i<arr.length;i++){
//   sum+=arr[i]
// }
// console.log("Sum of all array elements ", sum)
// 4. Write a ts program to find maximum and minimum element in an array.
// var arr:number[]=[18,19,20,25,39]
// var sum:number=arr[0]
// var min:number=arr[0]
//   for(var i=1;i<arr.length;i++){
//     if(sum<arr[i]){
//         sum=arr[i]
//     }
// }
// for(var i=1;i<arr.length;i++){
//     if(min>arr[i]){
//         min=arr[i]
//     }
// }
// console.log("Maximum number in array", sum)
// console.log("Minimum  number in array", min)
// 5. Write a ts program to find second largest element in an array.
var arr = [1, 6, 4, 7, 2, 5];
var min = arr[0];
var temp = 0;
for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
        temp = min;
    }
    else {
        min = arr[i];
    }
}
console.log(temp);
// 6. Write a ts program to count total number of even and odd elements in an array.
// var arr:number[]=[1,2,3,4,5,6,7,8,9]
//  var sum2:number=0
//  var sum3:number=0
//  for(var i=0;i<arr.length;i++){
//  if(arr[i]%2==0)
//     sum2++
//  else
//     sum3++
// }console.log("Total even number in array is",sum2)
// console.log("Total odd number in array is",sum3)
// 7. Write a ts program to count total number of negative elements in an array.
// var arr:number[]=[-1,-2,3,4,-5,6,7,-8,-9]
// var sum2:number=0
// var sum3:number=0
// for(var i=0;i<arr.length;i++){
// if(arr[i]<0)
//  sum2++
// }
// console.log("Total number of negative elements in array",sum2)
// 8. Write a ts program to copy all elements from an array to another array.
// var arr:number[]=[1,2,3,4,5,6,7,8,9]
// var arr2:number[]=[]
// var temp:number;
// for(var i=0;i<arr.length;i++){
//     temp=arr[i]
//     arr2[i]=temp
// }console.log("Elements of 2nd array",arr2)
// 9. Write a ts program to insert an element in an array.
// var arlength=parseInt(prompt("Enter length of array"))
// console.log(arlength)
// var arr:number[]=[]
// var temp;
// for(var i=0;i<arlength;i++){
//     temp=prompt("Enter array values")
//     temp=arr[i]
// }
//  for(var j=0;j<arr.length;j++){
// console.log(arr[j])}
// 10. Write a ts program to delete an element from an array at specified position.
// 11. Write a ts program to count frequency of each element in an array.
// 12. Write a ts program to print all unique elements in the array.
// 13. Write a ts program to count total number of duplicate elements in an array.
// 14. Write a ts program to delete all duplicate elements from an array.
// 15. Write a ts program to merge two array to third array.
// 16. Write a ts program to find reverse of an array.
// 17. Write a ts program to put even and odd elements of array in two separate array.
// 18. Write a ts program to search an element in an array.
// 19. Write a ts program to sort array elements in ascending or descending order.
// 20. Write a ts program to sort even and odd elements of array separately.
// 21. Write a ts program to left rotate an array.
// 22. Write a ts program to right rotate an array.
