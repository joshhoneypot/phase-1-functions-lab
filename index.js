// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42)
  }

function distanceFromHqInFeet(location) {
    return Math.abs(location - 42)* 264;// 1 block is equivalent to 264 feet
  }

function distanceTravelledInFeet(start, destination) { 
    const distanceInBlocks = Math.abs(destination - start);
    return distanceInBlocks * 264;
  }
  

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let farePrice;
    
    if (distance <= 400) {
      farePrice = 0;
    } else if (distance > 400 && distance <= 2000) {
      farePrice = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      farePrice = 25;
    } else {
      farePrice = 'cannot travel that far';
    }
    
        return farePrice;

  }


