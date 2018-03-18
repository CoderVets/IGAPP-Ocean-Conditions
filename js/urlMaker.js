import C from '../src/constants'

export default urlMaker = (x) => {
  
  console.log(x)
  console.log('urlMaker ' + x)


  var minLon = -83.2130
  var minLat = 24.6220
  var maxLon = -79.2710
  var maxLat = 27.1220
  var startTime = '2018-03-09T00:00:00Z'
  var endTime = '2018-03-09T00:59:00Z'
  var datumLon = -71.4006
  var datumLat = 41.8067
  

  var urlStart = 'https://opendap.co-ops.nos.noaa.gov/ioos-dif-sos/SOS?service=SOS' +
                  '&request=GetObservation&version=1.0.0' +
                  '&responseFormat=text/csv' +
                  //'&eventTime=' + startTime + '/' + endTime +
                  '&featureOfInterest=BBOX:'+ minLon + ',' + minLat + ',' + maxLon + ',' + maxLat
  switch (x) {
    //case 'airTemp':
    case 0:
      var urlEnd = '&observedProperty=air_temperature' +
                    '&unit=Fahrenheit' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive'
      var constType = C.GET_AIR_TEMP
                    break
    //case 'airPress':
    case 1:
      var urlEnd = '&observedProperty=air_pressure' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive'
                    break
    //case 'electCond':
    case 2:
      var urlEnd = '&observedProperty=sea_water_electrical_conductivity' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive'
                    break
    //case 4:
    case 3: 
      var urlEnd = '&observedProperty=sea_water_speed&direction_of_sea_water_velocity' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:CurrentsActive' +
                    '&procedure=urn:ioos:network:NOAA.NOS.CO-OPS:CurrentsActive'
      var constType = C.GET_CURRENTS
                    break
    case 4:
      var urlEnd = '&observedProperty=sea_water_salinity' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive'
                    break                   
    case 5:
      var urlEnd = '&observedProperty=water_surface_height_above_reference_datum' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:WaterLevelActive' +
                    '&result=VerticalDatum%3D%3Durn:ioos:def:datum:noaa::CRD' +
                    '&dataType=VerifiedSixMinute&unit=Feet'+ datumLon + ',' + datumLat
       //var constType =  C.GET_WS_ABOVE_DATUM         
                    break
    case 6:
      var urlEnd = '&observedProperty=sea_surface_height_amplitude_due_to_equilibrium_ocean_tide' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:WaterLevelActive' +
                    '&result=VerticalDatum%3D%3Durn:ioos:def:datum:noaa::CRD' +
                    '&dataType=SixMinuteTidePredictions' +
                    '&unit=Feet'
                    break
    case 7:
      var urlEnd = '&observedProperty=sea_water_temperature' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive' +
                    '&unit=Fahrenheit'
                    break
    case 8:
      var urlEnd = '&observedProperty=wind_speed&wind_from_direction&wind_speed_of_gust' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive' +
                    '&unit=Miles'
                    break
    case 9:
      var urlEnd = '&observedProperty=harmonic_constituents' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:HarmonicConstituents' +
                    '&timeZone=LST&unit=Feet'
                    break
    case 10:
      var urlEnd = '&observedProperty=datums' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:Datums' +
                    '&epoch=Current'
                    break
    case 11:
      var urlEnd = '&observedProperty=relative_humidity' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive'
                    break
    case 12:
      var urlEnd = '&observedProperty=rain_fall' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive'
                    break
    case 13:
      var urlEnd = '&observedProperty=visibility' +
                    '&offering=urn:ioos:network:NOAA.NOS.CO-OPS:MetActive'
  }
  return (urlStart + urlEnd)
  // return (urlReturn = {
  //   url: urlStart + urlEnd,
  //   dispType: constType,
  // })
}