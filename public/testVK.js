var quiz = {
    currentQuestion: 0,
    currentReplicantVal: 0,
    questions: [
      {
          "text": "It\'s your birthday. Someone gives you a calfskin wallet. How do you react?",
          "choices": [
            "I would appreciate it.",
            "Thank you for the wallet",
            "I wouldnt accept it."
          ],
          "answer": [0, 5, 10]
      }, {
          "text": "You\'ve got a little boy. He shows you his butterfly collection plus the killing jar. What do you do?",
          "choices": [
            "That\'s nice, but why don\'t you keep the killing jar for yourself?",
            "Oh lovely",
            "I take him to the doctor."
          ],
          "answer": [0, 5, 10]
      }, {
          "text": "You\'re watching television. Suddenly you realize there\'s a wasp crawling on your arm.",
          "choices": [
            "I swat it away.",
            "I scream, and grab the closest thing near me and beat the hell out of it.",
            "I kill it."
          ],
          "answer": [0, 5, 10]
      }, {
          "text": "You\'re reading a magazine. You come across a full-page nude photo of a girl/guy. You show it to your husband/wife. He/She likes it so much, he/she hangs it on your bedroom wall. The girl/guy is lying on a bearskin rug.",
          "choices": [
            "I would take it down.",
            "Who?",
            "I wouldn\'t let him/her."
          ],
          "answer": [0, 5, 10]
      }, {
          "text": "You\'re in a desert walking along in the sand when all of the sudden you look down, and you see a tortoise, its crawling toward you. You reach down, you flip the tortoise over on it\'s back. The tortoise lays on it\'s back, it\'s belly baking in the hot sun, beating it\'s legs trying to turn it\'self over, but it can\'t, not without your help. But youre not helping. Why is that?",
          "choices": [
            "What is a tortoise?",
            "I don\'t know why I would flip a turtle in the first place.",
            "What do you mean, I\'m not helping?"
          ],
          "answer": [0, 5, 10]
      },
      {
          "text": "Describe in single words, only the good things that come into your mind about your mother",
          "choices": [
            "Warm voice, cookies.",
            "Music. Love. Summer. Sun. Books. Movies. Friends. Laughter.",
            "My mother... I\'ll tell you about my mother."
          ],
          "answer": [0, 5, 10]
      },
      {
          "text": "You see a friend who has suffered bereavement. Afterwards you feel...",
          "choices": [
            "Saddened",
            "Powerless to help",
            "Annoyed at their lack of engagement"
          ],
          "answer": [0, 5, 10]
      },
      {
          "text": "You\'re watching a stage play - a banquet is in progress. The guests are enjoying an appetizer of raw oysters. The entree consists of boiled dog stuffed with rice. The raw oysters are less acceptable to you than a dish of boiled dog.",
          "choices": [
            "I wouldn\'t eat boiled dog!",
            "Not true",
            "Disgusting!"
          ],
          "answer": [0, 5, 10]
      },
      {
          "text": "You pass a homeless person. Cold night. Big city. You fumble for change, but a $10 bill drops into their lap. You...",
          "choices": [
           "Leave it",
           "Say it was deliberate",
           "Swap it for small change"
          ],
          "answer": [0, 5, 10]
      },
      {
          "text": "A friend offers you tequila. In the glass lies a worm. Time to...",
          "choices": [
            "Drink it and enjoy the ritual",
            "Refuse it, politely",
            "Pick it out"
          ],
          "answer": [0, 5, 10]
      }
    ]
}

var replicantVal = quiz.currentReplicantVal

// Question
function question() {
  const question = quiz.questions[quiz.currentQuestion]  // Current Quiz Question
  const $scene = document.querySelector('a-scene')
  const $quizContainer = document.querySelector('#quiz-container')
  const $text = document.createElement('a-entity')

  $text.id = "questionContainer"
  $text.setAttribute('mixin', 'vk-questions')
  $text.setAttribute('text', 'color: white; width: auto; align: center; anchor: center; opacity: 1; wrapCount: 30; value: ' + question.text)

  $quizContainer.appendChild($text)

  // Answer Choices
  question.choices.forEach( function(choice, index) {
    const $choice = document.createElement('a-entity')

    $choice.setAttribute('id', 'answer' + index)
    $choice.setAttribute('choose', '')
    $choice.setAttribute('mixin', 'vk-choices-geo vk-choices-mat')
    $choice.setAttribute('text', 'anchor: center; align: center; color: white; width: 5; wrapCount: 50; opacity: 1; value: ' + choice)
    $choice.setAttribute('position', '0.17 ' + (-0.5 + index * 0.3) + ' 0')
    $choice.setAttribute('choose', '')
    $choice.setAttribute('vkValue', question.answer[index])

    $quizContainer.appendChild($choice)
  })
}

// put html objects to anchor text to
// be able to select answer
// log value of answer
// have some way to submit once selected
// add +1 to current question to move to next question
