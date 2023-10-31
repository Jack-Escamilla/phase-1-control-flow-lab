function scuberGreetingForFeet(distance){

  if (distance <= 200){
    return "This one is on me!"
  }

  if (distance >= 400 && distance<= 2000){
    return "That will be twenty bucks."
  }

  if (distance > 2000 && distance < 2500){
    return "I will gladly take your thirty bucks."
  }

  if (distance > 2500)

    return "No can do."


}

function ternaryCheckCity(theCity){
  
  return theCity === "NYC" ? "Ok, sounds good." : "No go.";
  
}

function switchOnCharmFromTip(theTip){
let theTipMessage;
  switch (theTip) {
    case 'generous':
        theTipMessage = 'Thank you so much.';
        break;
    case 'not as generous':
        theTipMessage = 'Thank you.';
        break;
    default:
        theTipMessage = 'Bye.';
        break;
}
return theTipMessage;
}