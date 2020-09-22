export class Quantity {
    firstSubUnit: string
    quantity: number
    secondSubUnit: string

    constructor(firstSubUnit,quantity,secondSubUnit) {
        this.firstSubUnit = firstSubUnit
        this.quantity = quantity
        this.secondSubUnit = secondSubUnit
    }

    set setFirstSubUnit(firstSubUnit: string){
        this.firstSubUnit = firstSubUnit
    }

    set setQuantity(quantity: number){
        this.quantity = quantity
    }

    set setSecondSubUnit(secondSubUnit: string){
        this.secondSubUnit = secondSubUnit
    }
}