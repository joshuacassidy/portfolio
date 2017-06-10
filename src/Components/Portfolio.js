import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if(this.props.data){
      var portfolio = this.props.data.projects.map(function(project){
        var link = project.url

          var imageUrl = 'images/portfolio/'+project.image;
        return                <a title="Styleshout" href={project.url}><div className="columns portfolio-item">
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
            <h1>Check Out Some of the Projects I've Created.</h1>

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
