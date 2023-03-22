import React,{ Component } from "react";
import './Quote.css'

class Quote extends Component {
    constructor(props){
        super(props);
        this.state = {
            quote: '',
            author: ''
        };
    }
    
    render() {
        return (
            <div id="quote-container">
                <div className="App" id='quote-box'>
                    <p id="text">quote</p>
                    <p id="author">author</p>
                    <button id="new-quote">new quote</button>
                    <a id="tweet-quote" href={`https://twitter.com/intent/tweet`} target="_blank">Tweet Quote</a>
                </div>
            </div>
        );
    }
}

export default Quote;