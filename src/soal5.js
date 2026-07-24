import { backToMain } from "../index.js";

const getDataFromServer = (status, callback) => {
  if (status) {
    setTimeout(() => {
      const products = [
        'Product 1',
        'Product 2',
        'Product 3'
      ]
      callback(products, null)
    }, 3000);
  } else {
    const err = new Error('Failed to fetch data')
    callback(null,err)
  }
}

const processData = (products, err) => {
  try {
    if (err) {
      throw err
    }
    console.log(products)
  } catch (err) {
    console.log(err)
  }
}

export const question5 = async (rl) => {
  const input = await rl.question(`1. Berhasil get data (status: true)
2. Gagal get data (status: false)
Pilihan hasil get data? : `)
    // let status;
    if (input == 1) {
      getDataFromServer(true, processData)
    } else if (input == 2) {
      getDataFromServer(false, processData)
    } else {
      console.clear()
      console.log("Pilih antara 1 atau 2")
      question5(rl)
    }
  
  await asyncBack(rl)
}

const asyncBack = async (rl) => {
  setTimeout (() => {
    backToMain(rl)
  }, 3100)
}
