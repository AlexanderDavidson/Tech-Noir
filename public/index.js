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
>>>>>>> refs/remotes/origin/master:client/index.js