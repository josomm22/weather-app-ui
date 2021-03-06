import WeatherCard from './WeatherCard';
import { connect } from 'react-redux';

export default connect(state => ({
    ...state.Favourites,
    theme: state.Preferences.theme,
    tempUnit: state.Preferences.tempUnit
}), {
    
}
)(WeatherCard);
