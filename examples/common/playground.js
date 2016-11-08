'use strict'

window.require.config({paths: {
  'vs': '../common/vs',
  'beautify': 'https://unpkg.com/js-beautify@1.6.4/js/lib/beautify',
  'babel': 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.1/babel.min'
}})

require([ 'vs/editor/editor.main', 'beautify', 'babel'], function (editor, beautify, babel) {
  var node = document.querySelector('script[type="text/playground"]')
  if (!node) return

  var script = document.querySelector('script[type="text/playground"]').innerHTML
  // var es5code = babel.transform(script, { presets: ['es2015'] }).code
  var container = document.createElement('div')
  container.style.height = '100%'
  document.body.appendChild(container)

  window.editor = window.monaco.editor.create(container, {
    value: beautify.js_beautify(script, {indent_size: 2}),
    lineNumbers: false,
    fontSize: 11,
    wrappingIndent: 'none',
    language: 'javascript'
  })

  // editor.addCommand(window.monaco.KeyCode.Tab, function () {

  // })
  window.editor.onKeyUp(function () {
    try {
      eval(window.editor.getValue())
    } catch (e) {
      console.error(e)
    }
  })

  eval(script)
})
