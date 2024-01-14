function humanReadable (seconds) {
    let temp = 0
    temp += seconds
    let newArr = []
  
    let HH = Math.floor(temp / 3600);
    if (HH > 0 || HH === 0) {
      newArr.push(HH > 0 ? HH > 9 ? HH : "0" + HH : "00")
    }
  
    let MM = Math.floor((temp %= 3600) / 60);
    if (MM > 0 || MM === 0) {
      newArr.push(MM > 0 ? MM > 9 ? MM : "0" + MM : "00")
    }
    let SS = Math.floor((temp %= 60) / 1);
    if (SS > 0 || SS === 0) {
      newArr.push(SS > 0 ? SS > 9 ? SS : "0" + SS : "00")
    }
  
    return newArr.join().replace(/,/g, ':')
  }



console.log(humanReadable(0)) // --> 00:00:00
console.log(humanReadable(59)) // --> 00:00:59
console.log(humanReadable(60)) // --> 00:01:00
console.log(humanReadable(90)) // --> 00:01:30
console.log(humanReadable(45296)) // --> 12:34:56
console.log(humanReadable(86400)) // --> 23:59:59
console.log(humanReadable(359999)) // --> 99:59:59