Declaring and rendering the variables => 
        1) declare the variable inside the function (above the render(), line 9-10 => App.js)
        2) use that variable inside the render and return method (add this prior to the variable implemetation)


Making a component and rendering it inside other component => 

        1) We've made a component named as NewsItem.js and rendered it inside News.js couple of times  ( Line 9 - 16 , News.js ) 
           now if we made minor change in the NewsItem component then it is going to replicate that change inside all the component that are inside News.js

passing props from one component => 

        1) we declare props inside the news.js and we declare them as title and ImageUrl etc and passed them inside newsItem.js

Declaring the constructor inside the news.js =>

        1) We declare the constructor inside the news.js 
        and we use this.state for declaring the current state of the page which is articles array

Mapping the entire array and returning the component structure inside news.js => 
        
        1) We declared an array named as articles and we will map it inside the render method and while mapping we will map entire array as parameter (element) and then while returning it we will return the structure and in that we will return with the props

Passing entire array of articles through props inside the card component =>

        1) We made an array inside news.js component and we will set values for newsItem.js props and will pass the value through each assigned props means we declare title props and pass the value of the key: title from that news.js component


Firstly => Constructor will run, after that render method will run, after that componentDidMount will run


Now We used async componentDidMount function to fetch the data from api 

        1) firstly we assign a value which is our API link to url named variable
        2) then we fetch that API info inside one file named as data
        3) then we store that fetched data from 'data' file inside another parsedData
        4) (optional step) we console.log (print) that data inside the console
        5) then we settled the state of the component to the parsedData file so that it will render all the data stored inside the file > which it got from data file > which data file got from the url


Now after all this the main problem / obstacle is, the API from which we are getting data of the articles, have total 38 objects inside it, but we are able to display only 20 at 1st page, so what we are going to do here, is that we are going to create a button that says 'next' and when we will click on it, it will get us to next page where we will render other 18 items that are inside the array 

So here we will => 

        1) we will set the state of the page at 1 inside the constructor (this.state.page = 1)
        2) we have made two buttons inside the news.js at the bottom of the component
        3) Then we will declare the onClick event and inside that we declare the handleNextClick and handlePrevClick function 
        4) inside the handleNextClick function, we have stated the page value inside url by using backticks and mentioning the page which will be this.state.page + 1 after clicking on that function / button
        5) inside the handlePrevClick function, we have stated the page value inside url by using backticks and mentioning the page which will be this.state.page - 1 after clicking on that function / button
        6) we can use pageSize method for rendering the components in the size that we want that means if we settled the value of pageSize as 9 then only nine components will get rendered on one page

Now we can make the props for category where we can divide all the components / news in categories 

        1) firstly we include all the categories mentioned inside the category section of the documentation of the api
        2) after that we can make separate links for each of the category inside the navigation bar
        3) after that we can make change in the url by typing "&category=${this.props.category}" before the api key and after the country prop
        4) after that we can declare the prop directly inside the news.js because we need to all the specific category component inside the news.js page
        5) after that we can pass the category we want from the category props inside the news.js
        6) here if we type => category ="entertainment" then it will render all the news that are in entertainment category inside the news.js
        7) We have then settled the date and author of the article using props inside newsItem.js


Mounting and other LifeCycle methods in react => 

        1) componentDidMount() => this method runs after the component output has been rendered to the DOM
        2) componentDidUpdate() => this method is invoked as soon as the updating happens
        3) componentWillUnmount() => this method is called just before the component is unmounted and destroyed

Adding Loading bar inside the website (like the red line on the top of youtube website while loading) =>

        1) install the package using npm install --save react-top-loading-bar
        2) import the package inside the App.js
        3) apply it after the <Navbar /> in App.js