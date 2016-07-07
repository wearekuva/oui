### API

#### DATOUI

#### FUNCTIONAL API

````javascript

/*
    Renders UI declared in `obj` to the default panel
*/
oui( obj : Object, callback : Function )


/*
    Renders UI declared in `obj` to the default panel
*/
oui.panel( { label : String } ) : PanelApi


let PanelApi = {
    draw( obj : Object, callback : Function )
}

```



````javascript
/*
    Create a new empty Oui Panel
*/
oui.datoui( { label: String } ) : OuiFolder


let OuiFolder = {

    /*
        Adds  a property to the Oui Panel
     */
    add( obj : Object, propName : String, constraints : Object ),

    /*
        Adds  a folder to the Oui Panel
     */
    addFolder( label : String ) : OuiFolder
}
```
