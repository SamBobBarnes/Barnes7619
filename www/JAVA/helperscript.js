function age(bday, bmonth, byear){
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  //console.log(month + ":" + day + ":" + year);
  var age = year - byear;
  if (month < (bmonth-1)) {
    //console.log("month");
    //console.log(month);
    age -= 1;
  } else if (month == (bmonth-1)) {
    if (day < bday){
      //console.log("day true");
      age -=1;
    }
  }
  return age;
}
