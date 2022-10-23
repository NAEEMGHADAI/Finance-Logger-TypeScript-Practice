//Classes
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //Now client , details, number will have all its value automatically defiend without writing them
    format() {
        // this.client = "n" we cannot change readonly property inside object also
        return `${this.client} ows $${this.amount} for ${this.details}`;
    }
}
