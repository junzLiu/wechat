import Pool from './base/pool.js'
let instance
const PERSON = 'images/g_person.png'
const CARD_IMAGES = ['images/g_up.png','images/g_down.png']

export default class DataBus {
  constructor(){
    if(instance)
       return instance

    instance = this
    this.pool = new Pool();
    
    this.reset();
  }

reset(){
  this.column = 3
  this.boundOutside = 20
  this.cardDividerSize = 5
  this.getCardSize()
}

getCardSize(){
  this.cardSize = (window.innerWidth-this.boundOutside*2-this.cardDividerSize*(this.column-1))/this.column;
}

getCardImg(){
  return CARD_IMAGES[Math.floor(Math.random() * CARD_IMAGES.length)];
}
getCardPosition(index){
  this.x = this.boundOutside + this.cardSize * (index % this.column) + this.cardDividerSize*(index%this.column)
  this.y = window.innerHeight-window.innerWidth+this.x
  return [this.x,this.y]
}
addCard(card){
  this.pool.getItemByClass('cards',card)
}

removeCard(card){
  this.pool.recover('cards',card)
}

}