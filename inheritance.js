class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  run(speed){
    this.speed = speed;
    console.log(`${this.name} runs with ${this.speed}`);
  }
  stop(){
    this.speed = 0;
    console.log(`${this.name} is standing.`);
  }
}
class Rabbit extends Animal {
  hide(){
    console.log(`${this.name} hides`);
  }
    stop(){
      super.stop();
      this.hide();
  
      }
    }

  var animal = new Animal('cat');
  var rabbit = new Rabbit('white rabbit');
  rabbit.run(5);
  rabbit.stop();

    
  
