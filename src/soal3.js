const processNumbers = (arr) => {
  let result = 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result *= arr[i]
    }
  }
  console.log(result)
}

processNumbers([1, 2, 3, 4, 5])
processNumbers([2, 4, 6, 8])