import { backToMain } from "../index.js"

const buatRentang = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("bukan number")
    return
  } else if (num2 < num1) {
    console.log("Input 1 harus lebih kecil dari input 2")
  } else {
    let output = []
    for (let i = num1; i <= num2; i++) {
      output.push(i)
    }
    const result = output.join(",")
    console.log(result)
  }
}

export const question2 = async (rl) => {
  const inputNum1 = await rl.question(`Input num1 : `)
  const inputNum2 = await rl.question(`Input num2 : `)
  buatRentang(inputNum1, inputNum2)
  backToMain(rl)
}
