import Sprite from "../base/sprite.js"
import DataBus from "../databus.js"

let databus = new DataBus()



export default class Card extends Sprite {
  constructor(){
    super('', databus.cardSize, databus.cardSize)
  }

  init(index){
   if(index ==Math.floor(fdatabus.column*databus.clounm/2)+1){
     this.setImgSrc(databus.PERSON)
   }else{
     this.setImgSrc(databus.getCardImg())
   }
   this.position = databus.getCardPosition(index)
   this.x = this.position[0]
   this.y = this.position[1]
  }
}