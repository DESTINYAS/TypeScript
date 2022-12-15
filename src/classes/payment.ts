import { hasFormatter } from "../interfaces/hasFormatter.js"

export class Payment implements hasFormatter{

    constructor(
    readonly recepient:string,
    private details:string,
    public amount:number){}
    
    format(){
        return `${this.recepient} is owed ${this.amount} for ${this.details}`
    }
    }