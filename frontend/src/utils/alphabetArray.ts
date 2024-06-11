export function alphabetArray() {
  const alphabetArray = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i).toUpperCase()
  )
  return alphabetArray
}
