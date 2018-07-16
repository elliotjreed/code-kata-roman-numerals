export default function convertToRomans (arabicNumber) {
  const numberMap = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }
  let romanNumeral = ''

  for (const index of Object.keys(numberMap)) {
    const q = Math.floor(arabicNumber / numberMap[index])
    arabicNumber -= q * numberMap[index]
    romanNumeral += index.repeat(q)
  }

  return romanNumeral
}
