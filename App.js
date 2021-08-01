import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      weather: '',
    }
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    return fetch('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139')
          .then(res => res.json())
          .then(data => {
            this.setState({
              weather: data,
            });
          })
          .catch(err => console.log(err));
  }

  render(){
    if(this.state.weather === ''){
      return (
        <View style={styles.container}>
          <Text>Loading.. Please Wait</Text>
        </View>
      )
    }else {
      return (
        <View style={styles.container}>  
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Today Weather</Text>
          </View>
          <View style={{
            alignItems: 'center',
          }}>
            <Text style={styles.text}> Weather:  {this.state.weather.weather[0].description} </Text>  
            <Text style={styles.text}> Temperature: {this.state.weather.main.temp} </Text> 
            <Text style={styles.text}> Humidity: {this.state.weather.main.humidity} </Text>  
            <Text style={styles.text}> Visibility:  {this.state.weather.visibility} </Text>
            <Text style={styles.text}> Wind Speed: {this.state.weather.wind.speed} </Text>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    borderWidth: 1,
  },
  header: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    margin: 10,
  }
});