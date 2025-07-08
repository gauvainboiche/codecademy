const getRunner = (runners) => {
  let runner = 0;

  while (runner < runners) {
    let raceNumber = Math.floor(Math.random() * 1000);
    let isRegistered = Math.random() < 0.5; // get 50% chance of getting true
    let runnerAge = Math.floor(Math.random() * 45 + 15); // considering a minimum age of 15yo and maximum age of 60yo
    
    if (isRegistered && runnerAge > 18) {
        raceNumber += 1000;
        console.log(`Runner ${raceNumber} are to begin race at 09:30 MT.`);
      } else if (!isRegistered && runnerAge > 18) {
        raceNumber += 1000;
        console.log(`Runner ${raceNumber} are to begin race at 11:00 MT. Please register before 10:00 MT.`);
      } else if (runnerAge < 18) {
        console.log(`Runner ${raceNumber} are to begin race at 12:30 MT. Please register before 11:30 MT.`);
      } else {
        console.log(`Please come to the registration desk for clarification.`);
      }
    runner++;
    }
}

getRunner(10);