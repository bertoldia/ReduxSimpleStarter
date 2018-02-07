// @format

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  renderWeather(cityData) {
    const { city: { name } } = cityData;
    const temps = cityData.list.map(weather => weather.main.temp);
    const press = cityData.list.map(weather => weather.main.pressure);
    const humid = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={press}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={humid}>
            <SparklinesLine color="green" />
          </Sparklines>
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
