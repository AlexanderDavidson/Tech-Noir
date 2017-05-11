require('aframe')

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


// Akira Test

$akira
  .on("click", function(d,i) {
      console.log("click", i,d)
    })
  .on("mouseenter", function(d,i) {
    // this event gets fired continuously as long as the cursor
    // is over the element. we only want trigger our animation the first time
    if(this.hovering) return;
    console.log("hover", i,d)
    this.hovering = true;
    d3.select("akira-light").transition().duration(1000)
    .attr({
      visible: true
    })
  })
  .on("mouseleave", function(d,i) {
    console.log("leave",i,d)
    this.hovering = false;
    d3.select("akira-light").transition()
    .attr({
      visible: false
    })
  })

document.querySelector('#akira').emit('animationstart')
