import { GlobalStyle } from 'GlobalStyle';
import React, { Component } from 'react';
import  { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';


export class App extends Component{
  state = {
  values: '',
}

  getImages = values => {
    this.setState({ values })
  }

  render() {
    return (
      <div>
        <Toaster position='top-right'
          toastOptions={{
          duration: 1000,
  }}/>
        <Searchbar onSubmit={this.getImages} />
        <ImageGallery value={this.state.values} />
      <GlobalStyle />
    </div>
  );}
};

  