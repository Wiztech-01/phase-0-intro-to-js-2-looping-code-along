function countDown(n) {
    let i = n;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }

  function writeCards(names) {
    let thankYouMessages = [];
    for (let name of names) {
      thankYouMessages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
  }
  
  let names = ["Guadalupe", "Ollie", "Aki"];
  let  thankYouMessages = writeCards(names);
  
  console.log(thankYouMessages);
