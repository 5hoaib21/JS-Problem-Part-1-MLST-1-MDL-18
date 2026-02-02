function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

const sohailHeight = inchToFeet(75);
console.log(sohailHeight);

function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
const dhakaKilo = mileToKilometer(50000);
console.log(dhakaKilo);

function kiloToMile(kilo) {
  const mile = kilo * 0.621371;
  return mile;
}
const dhakaToCTG = kiloToMile(10000);
console.log(dhakaToCTG);
