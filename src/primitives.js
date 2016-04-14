const primitives = new Set(['string', 'number', 'boolean', 'function', 'object' ] )
export let isPrimitive = value => primitives.has( typeof( value ))
