import React,{ Component } from "react";
import './Quote.css'
import axios from "axios";

//colors were generated using 'https://coolors.co/'
const colors = ['#D7FCD4', '#B68F40', '#545454', '#B6CCA1', '#9E8FB2', '#A7ACD9', '#F76F8E', '#A7A5C6', '#759FBC', '#CA6680', '#F7D6E0'];


class Quote extends Component {
    constructor(props){
        super(props);
        this.state = {
            quote: '',
            author: '',
            currentColor: '#D7FCD4'
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickColor = this.handleClickColor.bind(this);
    }
    
    //Axios - fetch quotes
    async fetchQuote() {
        const response = await axios.get('https://api.quotable.io/random');
        const data = response.data;
        this.setState({
          quote: data.content,
          author: data.author
        });
    }

    //This fetchs and loads a quote when the screen first loads
    componentDidMount() {
        this.fetchQuote();
    }

    //fetch on click
    handleClick() {
        this.fetchQuote();
    }

    //Generate a random color while clicking
    handleClickColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        this.setState({ currentColor: randomColor });
    }

    render() {
        return (
            <div id="quote-container" style={{ backgroundColor: this.state.currentColor }}>
                <div id='quote-box'>
                    <div id='text-box'>
                        <p id="text">{this.state.quote}</p>
                        <p id="author">{this.state.author}</p>
                    </div>
                    <div id="clickables">
                        <button id="new-quote" onClick={() => {
                            this.handleClick();
                            this.handleClickColor();
                        }}>New Quote</button>
                        <a id="tweet-quote" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${this.state.quote} - ${this.state.author}`} target="_blank">Tweet Quote</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quote;