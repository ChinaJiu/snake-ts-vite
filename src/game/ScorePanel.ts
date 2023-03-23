
class ScorePanel {
  score: number = 0;
  level: number = 1;
  
  eleScore: HTMLElement
  eleLevel: HTMLElement

  // 达到制定分升级关卡
  UpScore: number;
  // 最大关卡
  MaxLevel: number;

  constructor(MaxLevel: number = 10, UpScore: number = 10) {
    this.eleScore = document.getElementById('score')!
    this.eleLevel = document.getElementById('level')!

    this.UpScore = UpScore
    this.MaxLevel = MaxLevel
  }

  // 加分
  addScore() {
    this.eleScore.innerHTML = ++this.score + ''
    if(this.score % this.UpScore == 0) {
      this.levelUp()
    }
  }

  // 升级关卡
  levelUp() {
    if( this.level < this.MaxLevel ) {
      this.eleLevel.innerHTML = ++this.level + ''
    }
  }
}


export default ScorePanel