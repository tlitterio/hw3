// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // Create series of variables from json results to be consumed
  let dropoffAddress = ride.dropoffLocation.address
  let dropoffCity = ride.dropoffLocation.city
  let dropoffState = ride.dropoffLocation.state
  let dropoffZip = ride.dropoffLocation.zip
  let numberOfPassengers = ride.numberOfPassengers
  let passengerFirstName = ride.passengerDetails.first
  let passengerFLastName = ride.passengerDetails.last
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber
  let pickupAddress = ride.pickupLocation.address
  let pickupCity = ride.pickupLocation.city
  let pickupState = ride.pickupLocation.state
  let pickupZip = ride.pickupLocation.zip
  let isPurple = ride.purpleRequested
  let serviceLevel
  
  // Logic to assign rider status variable based on criteria; Purple Supersedes all; >3 rider upgrades to Noober XL
  if (isPurple == true){
    serviceLevel = `Noober Purple`
  } else if (numberOfPassengers > 3) {
    serviceLevel = `Noober XL`
  } else {
    serviceLevel = `Noober X`
  }

  // Human readable return consuming variables
 console.log(`${serviceLevel} customer ${passengerFirstName} ${passengerFLastName}`)
 console.log(`Contact number: ${passengerPhoneNumber}`)
 console.log(`Pickup at:`)
 console.log(`  ${pickupAddress}`)
 console.log(`  ${pickupCity},${pickupState} ${pickupZip}`)
 console.log(`Dropoff:`)
 console.log(`  ${dropoffAddress}`)
 console.log(`  ${dropoffCity},${dropoffState} ${dropoffZip}`)
 

  // 🔥 YOUR CODE ENDS HERE 🔥
})
