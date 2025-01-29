const readline = require('readline');
const process = require('process');

// Data objects
const numWords = {
  1: 'Toe',
  2: 'kNee',
  3: 'Ma',
  4: 'whoRe',
  5: 'Law',
  6: 'Jew',
  7: 'eGG',
  8: 'eVe',
  9: 'Pee',
  10: 'TeaSe',
  11: 'TiT',
  12: 'TiN',
  13: 'ToMb',
  14: 'TiRe',
  15: 'ToweL',
  16: 'TouCH',
  17: 'TaCK',
  18: 'TaFFy',
  19: 'TiP',
  20: 'NoSe',
  21: 'NuDe',
  22: 'NuN',
  23: 'gNoMe',
  24: 'NeRo',
  25: 'NaiL',
  26: 'NiCHe',
  27: 'NeCK',
  28: 'kNiFe',
  29: 'kNoB',
  30: 'MouSe',
  31: 'MaiD',
  32: 'MooN',
  33: 'MuMMy',
  34: 'MooR',
  35: 'MuLe',
  36: 'MaTCH',
  37: 'MuG',
  38: 'MoVie',
  39: 'MoP',
  40: 'RoSe',
  41: 'RoD',
  42: 'RaiN',
  43: 'RaM',
  44: 'ReaR',
  45: 'RoLL',
  46: 'RoaCH',
  47: 'RuG',
  48: 'RooF',
  49: 'RoPe',
  50: 'LaSSo',
  51: 'LuTe',
  52: 'LioN'
}

const cardWords = {
  'AC': 'CaT',
  '2C': 'CaNe',
  '3C': 'CoMe',
  '4C': 'CaR',
  '5C': 'CoaL',
  '6C': 'CaGe',
  '7C': 'CoCK',
  '8C': 'CoFFee',
  '9C': 'CoP',
  '10C': 'CaSe',
  'JC': 'Club',
  'QC': 'Cream',
  'KC': 'King',
  'AH': 'HaT',
  '2H': 'HoNe',
  '3H': 'HaM',
  '4H': 'HaRe',
  '5H': 'HeeL',
  '6H': 'HaSH',
  '7H': 'HoG',
  '8H': 'HiVe',
  '9H': 'HiPPo',
  '10H': 'HoSe',
  'JH': 'Heart',
  'QH': 'Queen',
  'KH': 'Hinge',
  'AS': 'SeaT',
  '2S': 'SwaN',
  '3S': 'SwiM',
  '4S': 'SoRe',
  '5S': 'SeaL',
  '6S': 'SaSH',
  '7S': 'SuCK',
  '8S': 'SaFe',
  '9S': 'SoaP',
  '10S': 'SeeSaw',
  'JS': 'Spade',
  'QS': 'Steam',
  'KS': 'Sing',
  'AD': 'DaTe',
  '2D': 'DiNe',
  '3D': 'DiMe',
  '4D': 'DeeR',
  '5D': 'DoLL',
  '6D': 'DouCHe',
  '7D': 'DuCK',
  '8D': 'DeaF',
  '9D': 'DoPe',
  '10D': 'DaiSy',
  'JD': 'Diamond',
  'QD': 'Dream',
  'KD': 'Drink'
}

const fullDeckWords = {
  "1-JS": "toe-spade",
  "2-KC": "knee-king",
  "3-5C": "ma-coal",
  "4-2H": "whore-hone",
  "5-9S": "law-soap",
  "6-AS": "jew-seat",
  "7-3H": "egg-ham",
  "8-6C": "eve-cage",
  "9-8D": "pee-deaf",
  "10-AC": "tease-cat",
  "11-10S": "tit-seesaw",
  "12-5H": "tin-heel",
  "13-2D": "tomb-dine",
  "14-KD": "tire-drink",
  "15-7D": "towel-duck",
  "16-8C": "touch-coffee",
  "17-3S": "tack-swim",
  "18-AD": "taffy-date",
  "19-7S": "tip-suck",
  "20-5S": "nose-seal",
  "21-QD": "nude-dream",
  "22-AH": "nun-hat",
  "23-8S": "gnome-safe",
  "24-3D": "nero-dime",
  "25-7H": "nail-hog",
  "26-QH": "niche-queen",
  "27-5D": "neck-doll",
  "28-7C": "knife-cock",
  "29-4H": "knob-hare",
  "30-KH": "mouse-hinge",
  "31-4D": "maid-deer",
  "32-10D": "moon-daisy",
  "33-JC": "mummy-club",
  "34-JH": "moor-heart",
  "35-10C": "mule-case",
  "36-JD": "match-diamond",
  "37-4S": "mug-sore",
  "38-10H": "movie-hose",
  "39-6H": "mop-hash",
  "40-3C": "rose-come",
  "41-2S": "rod-swan",
  "42-9H": "rain-hippo",
  "43-KS": "ram-sing",
  "44-6S": "rear-sash",
  "45-4C": "roll-car",
  "46-8H": "roach-hive",
  "47-9C": "rug-cop",
  "48-QS": "roof-steam",
  "49-6D": "rope-douche",
  "50-QC": "lasso-cream",
  "51-2C": "lute-cane",
  "52-9D": "lion-dope"
}

const aronsonDeck = {
  1: 'JS',
  2: 'KC',
  3: '5C',
  4: '2H',
  5: '9S',
  6: 'AS',
  7: '3H',
  8: '6C',
  9: '8D',
  10: 'AC',
  11: '10S',
  12: '5H',
  13: '2D',
  14: 'KD',
  15: '7D',
  16: '8C',
  17: '3S',
  18: 'AD',
  19: '7S',
  20: '5S',
  21: 'QD',
  22: 'AH',
  23: '8S',
  24: '3D',
  25: '7H',
  26: 'QH',
  27: '5D',
  28: '7C',
  29: '4H',
  30: 'KH',
  31: '4D',
  32: '10D',
  33: 'JC',
  34: 'JH',
  35: '10C',
  36: 'JD',
  37: '4S',
  38: '10H',
  39: '6H',
  40: '3C',
  41: '2S',
  42: '9H',
  43: 'KS',
  44: '6S',
  45: '4C',
  46: '8H',
  47: '9C',
  48: 'QS',
  49: '6D',
  50: 'QC',
  51: '2C',
  52: '9D'
};

// Test methods
function promptUserForCard(lower = false) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const keys = Object.keys(cardWords);
  let shuffledKeys = keys.sort(() => Math.random() - 0.5);
  let currentIndex = 0;
  let correctAnswers = 0;
  let totalQuestions = shuffledKeys.length;
  let failures = [];
  const startTime = Date.now();

  function askQuestion() {
    if (currentIndex < shuffledKeys.length) {
      const randomKey = shuffledKeys[currentIndex];
      let randomWord = cardWords[randomKey];

      if (lower) {
        randomWord = randomWord.toLowerCase();
      }

      rl.question(`Which card does the word "${randomWord}" belong to? `, (answer) => {
        if (answer.toUpperCase() === randomKey) {
          console.log('Success! You got it right.');
          correctAnswers++;
        } else {
          console.log(`Fail! The correct answer was ${randomKey}.`);
          failures.push({ word: randomWord, correctAnswer: randomKey, userAnswer: answer });
        }
        currentIndex++;
        askQuestion();
      });
    } else {
      const endTime = Date.now();
      const timeTakenFormatted = convertToTime(endTime - startTime);
      console.log('----------------------------------------');
      console.log('You have gone through all the cards.');
      const successPercentage = (correctAnswers / totalQuestions) * 100;
      console.log(`Time taken: ${timeTakenFormatted}`);
      console.log(`Success percentage: ${successPercentage.toFixed(2)}%`);
      if (failures.length > 0) {
        console.log('Failures:');
        failures.forEach(failure => {
          console.log(`Word: ${failure.word}, Correct Answer: ${failure.correctAnswer}, Your Answer: ${failure.userAnswer}`);
        });
      }
      console.log('----------------------------------------');
      rl.close();
    }
  }

  askQuestion();
}

function promptUserForNumber(lower = false) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const keys = Object.keys(numWords);
  let shuffledKeys = keys.sort(() => Math.random() - 0.5);
  let currentIndex = 0;
  let correctAnswers = 0;
  let totalQuestions = shuffledKeys.length;
  let failures = [];
  const startTime = Date.now();

  function askQuestion() {
    if (currentIndex < shuffledKeys.length) {
      const randomKey = shuffledKeys[currentIndex];
      let randomWord = numWords[randomKey];

      if (lower) {
        randomWord = randomWord.toLowerCase();
      }

      rl.question(`Which number does the word "${randomWord}" belong to? `, (answer) => {
        if (answer === randomKey) {
          console.log('Success! You got it right.');
          correctAnswers++;
        } else {
          console.log(`Fail! The correct answer was ${randomKey}.`);
          failures.push({ word: randomWord, correctAnswer: randomKey, userAnswer: answer });
        }
        currentIndex++;
        askQuestion();
      });
    } else {
      const endTime = Date.now();
      const timeTakenFormatted = convertToTime(endTime - startTime);
      console.log('----------------------------------------');
      console.log('You have gone through all the numbers.');
      const successPercentage = (correctAnswers / totalQuestions) * 100;
      console.log(`Time taken: ${timeTakenFormatted}`);
      console.log(`Success percentage: ${successPercentage.toFixed(2)}%`);
      if (failures.length > 0) {
        console.log('Failures:');
        failures.forEach(failure => {
          console.log(`Word: ${failure.word}, Correct Answer: ${failure.correctAnswer}, Your Answer: ${failure.userAnswer}`);
        });
      }
      console.log('----------------------------------------');
      rl.close();
    }
  }

  askQuestion();
}

function promptUserForFullDeckWords(random = false) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const keys = Object.keys(fullDeckWords);
  let shuffledKeys = keys;
  if (random) {
    shuffledKeys = keys.sort(() => Math.random() - 0.5);
  } 

  let currentIndex = 0;
  let correctAnswers = 0;
  let totalQuestions = shuffledKeys.length;
  let failures = [];
  const startTime = Date.now();

  function askQuestion() {
    if (currentIndex < shuffledKeys.length) {
      const randomKey = shuffledKeys[currentIndex];
      let randomWordPair = fullDeckWords[randomKey];

      rl.question(`Which card and position does the word pair "${randomWordPair}" belong to? `, (answer) => {
        if (answer.toUpperCase() === randomKey) {
          console.log('Success! You got it right.');
          correctAnswers++;
        } else {
          console.log(`Fail! The correct answer was ${randomKey}.`);
          failures.push({ wordPair: randomWordPair, correctAnswer: randomKey, userAnswer: answer });
        }
        currentIndex++;
        askQuestion();
      });
    } else {
      const endTime = Date.now();
      const timeTakenFormatted = convertToTime(endTime - startTime);
      console.log('----------------------------------------');
      console.log('You have gone through all the word pairs.');
      const successPercentage = (correctAnswers / totalQuestions) * 100;
      console.log(`Time taken: ${timeTakenFormatted}`);
      console.log(`Success percentage: ${successPercentage.toFixed(2)}%`);
      if (failures.length > 0) {
        console.log('Failures:');
        failures.forEach(failure => {
          console.log(`Word Pair: ${failure.wordPair}, Correct Answer: ${failure.correctAnswer}, Your Answer: ${failure.userAnswer}`);
        });
      }
      console.log('----------------------------------------');
      rl.close();
    }
  }

  askQuestion();
}

function promptUserForAronsonDeck(askCard = true) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const keys = Object.keys(aronsonDeck);
  let shuffledKeys = keys.sort(() => Math.random() - 0.5);
  let currentIndex = 0;
  let correctAnswers = 0;
  let totalQuestions = shuffledKeys.length;
  let failures = [];
  const startTime = Date.now();

  function askQuestion() {
    if (currentIndex < shuffledKeys.length) {
      const randomKey = shuffledKeys[currentIndex];
      const card = aronsonDeck[randomKey];
      const question = askCard ? `Which card is at position ${randomKey}?` : `At which position is the card ${card}?`;

      rl.question(question + ' ', (answer) => {
        const correctAnswer = askCard ? card : randomKey;
        if (answer.toUpperCase() === correctAnswer) {
          console.log('Success! You got it right.');
          correctAnswers++;
        } else {
          console.log(`Fail! The correct answer was ${correctAnswer}.`);
          failures.push({ question, correctAnswer, userAnswer: answer });
        }
        currentIndex++;
        askQuestion();
      });
    } else {
      const endTime = Date.now();
      const timeTakenFormatted = convertToTime(endTime - startTime);
      console.log('----------------------------------------');
      console.log('You have gone through all the questions.');
      const successPercentage = (correctAnswers / totalQuestions) * 100;
      console.log(`Time taken: ${timeTakenFormatted}`);
      console.log(`Success percentage: ${successPercentage.toFixed(2)}%`);
      if (failures.length > 0) {
        console.log('Failures:');
        failures.forEach(failure => {
          console.log(`Question: ${failure.question}, Correct Answer: ${failure.correctAnswer}, Your Answer: ${failure.userAnswer}`);
        });
      }
      console.log('----------------------------------------');
      rl.close();
    }
  }

  askQuestion();
}

// Print methods
function printFullDeckWordsRandom() {
  const keys = Object.keys(fullDeckWords).sort((a, b) => {
    const [aPos, aCard] = a.split('-');
    const [bPos, bCard] = b.split('-');
    return parseInt(aPos) - parseInt(bPos) || aCard.localeCompare(bCard);
  });

  let shuffledKeys = keys.sort(() => Math.random() - 0.5);

  keys.forEach(key => {
    console.log(`${fullDeckWords[key]}`);
  });
}

// Helper methods
function convertToTime(time) {
  const minutes = String(Math.floor(time / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
  return `${minutes}:${seconds}`;
}


// printFullDeckWordsRandom();

// promptUserForNumber(true);
// promptUserForCard(true);
// promptUserForFullDeckWords(true);
// promptUserForAronsonDeck();