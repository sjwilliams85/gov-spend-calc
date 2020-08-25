function getSpend() {

  // Calculate spend value
  var spendValue = document.getElementById("spend").value;
  if (document.getElementById("million").checked) {
    spendValue = spendValue * 1000000;
  } else if (document.getElementById("billion").checked) {
    spendValue = spendValue * 1000000000;
  } else if (document.getElementById("trillion").checked) {
    spendValue = spendValue * 1000000000000;
  } else {
    spendValue = spendValue;
  }

  // statement of spend value pays for
  var finalSpend = numberWithCommas(spendValue);
  document.getElementById("spendStatement").innerHTML = "£" + finalSpend + " pays for...";
  document.querySelector(".ribbon").classList.remove("hidden");

  // alernative spend object creator
  function AlternativeSpend(id, value) {
    this.id = id;
    this.value = value;
  }

  // list of alternative
  var nurse = new AlternativeSpend("nursesSalary", 24214);
  var mri = new AlternativeSpend("mriScanners", 895000);
  var hipOperations = new AlternativeSpend("hipOps", 5500);
  var averageHealthCosts = new AlternativeSpend("avHealthCost",2989);
  var teacher = new AlternativeSpend("teachersSalary",24373);
  var laptops= new AlternativeSpend("laptops",504);
  var universityFees = new AlternativeSpend("uniFees", 9250);
  var schoolSpace = new AlternativeSpend("schoolBuildings", 1828);
  var loftInsulation = new AlternativeSpend("loft", 300);
  var bicycles = new AlternativeSpend("bicycles",800);
  var windTurbines = new AlternativeSpend("windTurbines",2330000);
  var solarPannels = new AlternativeSpend("solarPannels",6200);
  var police = new AlternativeSpend("policeSalary", 20880);
  var drugRehab = new AlternativeSpend("drugRehab", 5000);
  var prisonRehab = new AlternativeSpend("prisoners", 98000);
  var victimSupport = new AlternativeSpend("victimSalary", 21498);


  // list in array
  var alernatives = [
    nurse, mri, hipOperations, averageHealthCosts, teacher, laptops, universityFees, schoolSpace, loftInsulation, bicycles, windTurbines, solarPannels,
    police,drugRehab,prisonRehab,victimSupport
  ]

  // loop to calculate all alernatives
  for (var i = 0; i < alernatives.length; i++) {
    var calculation = spendValue / alernatives[i].value;
    calculation = roundCalc(calculation);
    finalCal = numberWithCommas(calculation)
    document.getElementById(alernatives[i].id).innerHTML = finalCal;
  }
  // round to decimals
  function roundCalc(x) {
    if (x <= 1) {
      return x.toFixed(2);
    } else {
      return Math.floor(x);
    }
  }
  // number with commas
  function numberWithCommas(y) {
        return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

}
