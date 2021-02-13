import '../styles/components/place.css'
import { Context } from '../context'

export default function Place(props) {
  return (
    <Context.Consumer>
      {({ togglePlace }) => (
        <button
          type="button"
          className={`place ${props.isChecked ? 'place-checked' : ''} ${
            props.isBooked ? 'place-booked' : ''
          }`}
          disabled={props.isBooked}
          onClick={(e) => {
            togglePlace(props.rowIndex, props.placeIndex)
          }}
        >
          {props.placeNumber}
        </button>
      )}
    </Context.Consumer>
  )
}
