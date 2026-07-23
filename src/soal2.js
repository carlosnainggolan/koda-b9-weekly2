const buatRentang = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("bukan number")
    return
  }
  let output = []
  for (let i = num1; i <= num2; i++) {
    output.push(i)
  }
  const result = output.join(",")
  console.log(result)
}

buatRentang(-5, 15)
buatRentang("carlos", "nainggolan")
