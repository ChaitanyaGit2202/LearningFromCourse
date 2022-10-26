import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {

//Parent to child communication using Prmitive data type

// a> To make field/property or method public, decorate it with @api decorator
// b> When we want to expose the property we decorate the field with @api
// c> An owner component that uses the component in its HTML markup can access the component's public 
//    properties via HTML attribute.
// d> Public properties are reactive in nature and if the value of the property changes the component's
//    template re-rendes.
   
    percent = 0;
   carouselData = [
    {
        src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
        header : "First Card",
        description : "First card description."
    },
    {
        src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
        header : "Second Card",
        description : "Second card description."
    },
    {
        src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
        header : "Third Card",
        description : "Third card description."
    }
   ]  

   changeHandler(event){
        this.percent = event.target.value; 
   }

}