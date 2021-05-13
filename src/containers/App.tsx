import React, { Component } from 'react';
import MainPage from '../components/MainPage';
import './App.css';

export interface Robot {
  name: string;
  id: number;
  email: string;
}

interface AppProps {
}

interface AppState {
  robots: Array<Robot>;
  searchField: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ searchField: event.currentTarget.value })
  }

  render() {
    const { robots, searchField } = this.state
   return <MainPage  robots={robots} searchField={searchField} searchChange={this.onSearchChange}/> ;
  }
}

export default App;