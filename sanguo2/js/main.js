
import BackGround from './runtime/background'
import GameInfo from './runtime/gameinfo'
import Music from './runtime/music'
import DataBus from './databus'

let ctx = canvas.getContext('2d')
let databus = new DataBus()

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.aniId = 0

    this.restart()
  }

   restart(){
     this.bg = new BackGround(ctx)
     this.gameinfo = new GameInfo(ctx)
     this.music = new Music(ctx)
     this.bindLoop = this.loop.bind(this)

     // 清除上一局的动画
     window.cancelAnimationFrame(this.aniId);

     this.aniId = window.requestAnimationFrame(
       this.bindLoop,
       canvas
     )
   }
 
render(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  this.bg.render(ctx)
}

update(){

}

// 实现游戏帧循环
loop() {
  databus.frame++

  this.update()
  this.render()

  this.aniId = window.requestAnimationFrame(
    this.bindLoop,
    canvas
  )
}

}
