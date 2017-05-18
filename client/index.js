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
      $current = document.querySelector('.highlighted')

      if ( $current ) {
        const $currentEffects = document.querySelector('.effects')
        const $effectsParent = $currentEffects.parentNode
        $effectsParent.removeChild($currentEffects)
      }

      $thisParent.classList.add('highlighted')
      $thisParent.appendChild($effects)
    })
  }
})

AFRAME.registerComponent('choose', {
  init: function () {
    this.el.addEventListener('mouseenter', function (event) {
      console.log(event);
    })
  }
})
