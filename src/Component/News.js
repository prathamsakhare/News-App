import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  // we've declared a variable named as articles and stored data of that articles inside it
  // articles = [

  //    {"source":{"id":"independent","name":"Independent"},"author":"Oliver O'Connell","title":"Trump news – live: Ex-president faces fierce GOP backlash after endorsing TV’s Dr Oz in Senate race - The Independent","description":"Follow live updates here","url":"https://www.independent.co.uk/news/world/americas/us-politics/trump-rally-latest-news-jan-6-capitol-riot-b2054954.html","urlToImage":"https://static.independent.co.uk/2022/04/01/17/Capitol_Riot_Investigation_Trump_Calls_63096.jpg?quality=75&width=1200&auto=webp","publishedAt":"2022-04-10T16:25:29Z","content":"Former president Donald Trump has endorsed Dr Mehmet Oz to represent Pennsylvania in the US Senate, angering a number of prominent Republicans.\r\nI have known Dr. Oz for many years, as have many other… [+8633 chars]"},

  //    {"source":{"id":"the-wall-street-journal","name":"The Wall Street Journal"},"author":"Yaroslav Trofimov","title":"Ukraine, Russia Gear Up for War’s Biggest Battles - The Wall Street Journal","description":"The countries poured reinforcements into eastern Ukraine, as refugees fled the looming Russian assault. Unlike the first part of the war, with its guerrilla tactics, officials expect large-scale tank and artillery battles for the eastern Donbas region.","url":"https://www.wsj.com/articles/ukraine-russia-send-reinforcements-for-pitched-battles-in-conflicts-next-phase-11649588496","urlToImage":"https://images.wsj.net/im-521927/social","publishedAt":"2022-04-10T16:07:00Z","content":"Ukraine and Russia poured reinforcements into eastern Ukraine this weekend, preparing for what are likely to become the wars biggest battles as refugees continued to flee the looming Russian assault.… [+366 chars]"},

  //    {"source":{"id":null,"name":"CBS Sports"},"author":"Kyle Boone","title":"2022 Masters leaderboard: Live coverage, Tiger Woods score, golf scores today in Round 4 at Augusta National - CBS Sports","description":"Live scores, updates and highlights from the final round of the 86th Masters at Augusta National Golf Club","url":"https://www.cbssports.com/golf/news/2022-masters-leaderboard-live-coverage-tiger-woods-score-golf-scores-today-in-round-4-at-augusta-national/live/","urlToImage":"https://sportshub.cbsistatic.com/i/r/2022/04/10/b961883d-2f9b-4582-9f1e-949294393958/thumbnail/1200x675/fe09f0e767d2787ccf596cdffba18e5c/masters-leaderboard-2022-dcp-g.jpg","publishedAt":"2022-04-10T16:05:31Z","content":"AUGUSTA, Ga. -- The two best golfers in the world this year will square off with a green jacket on the line Sunday at the 2022 Masters. Scottie Scheffler, the 36- and 54-hole leader, has seen his adv… [+1678 chars]"},

  //    {"source":{"id":null,"name":"New York Times"},"author":"Roger Cohen","title":"French Election Live Updates: Macron Faces Strong Challenge From Le Pen - The New York Times","description":"President Emmanuel Macron is expected to finish first, and may again face the far-right leader Marine Le Pen in the second round. After a muted campaign, voters expressed disillusionment, with one saying, “We don’t have many expectations.”","url":"https://www.nytimes.com/live/2022/04/10/world/french-presidential-election","urlToImage":"https://static01.nyt.com/images/2022/04/10/world/10france-briefing-lede2/10france-briefing-lede2-facebookJumbo.jpg","publishedAt":"2022-04-10T16:03:39Z","content":"Voting on Sunday at City Hall in Versailles, France.Credit...Andrea Mantovani for The New York Times\r\nVERSAILLES, France The French, it is said, vote with their hearts in the first round and with the… [+3047 chars]"},

  //    {"source":{"id":"bloomberg","name":"Bloomberg"},"author":null,"title":"Russia-Ukraine Latest News: April 10, 2022 - Bloomberg","description":null,"url":"https://www.bloomberg.com/tosv2.html?vid=&uuid=21aad62c-b8ef-11ec-94a2-697545636f68&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wNC0xMC91a3JhaW5lLXVwZGF0ZS1zdGFuZC11cC1jYW1wYWlnbi1yYWlzZXMtMTEtYmlsbGlvbi1mb3ItYWlk","urlToImage":null,"publishedAt":"2022-04-10T15:48:35Z","content":"To continue, please click the box below to let us know you're not a robot."}

  //    ]

  // we write constructor when we need to declare a state of that page
  // so here the state of the page is article array
  // static defaultProps = {

  //    pageSize : 6,

  // }
  // static propTypes = {
  //    country : this.propTypes.string,

  // }

  // static defaultProps = {
  //    country : "us",
  //    pageSize : 6,
  //    category : "general"
  // }
  // static propsTypes = {
  //    country : this.propsTypes.string,
  //    pageSize : this.propsTypes.number,
  //    category : this.propsTypes.string
  // }

  constructor() {
    super();

    console.log("Hello I am a constructor from a news component");
    //this console.log statement will print because in the console.the constructor will print the current state of the page

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  //  comoponentDidMount() is an life cycle method
  // it will run after all the content inside render method will be ran, after that, at last this componentDidMount will run
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=49dfe25bc51946d4acbb34a1b76067ed&pageSize=20`;
    // firstly we assign a value which is our API link to url named variable

    let data = await fetch(url);
    // then we fetch that API info inside one file

    let parsedData = await data.json();
    // then we store that fetched data from 'data' file inside another parsedData

    console.log(parsedData);
    this.setState((this.state.articles = parsedData.articles));
    // then we settled the state of the component to the parsedData file so that it will render all the data stored inside the file > which it got from data file > which data file got from the url
  }

  handleNextClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=49dfe25bc51946d4acbb34a1b76067ed&page=${
      this.state.page + 1
    }&pageSize=20`;
    //   we can even set the pageSize means how much components we want to render on a particular page
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState((this.state.articles = parsedData.articles));
    // there is a little change here that is, we just settled state after clicking on the button at which this function is attached, of this we just settled state of 'page: this.state.page + 1' so that it will render remained components / articles on next page
  };

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=49dfe25bc51946d4acbb34a1b76067ed&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState((this.state.articles = parsedData.articles));
  };
  render() {
    return (
      <div className="container my-3" style={{paddingBottom: "60px"}}>
        <h1 className="text-center " style={{marginTop: "75px"}}>News Monkey - Top Headlines</h1>

        {/* {this.state.articles.map((element) => {console.log(element)})} */}
        {/* this will map the entire articles array and print it inside the console */}

        
        
        <div className="row">
        
          {this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title.slice(0, 60)}
                description={
                  element.description ? element.description.slice(0, 65) : " "
                }
                //   here it is turnary operator
                // it describes that if the description of the element is from 0 - 65 (if it is present), then it will show the description but if it is not fullfilling that condition then it should set the value of the description at " " (means an empty string)
                ImageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
              />
            </div>
            
          ))}
         
          </div>
    
          
          <div
            className="container d-flex justify-content-between"
            style={{ marginBottom: "2rem", marginTop: "1rem" }}
          >
            <button
              type="button"
              class="btn btn-dark"
              onClick={this.handlePrevClick}
              
              style={{position:"fixed", bottom:"30px", top:"auto", left: "60px", right:"auto"}}
            >
              {/* here we have applied the disabled condition and inside it we have applied if condition where we declared that if page is less than or equal to 1 then the previous named button should be disabled */}
              &larr; Previous
              {/* here &larr; is code of the symbol for less than < */}
            </button>
            <button
              type="button"
              class="btn btn-dark"
              onClick={this.handleNextClick}
              style={{position:"fixed", bottom:"30px", top:"auto", left: "auto", right:"60px"}}
            >
              Next &rarr;
              {/* here &larr; is code of the symbol for greater than > */}
            </button>
          </div>
        
      </div>
    );
  }
}

export default News;
