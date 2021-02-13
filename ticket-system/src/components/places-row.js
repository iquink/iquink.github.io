import Place from './place.js'
import '../styles/components/places-row.css'
import { Context } from '../context'

export default function PlacesRow(props) {
  return (
    <Context.Consumer>
      {({ cinema }) => (
        <div className="places-grid">
          {cinema.hall[props.i].map((place, i) => (
            <Place
              placeIndex={i}
              rowIndex={props.i}
              placeNumber={place.placeNumber}
              isBooked={place.isBooked}
              isChecked={place.isChecked}
              key={`${place.placeNumber}-${place.rowNumber}`}
            />
          ))}
        </div>
      )}
    </Context.Consumer>
  )
}
