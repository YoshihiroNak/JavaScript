// let count = 3

// while (count > 0) {
//     console.log(count--)
// }

// Python
// for i in range(10):
//  print(i)

// 3-part for loop
// initializer runs once, before the first interation
// condition will be tested before every interation
// post-iteration excutes after every iteration

// for (initializer; condition; post-iteration) {}

// const numbers = [1, 2, 5, 21, 44, 37]

// let res = []
// for (let i = 0; i < numbers.length; i++) {
//     res.push(numbers[i])
// }
// console.log(res)

// for (let prev=1, next=1; next <= 1000; tmp=next, next=prev+next, prev=tmp) {
//     console.log(next)
// }

const favFoods = ['pizza', 'pasta', 'tacos']

// Python
// for item in favFoods:
//   print(item)

// for (let item of favFoods) {
//     console.log(item)
// } 
// for (let index in favFoods) {
//     console.log(`${parseInt(index)+1}. ${favFoods[index]}`)
// } 

favFoods.forEach((food, index) => {
    console.log(`${index+1}. ${food}`)
})

favFoods.forEach(food => console.log(food))

