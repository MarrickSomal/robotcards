import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import { Robot } from '../containers/App'

interface AppProps {
  robots: Array<Robot>;
  searchField: string;
  searchChange: any;
}


class MainPage extends Component<AppProps, {}> {

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
  }

  render() {
    const { robots } = this.props;
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.props.searchChange}/>
          <Scroll>
            <ErrorBoundary>
            <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default MainPage;