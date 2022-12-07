import React, { Component } from 'react'

export class NewsItem extends Component {
  
    
  render() {
      
    return (
      <>
      <div className='my-3'>
          <div className="card">
            <img src={this.props.ImageUrl ? this.props.ImageUrl : "https://www.hdnicewallpapers.com/Walls/Big/Nature%20and%20Landscape/Beautiful_Sunrising_Nature_Image.jpg"} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{this.props.heading}</h5>
                <h5 className="card-title">{this.props.title}...</h5>
                <p className="card-text">{this.props.description}...</p>
                <p className='card-text'><small className='text-muted'>By {this.props.author ? this.props.author : "unknown"} on {new Date(this.props.date).toGMTString()}</small></p>
                <a href={this.props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                
            </div>
          </div>
        
      </div>
      
      </>
    )
  }
}

export default NewsItem;