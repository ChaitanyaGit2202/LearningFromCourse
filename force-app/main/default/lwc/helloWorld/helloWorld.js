import { LightningElement, track} from 'lwc';

export default class HelloWorld extends LightningElement {
 //fullname is variable or in lwc we call it property here its a local property. 
 //What is local property?
 //Notes
 //In html template we can access property value DIRECTLY if it's PRIMITIVE or OBJECT
 //Dot notation is used to access the property from an object 
 //we cannot access array property directly. 
 //Then how to access array property?
 //LWC doesn't allow computed expression like Name[2] or {2+2}.
    
 fullname = "Zero To Hero in LWC."
 title = "LWC"

 //its a two way data binding html to js. 
 changeHandler(event){
    this.title = event.target.value
 }

 //Track operactor 
 @track address={
    city:"San Fransico",
    postalcode : 3008,
    country: "US"
 }

 trackHandler(event){
    this.address.city = event.target.value
 }

 //Getter demo code
 //note
 //if you write get before method name it becomes getter. 
 //whenever you want to change the data dynamically in html user getter.  
 //getter always return something.
 user = ["Chaitanya", "Shailesh", "Saurabh"]
  num1 = 10 
  num2 = 20

 get firstUser(){
   return this.user[0]
 }

 get multiply(){
   return this.num1*this.num2
 }
}