import React, { Component } from 'react';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let bookImage = (this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : "")
        return ( 
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookImage}")` }}></div>
                        <div className="book-shelf-changer">
                            <select
                                onChange={(event) => this.props.changeBookShelf(this.props.book, event.target.value)}
                                value={this.props.shelf}
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
         );
    }
}
 
export default Book;
 