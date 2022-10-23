import { HasFormatter } from "../interfaces/HasFormatter.js";

//Classes

export class Invoice implements HasFormatter {
	constructor(
		readonly client: string,
		private details: string,
		public amount: number
	) {}
	//Now client , details, number will have all its value automatically defiend without writing them
	format() {
		// this.client = "n" we cannot change readonly property inside object also
		return `${this.client} ows $${this.amount} for ${this.details}`;
	}
}
