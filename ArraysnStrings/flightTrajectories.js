/**
 * origins and destination pairs
 * 
 * single continuous route
 * 
Input
[
    ["DFW", "SJC"],
    ["SFO", "EWR"],
    ["SJC", "LAX"],
    ["EWR", "OAK"],
    ["LAX", "SFO"]
]
[]

DFW -> SJC -> LAX ->   SFO -> EWR -> OAK -> 
Output
["DFW", "SJC", "LAX", "SFO", "EWR", "OAK"]

start to end
{
    'SFO': 'EWR',
    'SJC': 'LAX',
    'DFW': "SJC",
    'EWR': 'OAK',
    'LAX'; "SFO"
}

reverse flights
{
    'EWR': 'SFO',
    'LAX': 'SJC',
    "SJC": 'DFW',
    'OAK': 'EWR',
    "SFO": 'LAX'
}

[['a', 'b'], ['a', 'c']]
[[]]

 */

function getFlightTrajectory(flights) {
    if (!flights.length) return []
    let { originToDestination, destinationToOrigin } = buildFlightMaps(flights)

    let flight = flights[0]
    let secondHalfOfFlightArray = buildArrFlights(flight, originToDestination)
    let firstHalfOfFlightArray = buildArrFlights(flight, destinationToOrigin).reverse()
    firstHalfOfFlightArray.pop()
    return firstHalfOfFlightArray.concat(secondHalfOfFlightArray)
}

function buildFlightMaps(flights) {
    let originToDestination = {}
    let destinationToOrigin = {}
    for (let i = 0; i < flights.length; i++) {
        let currentFlight = flights[i]
        let start = currentFlight[0]
        let destination = currentFlight[1]
        originToDestination[start] = destination
        destinationToOrigin[destination] = start
    }
    return { originToDestination, destinationToOrigin }
}

function buildArrFlights(flight, flightMap) {
    console.log('FLIGHTMAP', flightMap)
    let currentFlight = flight[0]
    let flightArray = []
    while (currentFlight) {
        flightArray.push(currentFlight)
        if (flightMap[currentFlight]) currentFlight = flightMap[currentFlight]
        else currentFlight = null
    }
    return flightArray
}

console.log(getFlightTrajectory([
    ["DFW", "SJC"],
    ["SFO", "EWR"],
    ["SJC", "LAX"],
    ["EWR", "OAK"],
    ["LAX", "SFO"]
]))