import { backToMain } from "../index.js"

const processNumbers = (arr) => {
  let result = 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result *= arr[i]
    }
  }
  console.log(result)
}

export const question3 = async (rl) => {
  const input = await rl.question(`Input array of number : `)
  
  processNumbers(input)
  backToMain(rl)
}