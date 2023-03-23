
class Snake {
  eleHead: HTMLElement
  eleContainer: HTMLElement
  eleBodies: HTMLCollectionOf<HTMLElement>

  constructor() {
    this.eleContainer = document.getElementById('snake')!
    this.eleHead = document.getElementById('head')!

    this.eleBodies = document.getElementById('snake')?.getElementsByTagName('div')!
    
    // ?.getElementsByTagName('div')!
  }

  get X() {
    return this.eleHead.offsetLeft
  }
  set X(value: number) {
    // X坐标不变 说明上下走
    if(this.X === value) return

    if( value < 0 || value > 290){
      throw new Error('蛇撞墙了')
    }

    // 禁止掉头
    if(this.eleBodies[1] && this.eleBodies[1].offsetLeft === value ) {
      if(value > this.X) { //up
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }

    this.move()
    this.eleHead.style.left =  value + 'px'

    // 检测碰撞
    this.checkCollision()
  }

  get Y() {
    return this.eleHead.offsetTop
  }

  set Y(value: number) {
    // Y坐标不变 说明左右走
    if(this.Y === value) return

    if( value < 0 || value > 290){
      throw new Error('蛇撞墙了')
    }
    
    // 禁止掉头
    if(this.eleBodies[1] && this.eleBodies[1].offsetTop === value ) {
      if(value > this.Y) { //up
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }

    this.move()
    this.eleHead.style.top =  value + 'px'

    // 检测碰撞
    this.checkCollision()
  }

  // 添加身体
  addBodys() {
    this.eleContainer.insertAdjacentHTML('beforeend', "<div class='bodies'></div>")
  }

  // 身体移动
  move() {
    const length = this.eleBodies.length
    for (let index = length - 1; index > 0; index--) {
      let X = this.eleBodies[index - 1].offsetLeft;
      let Y = this.eleBodies[index - 1].offsetTop;
      this.eleBodies[index].style.left = X + 'px';
      this.eleBodies[index].style.top = Y + 'px'
    }
  }

  checkCollision() {
    for (let index = 1, len = this.eleBodies.length; index < len; index++) {
      if(this.eleBodies[index].offsetLeft == this.X
        && this.eleBodies[index].offsetTop == this.Y) {
          alert('碰撞了')          
      }
    }
  }
}

export default Snake