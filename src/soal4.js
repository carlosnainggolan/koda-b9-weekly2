import { backToMain } from "../index.js";

const fetchData = (status) => {
  return new Promise((resolve, reject) => {
    if (status) {
      setTimeout(() => {
        resolve("Data berhasil disimpan")
      }, 3000);
    } else {
      reject("Gagal mengambil data")
    }
  })
}

const result = async (status) => {
  try {
    const fetching = await fetchData(status)
    console.log(fetching)
  } catch (error) {
    console.log(error)
  }
}

export const question4 = async (rl) => {
  const input = await rl.question(`1. Berhasil fetching data (then-catch)
2. Gagal fetching data (try-catch)
Pilihan hasil fetching data? : `)
    if (input == 1) {
      fetchData(true).then((resolve) => {
        console.log(resolve)
      }).catch((reject) => {
        console.log(reject)
      })
      
    } else if (input == 2) {
      result(false)
      
    } else {
      console.clear()
      console.log("Pilih 1 atau 2 saja")
      question3(rl)
    }
  asyncBack(rl)
}

const asyncBack = async (rl) => {
  setTimeout(() => {
    backToMain(rl)
  }, 3100)
}