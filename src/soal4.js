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

let status = true


fetchData(status).then((resolve) => {
  console.log(resolve)
}).catch((reject) => {
  console.log(reject)
})

// fetchData(false).then((resolve) => {
//   console.log(resolve)
// }).catch((reject) => {
//   console.log(reject)
// })

const result = async (status) => {
  try {
    const fetching = await fetchData(status)
    console.log(fetching)
  } catch (error) {
    console.log(error)
  }
}

result(status)