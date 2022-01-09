import React, { Component } from 'react';
import CardList from './components/CardList';
import "tachyons"
import { albums } from './data';
import SearchBox from './components/SearchBox';
import Header from './components/Header';

class App extends Component{

  constructor() {
    super();

    this.state = {
      txtSearchTitle:'',
      txtSearchUserId:'',
      albums:albums
    }
  }

  onTitleSearchChange = (event)=> {
    console.log(event.target.value)
    this.setState({txtSearchTitle:event.target.value})
  }

  onUserIdSearchChange = (event)=> {
    console.log(event.target.value)
    this.setState({txtSearchUserId:event.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => this.setState({albums:json}))
  }

  render() {
    const filteredAlbum = this.state.albums.filter(albums =>{
      return(
        albums.title.toLowerCase().includes(this.state.txtSearchTitle.toLowerCase())
      )
    })
    return (
      <div className='tc'>
        <Header title={'Albums By Chathura'}/>
        <SearchBox placeholder={'Seach By Title'} onSearchCgange={this.onTitleSearchChange}/>
        <SearchBox placeholder={'Seach By User ID'} onSearchCgange={this.onUserIdSearchChange}/>
        <CardList albums={filteredAlbum}/>
      </div>
    );
  } 
}
export default App;
