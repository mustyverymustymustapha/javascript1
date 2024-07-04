/* -ternary operators- */
// ternary operators let you write a conditional/if statement using "?" and ":". ? is used first and if the condition is true, the code after ? is executed, if its false, the code after : is executed. for example:
let HackClubIsCool = true;
HackClubIsCool ? console.log('Hack Club is cool!') : console.log('Hack Club is not cool );')


/* -else if statements- */
// after an if block, you can add an else if block that checks one new condition each time. you can add an else block after the else if blocks to execute a different piece of code if none of the conditions are true. for example:
let BestHackClubReviewer = 'Devlos'
// (these are some people who have reviewed my projects)
if (BestHackClubReviewer === 'fayd') {
  console.log('Fayd is the best reviewer!');
} else if(BestHackClubReviewer === 'Dillon') {
  console.log('Dillon is the best reviewer!');
} else if(BestHackClubReviewer === 'Phaedra') {
  console.log('Phaedra is the best reviewer!');
} else if(BestHackClubReviewer === 'Devlos') {
  console.log('Devlos is the best reviewer!');
} else {
  console.log('No one is a good reviewer );');
}

// -the switch keyword- //
// the switch keyword checks for multiple conditions like the else if block, but instead of checking for one condition each time, it checks for multiple and is easier to write. for example:
let athleteFinalPosition = 'first place';
let HackClubFounder = 'Zach Latta';
switch (HackClubFounder) {
  case 'John Veryreal':
    console.log('Founder is John Veryreal');
    break;
  case 'Mr. Cats':
    console.log('Founder is Mr. Cats');
    break;
  case 'Zach Latta':
    console.log('Founder is Zach Latta');
    break;
  default:
    console.log('There is no founder ):');

