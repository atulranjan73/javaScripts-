let calculator = {
    read(){
        this.a =parseFloat(prompt("Enter the first number ,0"));
        this.b =parseFloat(prompt("Enter the second number ",0));
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
      return  this.a *this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
