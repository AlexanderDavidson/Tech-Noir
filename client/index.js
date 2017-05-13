// Object Brief Summaries

var objects = [
  {
    name: 'Akira',
    id: akira,
    video: ,
    summary: 'Set in a dystopian, cyberpunk-based Tokyo in 2019, Akira tells the story of Shotaro Kaneda, a leader of a local biker gang who must stop his friend Tetsuo Shima from using his newly awakened superpowers to release the titular esper.',
  },
  {
    name: 'District 9',
    id: d9,
    video: ,
    summary: 'The film is mostly presented in a found footage format by featuring fictional interviews, news footage, and video from surveillance cameras. The story, which explores themes of humanity, xenophobia, and social segregation, begins in an alternate 1982, when an alien ship appears over Johannesburg, South Africa. When a population of sick and malnourished insectlike aliens is found aboard the ship, the South African government confines them to an internment camp called District 9. Years later, during the government\'s relocation of the aliens to another camp, one of the confined aliens named Christopher Johnson tries to escape with his son and return home, crossing paths with a bureaucrat named Wikus van der Merwe. The title and premise of District 9 were inspired by events in District Six, Cape Town, during the apartheid era.',
  },
  {
    name: 'Minority Report',
    id: minRep,
    video: ,
    summary: 'Minority Report is a 2002 American science fiction film directed by Steven Spielberg and loosely based on the short story of the same name by Philip K. Dick. It is set primarily in Washington, D.C., and Northern Virginia in the year 2054, where "PreCrime", a specialized police department, apprehends criminals based on foreknowledge provided by three psychics called "precogs". The film combines elements of tech noir, whodunit, thriller and science fiction genres, as well as a traditional chase film, as the main protagonist is accused of a crime he has not committed and becomes a fugitive. Spielberg has characterized the story as fifty percent character and fifty percent very complicated storytelling with layers and layers of murder mystery and plot.',
  },
  {
    name: '12 Monkeys',
    id: twelveMonkeys,
    video: ,
    summary: '12 Monkeys, also known as Twelve Monkeys, is a 1995 American neo-noir science fiction film directed by Terry Gilliam.',
  },
  {
    name: 'Metropolis',
    id: metropolis,
    video: ,
    summary: 'Metropolis is a 1927 German expressionist epic science-fiction drama film directed by Fritz Lang. Made in Germany during the Weimar Period, Metropolis is set in a futuristic urban dystopia and follows the attempts of Freder, the wealthy son of the city's ruler, and Maria, a poor worker, to overcome the vast gulf separating the classes of their city. Filming took place in 1925 at a cost of approximately five million Reichsmarks. The art direction draws influence from Bauhaus, Cubist and Futurist design.',
  },
  {
    name: ,
    id: ,
    video: ,
    summary: ,
  },
  {
    name: ,
    id: ,
    video: ,
    summary: ,
  },
  {
    name: ,
    id: ,
    video: ,
    summary: ,
  }
]

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
