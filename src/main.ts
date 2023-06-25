import './styles/main.scss'

const sum = (a: number, b: number) => {
  return a + b
}

const sumOfMany = (...nums: number[]) => {
  return nums.reduce((total, num) => total + num, 0)
}

console.log(sum(1, 2))
console.log(sumOfMany(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
