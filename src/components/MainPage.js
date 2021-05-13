import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class MainPage extends Component {

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