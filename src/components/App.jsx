import { GlobalStyle } from 'GlobalStyle';
import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';


export class App extends Component{
  state = {
  values: '',
}

  getImages = values => {
    this.setState({ values })
    console.log('state APP:', values );
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.getImages} />
        <ImageGallery value={this.state.values} />
      <GlobalStyle />
    </div>
  );}
};

  