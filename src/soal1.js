const triangle = (num) => {
  if (num < 0 || typeof num !== "number") {
    console.log("Paramater harus berupa nomor dan harus nomor positif")
  } else {
    for (let i = 1; i <= num; i++) {
      let output = ""
      for (let j = 1; j <= i; j++) {
        output += j
      }
      console.log(output)
    }
  }
}

triangle(5)
triangle("abc")
triangle(-1)


