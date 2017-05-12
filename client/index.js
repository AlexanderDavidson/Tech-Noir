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
    const $light = document.createElement('a-entity')
    this.el.addEventListener('mouseenter', function () {

      $light.setAttribute('mixin', 'hover-light')
      $this.classList.add('objHilight')
      console.log($light)
      console.log($this)
      $this.appendChild($light)
    })
    this.el.addEventListener('mouseleave', function () {

      $this.classList.remove('objHilight')
      $this.removeChild($light)
    })
  }
})
