var isSquare = function(n){
  if (n === 0) {
    return true 
  }
  for (let i = 0; i < n; i++) {
    if (i * i === n) {
      return true 
    }
  }
  return false 
}