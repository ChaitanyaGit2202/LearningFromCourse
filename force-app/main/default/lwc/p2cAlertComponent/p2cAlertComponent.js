import { LightningElement, api} from 'lwc';

export default class P2cAlertComponent extends LightningElement {
    //When infornt of local peoperty we add @api it becomes public property  
    //Public property can be  accessible from other components.
    @api message
    @api cardHeading
    @api number  
    @api isValid
} 