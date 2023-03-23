import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

class GameControl{
  food: Food
  scorePanel: ScorePanel
  snake: Snake

  direction: string = ''
  isLive: boolean = true

  constructor() {
    this.food = new Food(100, 200)
    this.food.chagePosition()

    this.scorePanel = new ScorePanel(100, 2)
    this.snake = new Snake()
    
    this.init()
  }

  init() {
    document.addEventListener('keydown', this.keyDownHandle.bind(this))
    this.run()
  }

  // 键盘事件
  keyDownHandle(e: KeyboardEvent) {
    this.direction = e.key
  }

  // 让蛇移动
  run() {
    let X = this.snake.X
    let Y = this.snake.Y
    switch(this.direction) {
      case 'ArrowUp':
        Y -=10
      break;
      case 'ArrowDown':
        Y +=10
      break;
      case 'ArrowLeft':
        X -=10
      break;
      case 'ArrowRight':
        X +=10
      break;
    }
    
    this.collision()

    try{
      this.snake.X = X
      this.snake.Y = Y
    } catch (e){
      alert( (e as Error).message + 'game over')
      this.isLive = false
    }

    this.isLive && setTimeout(this.run.bind(this), 200 - this.scorePanel.level * 10)
  }

  // 蛇头和食物碰撞
  collision() {
    if(this.snake.X === this.food.X && this.snake.Y === this.food.Y) {
      this.food.chagePosition()
      this.scorePanel.addScore()
      this.snake.addBodys()
    }
  }


}
export default GameControl