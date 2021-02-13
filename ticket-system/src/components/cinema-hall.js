import PlacesRow from './places-row.js'
import '../styles/components/cinema-hall.css'
import '../styles/shared/common.css'
import { Context } from '../context'
import BookingInfo from '../components/booking-info'

export default function CinemaHall(props) {
  return (
    <Context.Consumer>
      {({ cinema }) => (
        <div className="container">
          <div className="rows-grid">
            {cinema.hall.map((row, i) => (
              <PlacesRow key={i} i={i} /> // Индексы использовать не рекомендуется, но здесь точно не будет меняться порядок элементов.
            ))}
            <div className="container">
              <div className="cinema-screen">ЭКРАН ЗДЕСЬ</div>
            </div>
          </div>
          <BookingInfo />
        </div>
      )}
    </Context.Consumer>
  )
}
