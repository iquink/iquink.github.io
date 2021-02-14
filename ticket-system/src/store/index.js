import { useState } from 'react'
import { Context } from '../context'
import { Cinema } from '../classes/cinema.js'
import { config } from '../core/config.js'

const cinemaProps = {
  rowsCount: config.cinameHall.rowsCount,
  placesCount: config.cinameHall.placesCount,
}

export default function Store(props) {
  const [state, setState] = useState({
    cinema: new Cinema(cinemaProps),
  })

  const togglePlace = (rowIndex, placeIndex) => {
    state.cinema.togglePlace(rowIndex, placeIndex)
    setState({ cinema: state.cinema })
  }

  const takeOrder = () => {
    state.cinema.takeOrder()
    setState({ cinema: state.cinema })
  }

  const getCheckedPlacesCount = () => state.cinema.getCheckedPlacesCount()

  const getBookedPlacesCount = () => state.cinema.getBookedPlacesCount()

  const getPlacesTotalCount = () => state.cinema.getPlacesTotalCount()

  return (
    <Context.Provider
      value={{
        cinema: state.cinema,
        togglePlace: togglePlace,
        takeOrder: takeOrder,
        getBookedPlacesCount: getBookedPlacesCount,
        getCheckedPlacesCount: getCheckedPlacesCount,
        getPlacesTotalCount: getPlacesTotalCount,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
