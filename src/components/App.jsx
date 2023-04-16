import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getImages } from "Services/Api";
import { Container } from "./App.styled";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";


export class App extends Component {
state = {
  query: '',
  page: 1,
  images: [],
  totalHits: 0,
  isLoading: false,
};

  handleFormSubmit = query => {
    this.setState({ query, page: 1 });
  };

  handleLOadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}));
  };

  async componentDidUpdate(prevProps, prevState) {
    const {query, page} = this.state;
    if(prevState.query !== query || prevState.page !== page) {
      try {
      this.setState({ isLoading: true })
      const { hits, totalHits } = await getImages(query, page);
      if (totalHits === 0) {
        alert('ничего не нашли')
        this.setState({ isLoading: false });
        return;
      }
      this.setState(prevState => ({ 
        images: page === 1 ? hits : [...prevState.images, ...hits],
        totalHits: page === 1 ? totalHits - hits.length :
                                totalHits - [...prevState.images, ...hits].length,
        isLoading: false
      }))
    } catch (error) {
      console.log(error)
    }
    }
  };

  render() {
    const { isLoading, totalHits } = this.state;
    return (
      <Container>
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGallery images={this.state.images}/>
      {!!totalHits && <Button onLoadMore={this.handleLOadMore}/> }
      {isLoading && < Loader />}
      </Container>
    )
  }
}
