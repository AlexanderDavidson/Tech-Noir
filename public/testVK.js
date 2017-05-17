// The "Voight-Kampff" test is designed to distinguish androids from humans. Would you like to give it a try?
//
// All the questions are reported from the famous book "Do Androids Dream of Electric Sheep?" and the movie "Blade Runner".
//
// Please don\'t take this test too seriously. I am just providing an example of how difficult (and maybe impossible) it is to define a human.


// start at 50%
// higher percentage means more likely to be replicant

// To use redux
// https://github.com/ngokevin/kframe/tree/master/components/redux/

// To use react
// https://github.com/aframevr/aframe-react


var questions = [
  {
    questionNum: 1,
    question: 'Its your birthday. Someone gives you a calfskin wallet. How do you react?',

    answer1: 'I would appreciate it.',
    answer1value: 0,

    answer2: 'Thank you for the wallet.',
    answer2value: 5,

    answer3: 'I wouldnt accept it.',
    answer3value: 10,
  },
  {
    questionNum: 2,
    question: 'You\'ve got a little boy. He shows you his butterfly collection plus the killing jar. What do you do?',

    answer1: 'That\'s nice, but why don\'t you keep the killing jar for yourself?',
    answer1value: 0,

    answer2: 'Oh lovely.',
    answer2value: 5,

    answer3: 'I take him to the doctor.',
    answer3value: 10,
  },
  {
    questionNum: 3,
    question: 'You\'re watching television. Suddenly you realize theres a wasp crawling on your arm.',

    answer1: 'I swat it away.',
    answer1value: 0,

    answer2: 'I scream, and grab the closest thing near me and beat the hell out of it.',
    answer2value: 5,

    answer3: 'I kill it.',
    answer3value: 10,
  },
  {
    questionNum: 4,
    question: 'You\'re reading a magazine. You come across a full-page nude photo of a girl/guy. You show it to your husband/wife. He/She likes it so much, he/she hangs it on your bedroom wall. The girl/guy is lying on a bearskin rug.',

    answer1: 'I would take it down.',
    answer1value: 0,

    answer2: 'Who?',
    answer2value: 5,

    answer3: 'I wouldn\'t let him/her.',
    answer3value: 10,
  },
  {
    questionNum: 5,
    question: 'Youre in a desert walking along in the sand when all of the sudden you look down, and you see a tortoise, its crawling toward you. You reach down, you flip the tortoise over on it\'s back. The tortoise lays on it\'s back, it\'s belly baking in the hot sun, beating it\'s legs trying to turn it\'self over, but it cant, not without your help. But youre not helping. Why is that?',

    answer1: 'What is a tortoise?',
    answer1value: 0,

    answer2: 'I don\'t know why I would flip a turtle in the first place.',
    answer2value: 5,

    answer3: 'What do you mean, I\'m not helping?',
    answer3value: 10,
  },
  {
    questionNum: 6,
    question: 'Describe in single words, only the good things that come into your mind about your mother.',

    answer1: 'Warm voice, cookies.',
    answer1value: 0,

    answer2: 'Music. Love. Summer. Sun. Books. Movies. Friends. Laughter.',
    answer2value: 5,

    answer3: 'My mother... I\'ll tell you about my mother.',
    answer3value: 10,
  },
  {
    questionNum: 7,
    question: 'You see a friend who has suffered bereavement. Afterwards you feel...',

    answer1: 'Saddened',
    answer1value: 0,

    answer2: 'Powerless to help',
    answer2value: 5,

    answer3: 'Annoyed at their lack of engagement',
    answer3value: 10,
  },
  {
    questionNum: 8,
    question: 'You\'re watching a stage play - a banquet is in progress. The guests are enjoying an appetizer of raw oysters. The entree consists of boiled dog stuffed with rice. The raw oysters are less acceptable to you than a dish of boiled dog.',

    answer1: 'I wouldn\'t eat boiled dog!',
    answer1value: 0,

    answer2: 'Not true',
    answer2value: 5,

    answer3: 'Disgusting!',
    answer3value: 10,
  },
  {
    questionNum: 9,
    question: 'You pass a homeless person. Cold night. Big city. You fumble for change, but a $10 bill drops into their lap. You...',

    answer1: 'Leave it',
    answer1value: 0,

    answer2: 'Say it was deliberate',
    answer2value: 5,

    answer3: 'Swap it for small change',
    answer3value: 10,
  },
  {
    questionNum: 10,
    question: 'A friend offers you tequila. In the glass lies a worm. Time to...',

    answer1: 'Drink it and enjoy the ritual',
    answer1value: 0,

    answer2: 'Refuse it, politely',
    answer2value: 5,

    answer3: 'Pick it out',
    answer3value: 10,
  },
]

var questionCounter = 0; //Tracks question number
var selections = []; //Array containing user choices
