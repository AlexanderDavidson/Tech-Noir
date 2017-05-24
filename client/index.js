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

      if ( $current ) { // if hilighted look for class effects and remove class effects from parent node
        const $currentEffects = document.querySelector('.effects') //look for class effects
        const $effectsParent = $currentEffects.parentNode // class: effects parent node
        $effectsParent.removeChild($currentEffects) // remove all effects
      }

      $thisParent.classList.add('highlighted')
      $thisParent.appendChild($effects)
    })
  }
})

// VK Quiz Answer Selector
AFRAME.registerComponent('choose', {
  init: function () {
    var $this = this.el

    this.el.addEventListener('click', function () {
      $selected = document.querySelector('.selected')

      if ( $selected ) {
        console.log('why did this work')
        const $current = document.querySelector('.selected')
        $current.removeAttribute('mixin')
        $current.setAttribute('mixin', 'vk-choices-geo vk-choices-mat')
        $current.classList.remove('selected')
      }

      $this.classList.add('selected')
      $this.setAttribute('mixin', 'vk-choices-geo vk-choices-selected')
    })
  }
})

// VK Quiz Next Button
AFRAME.registerComponent('next', {
  init: function () {
    var $this = this.el

    this.el.addEventListener('click', function () {
      $next = document.querySelector('#next-question')
      $selected = document.querySelector('.selected')

      if ( $next ) {
        const $current = document.querySelector('.selected')
        const vkValue = $current.getAttribute('vkValue')
        var $vkValue = vkValue.valueOf()

        replicantVal += $vkValue
        console.log(quiz.currentQuestion)
        console.log('The VK value of selected question is ' + $vkValue)
        console.log('New VK value is ' + quiz.currentReplicantVal)
        quiz.currentQuestion += 1

        // function updateVKval () {
        //   var
        // }
      }

      question()
    })
  }
})
