import mainPage from '../mainPage'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		airTemp: state.airTemp[0],
		fetching: state.fetching,
		//AirTemp: state.airTemp["0"][""air_temperature (F)""]
		//powder: state.allSkiDays.filter(day => day.powder).length,
		//backcountry: state.allSkiDays.filter(day => day.backcountry).length
	}

}

const Container = connect(mapStateToProps)(mainPage)

export default Container