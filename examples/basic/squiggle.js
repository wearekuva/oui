window.require(['https://npmcdn.com/regl/dist/regl.min.js'], function ( createREGL ) {

  var regl = createREGL()
  var canvas = document.createElement('canvas')
  console.log( regl )

  var Squiggle = function(){

  }

  var p = Squiggle.prototype

  p.draw

  window.Squiggle =  Squiggle

})
