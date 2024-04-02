function calculateTime(deliveries) {
  //we define a object signo that will have two properties, if its true means that we need to add the - sign because the time was exceeded if its false, nothin.
  const signo = {true:'-', false:''}
  //we get the time in seconds, so we can work better with times.
  let time = 7*3600

  //we get the full time in seconds used in the delivery and substract the time of 7 hours minus the time used in the delivery.
  for(const delivery of deliveries){
    const [hours,minutes,seconds] = delivery.split(':')
    time += - hours*3600 - minutes*60 - seconds
  }

  //to determine if the time is negative or not
  const bool = time > 0

  //we get the time in absolute.
  time = Math.abs(time)
  
  //we construct again the time in hours minutes and seconds.
  const seconds = time%60
  const minutes = Math.trunc(time/60)%60
  const hours = (Math.trunc(time/60)-minutes)/60

  //We format the string to be HH:mm:ss and with padStart to have at least 2 characters.
  const formated_time = `${hours}`.padStart(2,'0') + ':' 
                        +`${minutes}`.padStart(2,'0')+ ':'
                        +`${seconds}`.padStart(2,'0') 

  return  signo[bool] + formated_time
}

calculateTime(['00:10:00', '01:00:00', '03:30:00'])
// '-02:20:00'
console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))

calculateTime(['02:00:00', '05:00:00', '00:30:00'])
// '00:30:00'
console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))

calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
]) // '-05:29:00'
console.log(calculateTime(['00:45:00','00:45:00','00:00:30','00:00:30']))