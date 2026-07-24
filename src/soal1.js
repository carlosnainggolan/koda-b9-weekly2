import { backToMain } from "../index.js" 

const triangle = (num) => {
  let input = Number(num)
  if (isNaN(input) || input < 0 || typeof num !== "string" && typeof num !== "number" ) {
    console.log("Paramater harus berupa nomor dan harus nomor positif")
  } else {
    for (let i = 1; i <= input; i++) {
      let output = ""
      for (let j = 1; j <= i; j++) {
        output += j
      }
      console.log(output)
    }
  }
}

export const question1 = async (rl) => {
  const input = await rl.question(`Input number : `)
  triangle(input)
  backToMain(rl)
}


// || !String(num).trim()