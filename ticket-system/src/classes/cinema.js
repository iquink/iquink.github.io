import { Place } from './place'

export class Cinema {
  constructor(params) {
    this.rowsCount = params.rowsCount
    this.placesCount = params.placesCount
    this.hall = []

    this.fillHall()
  }

  fillHall() {
    for (let i = 1; i <= this.rowsCount; i++) {
      let row = []

      for (let k = 1; k <= this.placesCount; k++) {
        const props = {
          placeNumber: k,
          rowNumber: i,
        }

        row.push(new Place(props))
      }

      this.hall.push(row)
    }
  }

  takeOrder() {
    this.hall.forEach((row, i) => {
      row.forEach((place, k) => {
        if (place.isChecked) {
          this.hall[i][k].togglePlace()
          this.hall[i][k].bookPlace()
        }
      })
    })
  }

  togglePlace(rowIndex, placeIndex) {
    this.hall[rowIndex][placeIndex].togglePlace()
  }

  getCheckedPlacesCount() {
    return this.hall.flat().filter((place) => place.isChecked).length
  }

  getBookedPlacesCount() {
    return this.hall.flat().filter((place) => place.isBooked).length
  }

  getPlacesTotalCount() {
    return this.hall.flat().length
  }
}
