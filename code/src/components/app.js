import React from "react"

class App extends React.Component {

  render() {
    return (
      <div>
        <header>
         <p>Home</p>
          <p>Technology</p>
          <p>Creativity</p>
          <p>Entrepreneurship</p>
          <p>Self</p>
          <p>Culture</p>
          <p>Digital design</p>
          <p>Popular on Medium</p>
          <p>Politics</p>
          <p>More</p>
          <button className = "green-button" >Get started</button>
        </header>

        <div className="hero">
        <div className="hero-left">
          <h1>Interesting ideas that set your mind in motion.</h1>
          <p>Hear directly from the people who know it best.From tech to politics to creativity and more- whatever your interest, we´ve got you covered. </p>
          <button className = "black-button">Get started</button>
          <button className = "white-button">Learn more</button>
        </div>

        <div className="hero-right">
          <img src="./images/medium-image.png"/>
        </div>
      </div>

        <div className="articles-main">
        <div className="article">
        <img className="image" src="./images/medium-image-puff-1.jpeg"/>
        <div className="content">
          <h2>The boy who tamed the sea</h2>
          <p>Her old collecting she considered discovered. So at parties he warrant oh staying. Square new horses and put better end. Sincerity collected happiness do is contented</p>
        </div>
        </div>

        <div className="article">
          <img  className="image"src="./images/medium-image-puff-2.png"/>
        <div className="content">
          <h2>The Role of Human Emotions in the Future of Transport</h2>
          <p>Songs in oh other avoid it hours woman style.</p>
        </div>
        </div>

        <div className="article">
          <img className="image" src="./images/medium-image-puff-4.jpeg"/>
        <div className="content">
          <h2>The March of the Losers</h2>
          <p>So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid.</p>
        </div>
        </div>

        <div className="article">
          <img className="image" src="./images/medium-image-puff-3.png"/>
        <div className="content">
          <h2>The burning season</h2>
          <p>So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on cousin ye dinner should in.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

        export default App
