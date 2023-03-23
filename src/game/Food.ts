
class Food {
  _pointX: number
  _pointY: number
  element: HTMLElement

  constructor(pointX: number, pointY: number) {
    this.element = document.getElementById('food')!

    this._pointX = pointX
    this._pointY = pointY
  }

  get X() {
    return this.element.offsetLeft
  }

  get Y() {
    return this.element.offsetTop
  }

  // 更改食物位置
  chagePosition() {
    let left = Math.round(Math.random() * 29) * 10
    let top = Math.round(Math.random() * 29) * 10

    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}


export default Food