import React, {
    Component
  } from 'react';
  import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  
  import Chart from 'react-native-chartjs';


  const chartTop = {
      type: 'line',
      data: {
        labels: ["Days", "Month", "People"],
        datasets: [{
          label: 'Statistics',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        maintainAspectRatio : true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    
  }; 

  const chartMedium = {
    type: 'bar',
    data: {
      labels: ["This Month", "This Week", "All Time"],
      datasets: [{
        label: 'Invites',
        data: [1, 5, 14, 5, 2, 3],
        backgroundColor: [
          'rgba(55, 66, 250, 1)',
          'rgba(46, 213, 115, 1)',
          'rgba(255, 127, 80, 1)'
        ],
        borderColor: [
          'rgba(55, 66, 250, 1)',
          'rgba(46, 213, 115, 1)',
          'rgba(255, 127, 80, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      maintainAspectRatio : true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  
}; 








  export default class ChartC extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
        chartTop : chartTop,
        chartMedium: chartMedium
      };
    }
    render() {
      
      return ( 
        <View style = {{ flex : 1, backgroundColor: '#ffffff'}}>    
            <Chart chartConfiguration = {
              this.state.chartTop }/>  
            <Chart chartConfiguration = {
              this.state.chartMedium }/>  

        </View> 
      );
    }
  }