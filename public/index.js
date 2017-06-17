// Object Highlight animation
AFRAME.registerComponent('spotlight', {

  init: function () {
    var $this = this.el
    var $thisParent = this.el.parentNode

    const $light = document.createElement('a-entity')
    var $popupTitle = document.createElement('a-entity')
    var $popupImg = document.createElement('a-entity')
    var $popupText = document.createElement('a-entity')
    var $popupVid = document.createElement('a-entity')

    const $effects = document.createElement('a-entity')
    $effects.classList.add('effects')

    $light.setAttribute('mixin', 'hover-light')
    $popupTitle.setAttribute('mixin', 'popup-title')
    $popupImg.setAttribute('mixin', 'popup-img')
    $popupText.setAttribute('mixin', 'popup-text')
    $popupVid.setAttribute('mixin', 'popup-video')

    $effects.appendChild($light)
    $effects.appendChild($popupTitle)
    $effects.appendChild($popupImg)
    $effects.appendChild($popupText)
    $effects.appendChild($popupVid)

    this.el.addEventListener('mouseenter', function () {
      $current = document.querySelector('.highlighted') // $current === class="hilighted"

<<<<<<< HEAD:public/index.js
      if ( $current ) {
        const $currentEffects = document.querySelector('.effects')
        const $effectsParent = $currentEffects.parentNode
        $currentEffects.emit('rise')
        $effectsParent.removeChild($currentEffects)
=======
      if ( $current ) { // if hilighted look for class effects and remove class effects from parent node
        const $currentEffects = document.querySelector('.effects') //look for class effects
        const $effectsParent = $currentEffects.parentNode // class: effects parent node
        $effectsParent.removeChild($currentEffects) // remove all effects
>>>>>>> refs/remotes/origin/master:client/index.js
      }

      $thisParent.classList.add('highlighted')
      $thisParent.appendChild($effects)
    })
  }
})

<<<<<<< HEAD:client/index.js
// Replicant Percentile
function replicantEval($replicant) {
  const $resultText = document.querySelector('#result-text')

  $resultText.setAttribute('text', 'color: white; width: auto; align: center; anchor: center; opacity: 1; wrapCount: 30; value: You have a ' + $replicant + '% chance of being a Replicant')
}

// VK Quiz Initializer
AFRAME.registerComponent('take-quiz', {
  init: function () {
    var $this = this.el

    this.el.addEventListener('click', function () {
      $this.setAttribute('visible', 'false' )
      question()
    })
  }
})

=======
<<<<<<< HEAD:public/index.js
AFRAME.registerShader('toon-shader', {
  schema: {
    gradientMap: {default: null},

  },
  /**
   * `init` used to initialize material. Called once.
   */
  init: function (data) {
    this.material = new THREE.MeshToonMaterial(data)
    this.update(data)  // `update()` currently not called after `init`. (#1834)
  },
  /**
   * `update` used to update the material. Called on initialization and when data updates.
   */
  update: function (data) {
    this.material.gradientMap = data.gradientMap
  }
});
=======
>>>>>>> 49da75844d6149005aca1b99e6e7529f6a6eeb79:public/index.js
// VK Quiz Answer Selector
AFRAME.registerComponent('choose', {
  init: function () {
    var $this = this.el

    this.el.addEventListener('click', function () {
      $selected = document.querySelector('.selected')

      if ( $selected ) {
        const $current = document.querySelector('.selected')
        const $vkValue = $current.getAttribute('vkValue')
        console.log('You selected '+ $this.id + ' with a VK value of '+ $vkValue)

        $current.removeAttribute('mixin')
        $current.setAttribute('mixin', 'vk-choices-geo vk-choices-mat')
        $current.classList.remove('selected')
      }

      $this.classList.add('selected')
      $this.setAttribute('mixin', 'vk-choices-geo vk-choices-selected')
    })
  }
})
<<<<<<< HEAD:client/index.js

// VK Quiz Next Button & Results
AFRAME.registerComponent('next', {
  init: function () {
    var $this = this.el

    this.el.addEventListener('click', function () {
      const $next = document.querySelector('#next-question')
      const $selected = document.querySelector('.selected')
      const $quizContainer = document.querySelector('#quiz-container')

      const $quizResult = document.querySelector('#quiz-result')
      const $resultText = document.querySelector('result-text')
      var $questionNum = quiz.currentQuestion

      if ( $questionNum == 9 ) {
        var $replicant = quiz.currentReplicantVal
        $quizContainer.setAttribute('visible', 'false')

        replicantEval($replicant)
        $quizResult.setAttribute('visible', 'true')
      }

      else if ( $next ) { // change to else if
        const $current = document.querySelector('.selected')
        const vkValue = $current.getAttribute('vkValue')
        var $vkValue = parseFloat(vkValue)

        quiz.currentReplicantVal = (quiz.currentReplicantVal + $vkValue)

        console.log('The last question was Question #' + quiz.currentQuestion)
        console.log('The VK value of selected question was ' + $vkValue)
        console.log('The new VK value is ' + quiz.currentReplicantVal)
        quiz.currentQuestion ++

        $quizContainer.innerHTML = ''
      }

      question()
    })
  }
})

// Quiz Results

// listen for last question
  // use add class="completed" after last question
  // use event listener/if statement to check for class="completed"
    // if currentQuestion === 9
// after last question
  // set quiz entity visible="false"
  // set result entity visible="true"
  // dynamically display score
    // create function to determine percentage and likelyhood of being replicant
=======
>>>>>>> refs/remotes/origin/master:client/index.js
>>>>>>> 49da75844d6149005aca1b99e6e7529f6a6eeb79:public/index.js
