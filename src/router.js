import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Search from './Search'
import BooksApp from './App'
import * as BooksAPI from './BooksAPI'

class Router extends React.Component{
    state = {
        books : [],
      }

      componentDidMount(){
        BooksAPI.getAll().then(book => {
          this.setState((prevState) => ({
            books : book
          }))
        })
      }
    
      changeBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
        BooksAPI.getAll().then(book => {
          this.setState((prevState) => ({
            books : book
          }))
        })
      }

    render(){
        return(
            <BrowserRouter>
                  <Switch>
                        <Route 
                            exact path="/" 
                            render={(props) => <BooksApp {...props} books={this.state.books} changeBookShelf={this.changeBookShelf}/>}
                        />
                        <Route 
                            exact path="/search" 
                            render={(props) => <Search {...props} books={this.state.books} changeBookShelf={this.changeBookShelf}/>}
                        />
                    </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;
