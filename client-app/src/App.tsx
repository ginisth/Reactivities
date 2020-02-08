import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5002/api/values')
      .then((response) => {
        this.setState({
          values: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });


  }


  render() {
    return (
      <div >
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>reactivities</Header.Content>
        </Header>
        <List.Item>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))
          }
        </List.Item>
      </div>
    );
  }

}

export default App;
