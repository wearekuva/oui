
let element = document.createElement( 'div' )
document.body.appendChild( element )

element.style.position = 'absolute'
element.style.left = '0'
element.style.top = '0'

element.style.width = '100%'
element.style.height = '100%'

// element.style.padding = '0.5em'
// element.style.margin = '0.5em'

element.style.display = 'flex'
element.style.flexDirection = 'column'
element.style.flexWrap = 'wrap'
element.style.alignItems = 'flex-start'
element.style.alignContent = 'flex-start'

export default element
