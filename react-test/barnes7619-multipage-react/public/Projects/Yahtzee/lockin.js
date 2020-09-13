function lockin(space){
  result = readAllDice();
  //console.log(result);

  switch(space) {
    case "aces": scoreSheet.changeNum(space, findAces(result)); break;
    case "twos": scoreSheet.changeNum(space, findTwos(result)); break;
    case "threes": scoreSheet.changeNum(space, findThrees(result)); break;
    case "fours": scoreSheet.changeNum(space, findFours(result)); break;
    case "fives": scoreSheet.changeNum(space, findFives(result)); break;
    case "sixes": scoreSheet.changeNum(space, findSixes(result)); break;
    case "toak": scoreSheet.changeNum(space, findToak(result)); break;
    case "foak": scoreSheet.changeNum(space, findFoak(result)); break;
    case "fh": scoreSheet.changeNum(space, findFh(result)); break;
    case "smS": scoreSheet.changeNum(space, findSmS(result)); break;
    case "lgS": scoreSheet.changeNum(space, findLgS(result)); break;
    case "yahtzee": scoreSheet.changeNum(space, findYahtzee(result)); break;
    case "chance": scoreSheet.changeNum(space, findChance(result)); break;
    default: break;
  }


}

function findAces(result) {
  var num = 0;
  result.forEach((die, i) => {
    if(die == 1) num += 1;
  });
  return num;
}

function findTwos(result) {
  var num = 0;
  result.forEach((die, i) => {
    if(die == 2) num += 2;
  });
  return num;
}

function findThrees(result) {
  var num = 0;
  result.forEach((die, i) => {
    if(die == 3) num += 3;
  });
  return num;
}

function findFours(result) {
  var num = 0;
  result.forEach((die, i) => {
    if(die == 4) num += 4;
  });
  return num;
}

function findFives(result) {
  var num = 0;
  result.forEach((die, i) => {
    if(die == 5) num += 5;
  });
  return num;
}

function findSixes(result) {
  var num = 0;
  result.forEach((die, i) => {
    if(die == 6) num += 6;
  });
  return num;
}

function findToak(result) {
  var numr = 0;
  var num = [0,0,0,0,0,0];
  result.forEach((die, i) => {
    switch(die) {
      case 1: num[0] += 1; break;
      case 2: num[1] += 1; break;
      case 3: num[2] += 1; break;
      case 4: num[3] += 1; break;
      case 5: num[4] += 1; break;
      case 6: num[5] += 1; break;
    }
  });
  num.forEach((item, i) => {
    if (item >= 3) numr = result[0] + result[1] + result[2] + result[3] + result[4];
  });
  return numr;
}

function findFoak(result) {
  var numr = 0;
  var num = [0,0,0,0,0,0];
  result.forEach((die, i) => {
    switch(die) {
      case 1: num[0] += 1; break;
      case 2: num[1] += 1; break;
      case 3: num[2] += 1; break;
      case 4: num[3] += 1; break;
      case 5: num[4] += 1; break;
      case 6: num[5] += 1; break;
    }
  });
  num.forEach((item, i) => {
    if (item >= 4) numr = result[0] + result[1] + result[2] + result[3] + result[4];
  });
  return numr;
}

function findFh(result) {
  var two = false;
  var three = false;
  var numr = 0;
  var num = [0,0,0,0,0,0];
  result.forEach((die, i) => {
    switch(die) {
      case 1: num[0] += 1; break;
      case 2: num[1] += 1; break;
      case 3: num[2] += 1; break;
      case 4: num[3] += 1; break;
      case 5: num[4] += 1; break;
      case 6: num[5] += 1; break;
    }
  });
  num.forEach((item, i) => {
    if (item = 2) two = true;
    if (iten = 3) three = true;
  });
  if(two && three) numr = 25;
  return numr;
}

function findSmS(result) {
  var numr = 0;
  var num = [false,false,false,false,false,false];
  result.forEach((die, i) => {
    switch(die) {
      case 1: num[0] = true; break;
      case 2: num[1] = true; break;
      case 3: num[2] = true; break;
      case 4: num[3] = true; break;
      case 5: num[4] = true; break;
      case 6: num[5] = true; break;
    }
  });
  if((num[0] && num[1] && num[2] && num[3]) || (num[4] && num[1] && num[2] && num[3]) || (num[4] && num[5] && num[2] && num[3])) numr = 30;
  return numr;
}

function findLgS(result) {
  var numr = 0;
  var num = [false,false,false,false,false,false];
  result.forEach((die, i) => {
    switch(die) {
      case 1: num[0] = true; break;
      case 2: num[1] = true; break;
      case 3: num[2] = true; break;
      case 4: num[3] = true; break;
      case 5: num[4] = true; break;
      case 6: num[5] = true; break;
    }
  });
  if((num[0] && num[1] && num[2] && num[3] && num[4]) || (num[5] && num[1] && num[2] && num[3] && num[4])) numr = 40;
  return numr;
}

function findYahtzee(result) {
  var numr = 0;
  var num = [0,0,0,0,0,0];
  result.forEach((die, i) => {
    switch(die) {
      case 1: num[0] += 1; break;
      case 2: num[1] += 1; break;
      case 3: num[2] += 1; break;
      case 4: num[3] += 1; break;
      case 5: num[4] += 1; break;
      case 6: num[5] += 1; break;
    }
  });
  num.forEach((item, i) => {
    if (item == 5) numr = 50;
  });
  return numr;
}

function findChance(result) {
  var numr = result[0] + result[1] + result[2] + result[3] + result[4];
  return numr;
}
