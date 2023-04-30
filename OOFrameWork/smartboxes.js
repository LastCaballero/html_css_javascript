﻿

class SmartBox {
    Box
    constructor( what ){
        this.Box = document.createElement( what )
        this.Box.className = 'oo' + this.Box.tagName
    }
    
}

class ActionBox extends SmartBox{
    constructor( what, inner, action ){
        super( what )
        this.Box.innerHTML = inner
        this.Box.onclick = action
        return this.Box
    }
}

class UpDownBox extends SmartBox{
    constructor(inner, Action){
        super('button')
        this.Box.onclick = Action
        this.Box.innerHTML = inner
        this.Box.style.borderRadius = "90%"
        return this.Box
    }
}

class NumberBox extends SmartBox{
    Number
    constructor( what, number ){
        super(what)
        this.Number = number
        this.Box.innerHTML = number
    }
    GetBox() { return this.Box }
    Up(){
        this.Number++
        this.Box.innerHTML = this.Number
    }
    Down(){
        this.Number--
        this.Box.innerHTML = this.Number
    }
}






