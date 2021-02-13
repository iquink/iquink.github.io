export class Place {
  constructor(params) {
    this.placeNumber = params.placeNumber
    this.isBooked = false
    this.isChecked = false
    this.rowNumber = params.rowNumber
  }

  bookPlace() {
    this.isBooked = true
  }

  togglePlace() {
    this.isChecked = !this.isChecked
  }
}
