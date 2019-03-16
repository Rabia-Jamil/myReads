import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component{
    state = {
        query : '',
        BookData : [],
    }

whenChange = (query) =>{
    this.setState({
        query: query,
    })
   this.searchedBook(query)
}

searchedBook = (query) => {
  if(query){
        BooksAPI.search(query).then(BookData => {
            if(BookData.error){
                this.setState({ BookData : [] })
            }
            else{
                this.setState({ BookData : BookData,})
            }
        })
  }else{
    this.setState({ BookData : [] })
    }  
}
 //document.getElementById("searchBook").value
    render(){
      console.log(this.state.BookData)
        return(
            <div className="app">
                <div className="search-books">
                    <div className="search-books-bar">
                        <button className="close-search" onClick={()=>this.props.history.push("/")}>Close</button>
                        <div className="search-books-input-wrapper">
                            <input 
                                type="text" 
                                value={this.state.query} 
                                onChange={(event) => this.whenChange(event.target.value)} 
                                placeholder="Search by title or author"
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {
                                this.state.BookData.map(searchedBook => {
                                    let shelf = 'none'
                                    this.props.books.map(book => (
                                       book.id === searchedBook.id ? shelf = book.shelf : ''
                                    ))
                                        return(
                                            <li key={searchedBook.id}>
                                                <Book
                                                    book={searchedBook}
                                                    changeBookShelf={this.props.changeBookShelf}
                                                    shelf={shelf}
                                                />
                                            </li>
                                        )
                                     }
                                 )
                            }
                        </ol>
                </div>
            </div>
          </div>
            )
            
        }
    }
export default Search;