import { Context } from '../context'
import '../styles/components/booking-info.css'

export default function BookingInfo(props) {
  return (
    <Context.Consumer>
      {({ cinema, takeOrder, getCheckedPlacesCount, getBookedPlacesCount }) => (
        <div className="order-section">
          {!getCheckedPlacesCount() ? <p>Выберите места!</p> : null}
          <p>
            Свободно мест: {cinema.hall.flat().length - getBookedPlacesCount()}
          </p>
          <p>Выбрано мест: {getCheckedPlacesCount()}</p>
          <button
            onClick={(e) => takeOrder()}
            disabled={!getCheckedPlacesCount()}
          >
            Забронировать места
          </button>
        </div>
      )}
    </Context.Consumer>
  )
}
