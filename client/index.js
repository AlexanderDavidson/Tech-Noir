console.log("hello world!?")

// sScene Selector
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

var $objectSelectable = d3.sele

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


    this.el.addEventListener('mouseenter', function () {

      $light.setAttribute('mixin', 'hover-light')
      $popupTitle.setAttribute('mixin', 'popup-title')
      $popupImg.setAttribute('mixin', 'popup-img')
      $popupText.setAttribute('mixin', 'popup-text')
      $popupVid.setAttribute('mixin', 'popup-video')

      $thisParent.classList.add('objHighlight')
      console.log($light)
      console.log($this)

      $thisParent.appendChild($light)
      $thisParent.appendChild($popupTitle)
      $thisParent.appendChild($popupImg)
      $thisParent.appendChild($popupText)
      $thisParent.appendChild($popupVid)
    })
    this.el.addEventListener('mouseleave', function () {

      $thisParent.classList.remove('objHighlight')
      $thisParent.removeChild($light)
      $thisParent.removeChild($popupTitle)
      $thisParent.removeChild($popupImg)
      $thisParent.removeChild($popupText)
      $thisParent.removeChild($popupVid)
    })
  }
})
