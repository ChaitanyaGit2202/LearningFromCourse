import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    isVisible = false
    name
    handleClick(event){
        this.isVisible = true
    }

    changeHandler(event){
        this.name = event.target.value
    }
  //getter always return something. Getter is used to change the data dynamically. 
   get helloMethod(){
        return this.name === "hello" || this.name === "Hello"
    }

    //Notes
    //What is falsy values? and what are they?
    // 0, false, undefined, null and "" are falsy values in JS
}