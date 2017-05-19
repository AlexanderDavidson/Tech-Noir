// Scene Selector
var scene = d3.select("a-scene")

//  Object Selectors
var $akira = d3.select("akira")
var $akiraLight = d3.select("akira-light")

var $district9 = d3.select("district-9")

var $minorityReport = d3.select("minority-report")

var $twelveMonkeys = d3.select("twelve-monkeys")

var $metropolis = d3.select("metropolis")

var $designBlimp = d3.select("design-blimp")

var $techVK = d3.select("tech-vk")

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

// -------------------------------------------------------------------
AFRAME.registerComponent('choose', {
  init: function () {
    var $this = this.el

    this.el.addEventListener('click', function () {
      $selected = document.querySelector('.selected') // $current === class="hilighted"

      if ( $selected ) {
        console.log('why did this work')
        const $current = document.querySelector('.selected')
        $current.removeAttribute('mixin')
        $current.setAttribute('mixin', 'vk-choices-geo vk-choices-mat')
        $current.classList.remove('selected') // look for mixin vk-choices-mat
      }

      $this.classList.add('selected')
      $this.setAttribute('mixin', 'vk-choices-geo vk-choices-selected')
    })
  }
})
// ----------------------------------------------------------------------

// AFRAME.registerComponent('choose', {
//
//   init: function () {
//     var $this =this.el
//     this.el.addEventListener('click', function () {
//       $chosen = document.querySelector('.chosen')
//
//       if ( $chosen ) { // if chosen look for other answers with class chosen and remove it
//         console.log('hey there')
//         const $selectedAnswer = document.querySelectorAll('.selectedAnswer')
//         $selectedAnswer.removeAttribute('mixin')
//         $selectedAnswer.classList.remove('selectedAnswer')
//
//       }
//
//       $this.classList.add('selectedAnswer')
//       $this.setAttribute('mixin', 'vk-choices-geo vk-choices-selected')
//     })
//   }
// })

// AFRAME.registerComponent('choose', {
//   init: function () {
//     this.el.addEventListener('click', function (event) {
//       console.log(event);
//     })
//   }
// })
