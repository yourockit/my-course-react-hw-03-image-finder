import React, { Component } from "react"
import { Container, Button, Form, Input } from "./Searchbar.styled";

export class Searchbar extends Component {
    state = {
        query: '',
    };

    handleNameChange = e => {
        this.setState({query: e.currentTarget.value.toLowerCase()})
    }

    handleNameSubmit = e => {
        e.preventDefault();
        if(this.state.query.trim() === '') {
            alert('Ничего не ввели');
            return
        };
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    }

    render() {
        return ( 
        <Container>
            <Form onSubmit={this.handleNameSubmit}>
            <Button type = "submit">
            <span > Search </span> 
            </ Button>
            <Input
            name="query"
            type = "text"
            autoComplete = "off"
            autoFocus placeholder = "Search images and photos"
            value={this.state.query}
            onChange={this.handleNameChange}
            />
            </Form> 
        </Container>
        )
    }
}