import { GlobalStyle } from 'GlobalStyle';
import React, { Component } from 'react';
import  { Toaster } from 'react-hot-toast';
import { AppStyled } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';


export class App extends Component{
  state = {
    values: '',
    page: 1,
}

  getImages = values => {
    this.setState({ values })
  }

  render() {
    return (
      <AppStyled>
        <Toaster position='top-right'
          toastOptions={{
          duration: 1000,
  }}/>
        <Searchbar onSubmit={this.getImages}  />
        <ImageGallery value={this.state.values} />
      <GlobalStyle />
    </AppStyled>
  );}
};

  