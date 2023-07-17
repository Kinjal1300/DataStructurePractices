// Call
function k()
{
    console.log('hi k', this.name);
}
let obj = { name : "kinjal" };

console.log(k.call({obj}));

// Apply

function saySomething(message){
    console.log(this.name + " is " + message);
  }        
  var person4 = {name:  "John"};
  saySomething.apply(person4, ["awesome"]);

//Bind

var name = "test";

let obj = {
    getName: function(){
        console.log('hello'+ this.name)
        function hello(){
            console.log('hello 1 ' + this.name);
        }
        hello.apply(this);
    }
};


var d1 = obj.getName.bind({name});
d1();

