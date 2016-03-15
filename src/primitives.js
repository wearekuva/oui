const primitives = new Set(['string', 'number', 'boolean' ] )
export let isPrimitive = value => primitives.has( typeof( value ))
