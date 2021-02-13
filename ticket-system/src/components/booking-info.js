import { Context } from '../context'
import '../styles/components/booking-info.css'

export default function BookingInfo(props) {
  return (
    <Context.Consumer>
      {({
        getPlacesTotalCount,
        takeOrder,
        getCheckedPlacesCount,
        getBookedPlacesCount,
      }) => (
        <div className="order-section">
          {!getCheckedPlacesCount() ? (
            <p>Выберите места!</p>
          ) : (
            <p>Выбрано мест: {getCheckedPlacesCount()}</p>
          )}
          <p>Свободно мест: {getPlacesTotalCount() - getBookedPlacesCount()}</p>
          <p>Забронировано мест: {getBookedPlacesCount()}</p>
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
