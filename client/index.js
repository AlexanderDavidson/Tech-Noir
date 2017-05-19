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
        console.log('you selected an answer')
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

// VK Quiz Next Question/Submit Button

AFRAME.registerComponent('next', {

  init: function () {
    var $this = this.el

    this.el.addEventListener('click', function () {
      console.log('you clicked next')
    })
  }
})

// create nev value in test array
// update current question and replicant probablility value on clicking next
// flush new value to DOM
