class Test{
  private test: string;
  
  constructor(name: string){
    this.test = name;
  }

  getTest(){
    return "Return test : " + this.test; 
  }
}

const test = new Test("ID_1533");
console.log(test.getTest());
