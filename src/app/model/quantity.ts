export class Quantity {
    firstSubUnit: string
    quantity: number
    secondSubUnit: string

    constructor(firstSubUnit,quantity,secondSubUnit) {
        this.firstSubUnit = firstSubUnit
        this.quantity = quantity
        this.secondSubUnit = secondSubUnit
    }
}