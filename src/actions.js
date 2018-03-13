import C from './constants'
import csvjson from 'csvjson'
//import Converter from '../node_modules/csvtojson/libs/core/Converter'

const urlMaker = (i) => {
  
  console.log(i)

  var minLon = -83.2130
  var minLat = 24.6220
  var maxLon = -79.2710
  var maxLat = 27.1220
  var startTime = '2018-03-09T00:00:00Z'
  var endTime = '2018-03-09T00:59:00Z'

  var urlStart = 'https://opendap.co-ops.nos.noaa.gov/ioos-dif-sos/SOS?service=SOS' +
                  '&request=GetObservation&version=1.0.0' +
                  '&responseFormat=text/csv' +
                  '&eventTime=' + startTime + '/' + endTime +
                  '&featureOfInterest=BBOX:'+ minLon + ',' + minLat + ',' + maxLon + ',' + maxLat

  switch (i) {
    //case 'airTemp':
    case 1:
      var urlEnd = '&observedProperty=air_temperature' +
                    '&unit=Fahrenheit' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive'
                    break
    //case 'airPress':
    case 2:
      var urlEnd = '&observedProperty=air_pressure' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive'
                    break
    //case 'electCond':
    case 3:
      var urlEnd = '&observedProperty=sea_water_electrical_conductivity' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive'
                    break
    case 4:
      var urlEnd = '&observedProperty=sea_water_speed&direction_of_sea_water_velocity' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:CurrentsActive' +
                    '&procedure=urn:ioos:network:NOAA.NOS.CO-OPS:CurrentsActive'
                    break
    case 5:
      var urlEnd = '&observedProperty=sea_water_salinity' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive'
                    break                   
    case 6:
      var urlEnd = '&observedProperty=water_surface_height_above_reference_datum' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:WaterLevelActive' +
                    '&result=VerticalDatum%3D%3Durn:ioos:def:datum:noaa::CRD' +
                    '&dataType=VerifiedSixMinute&unit=Feet'
                    break
    case 7:
      var urlEnd = '&observedProperty=sea_surface_height_amplitude_due_to_equilibrium_ocean_tide' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:WaterLevelActive' +
                    '&result=VerticalDatum%3D%3Durn:ioos:def:datum:noaa::CRD' +
                    '&dataType=SixMinuteTidePredictions' +
                    '&unit=Feet'
                    break
    case 8:
      var urlEnd = '&observedProperty=sea_water_temperature' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive' +
                    '&unit=Fahrenheit'
                    break
    case 9:
      var urlEnd = '&observedProperty=wind_speed&wind_from_direction&wind_speed_of_gust' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive' +
                    '&unit=Miles'
                    break
    case 10:
      var urlEnd = '&observedProperty=harmonic_constituents' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:HarmonicConstituents' +
                    '&timeZone=LST&unit=Feet'
                    break
    case 11:
      var urlEnd = '&observedProperty=datums' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:Datums' +
                    '&epoch=Current'
                    break
    case 12:
      var urlEnd = '&observedProperty=relative_humidity' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive'
                    break
    case 13:
      var urlEnd = '&observedProperty=rain_fall' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive'
                    break
    case 14:
      var urlEnd = '&observedProperty=visibility' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive'
  }
  return (urlStart + urlEnd)
}

export const addError = (message) => ({
  type: C.ADD_ERROR,
  payload: message,
})

export const clearError = index => ({
  type: C.CLEAR_ERROR,
  payload: index
})

export const isFetching = () => ({
  type: C.FETCHING,
})

export const notFetching = () => ({
  type: C.CANCEL_FETCHING,
})

export const getAirTemp = () => dispatch => {

  /* var minLon = -83.2130
  var minLat = 24.6220
  var maxLon = -79.2710
  var maxLat = 27.1220
  var startTime = '2018-03-09T00:00:00Z'
  var endTime = '2018-03-09T00:59:00Z'

  var url = 'https://opendap.co-ops.nos.noaa.gov/ioos-dif-sos/SOS?service=SOS'+
            '&request=GetObservation&version=1.0.0' +
            '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive' +
            '&featureOfInterest=BBOX:' + minLon + ',' + minLat + ',' + maxLon + ',' + maxLat +
            '&unit=Fahrenheit' +
            '&observedProperty=air_temperature' +
            '&eventTime=' + startTime + '/' + endTime +
            '&responseFormat=text/csv' */
  //var obsProp = ['airTemp', 'airPress', 'electCond']
  //var i = 0
  //for (;obsProp[i];) {
  for (i = 1; i < 7; i++){
    //var url = urlMaker(obsProp[i]);
    //i++;
    var url = urlMaker(i)
    console.log(url)
    dispatch({
      type: C.FETCHING
    })

    fetch(url,{
      method:  'get',
    })

    .then((response) => response.text())

    .then((respText) => {

      var options = {
        delimiter : ',', // optional
        //quote     : '"' // optional
      };

      var airTemp = csvjson.toObject(respText, options);
      
      //console.log(airTemp)
      dispatch({
        type: C.GET_AIR_TEMP,
        payload: airTemp
      })
      dispatch({
        type: C.CANCEL_FETCHING
      })
    })

    .catch(error => {
      dispatch(
        addError(error.message)
      )

      dispatch({
        type: C.CANCEL_FETCHING
      })
    })
  }
}