import { question1 } from "./src/soal1.js";
import { question2 } from "./src/soal2.js";
import { question3 } from "./src/soal3.js";
import { question4 } from "./src/soal4.js";
import { question5 } from "./src/soal5.js";
import { createInterface } from "node:readline/promises"

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})


const main = async (rl) => {
  console.log(`Pilihan soal:
1. Soal 1 (triangle)
2. Soal 2 (buatRentang)
3. Soal 3 (processNumbers)
4. Soal 4 (fetchData)
5. Soal 5 (getDataFromServer)
6. Exit
`)
  const choiceQuestion = await rl.question('Pilihanmu : ')
  if (choiceQuestion >=1 && choiceQuestion <=7){
      if (choiceQuestion == 1) {
      await question1(rl)
    } else if (choiceQuestion == 2) {
      await question2(rl)
    } else if (choiceQuestion == 3) {
      await question3(rl)
    } else if (choiceQuestion == 4) {
      await question4(rl)
    } else if (choiceQuestion == 5) {
      await question5(rl)
    } else if (choiceQuestion == 6) {
      rl.close()
    }
  } else {
    console.log("Pilihan hanya 1 - 6")
    main()
  }
}

main(rl)

export const backToMain = async (rl) => {
  const backInput = await rl.question(`Kembali ke main menu? (y/n)`)
  if (backInput == "y") {
    console.clear()
    main(rl)
  } else if (backInput == "n") {
    rl.close()
  } else {
    console.clear()
    console.log("Jawaban antara y atau n?")
    backToMain(rl)
  }
}

