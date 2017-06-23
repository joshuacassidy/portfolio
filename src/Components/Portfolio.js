import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if(this.props.data){
      var portfolio = this.props.data.projects.map(function(project){
      var imageUrl = 'images/portfolio/'+project.image;
        return <a title={project.title} href={project.url} key={project.title} ><div className="columns portfolio-item">
                  <div className="item-wrap">
                        <img alt="" src={imageUrl} />
                        <div className="overlay">
                           <div className="portfolio-item-meta">
          					      <h5>{project.title}</h5>
                              <p>{project.category}</p>
          					   </div> 
                        </div>
                  </div>
          		</div></a>
      });
    }
    return (
      <section id="portfolio">
      <div className="row">

         <div className="twelve columns collapsed">
            <h1>CHECK OUT SOME OF THE PROJECTS I'VE CREATED.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          	  {portfolio}

            </div>

         </div>

      </div>

   </section>
    );
  }
}

export default Portfolio;
