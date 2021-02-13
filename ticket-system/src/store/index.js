import React from 'react'
import { Context } from '../context'
import { Cinema } from '../classes/cinema.js'
import { config } from '../core/config.js'

const cinemaProps = {
  rowsCount: config.cinameHall.rowsCount,
  placesCount: config.cinameHall.placesCount,
}

export class Store extends React.Component {
  state = {
    cinema: new Cinema(cinemaProps),
  }

  togglePlace = (rowIndex, placeIndex) => {
    this.setState((state) => {
      state.cinema.togglePlace(rowIndex, placeIndex)
      return state
    })
  }

  takeOrder = () => {
    this.setState((state) => {
      state.cinema.takeOrder()
      return state
    })
  }

  getCheckedPlacesCount = () => this.state.cinema.getCheckedPlacesCount()

  getBookedPlacesCount = () => this.state.cinema.getBookedPlacesCount()

  getPlacesTotalCount = () => this.state.cinema.getPlacesTotalCount()


  render() {
    return (
      <Context.Provider
        value={{
          cinema: this.state.cinema,
          togglePlace: this.togglePlace,
          takeOrder: this.takeOrder,
          getBookedPlacesCount: this.getBookedPlacesCount,
          getCheckedPlacesCount: this.getCheckedPlacesCount,
          getPlacesTotalCount: this.getPlacesTotalCount
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}
