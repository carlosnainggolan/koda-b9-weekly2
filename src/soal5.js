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

let status = true

getDataFromServer(status, processData)