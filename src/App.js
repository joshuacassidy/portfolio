import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData:{}
    }
  }

  getResumeData(){
    $.ajax({
      url: 'htt[://localhost:3000/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({resumeData:data})
      }.bind(this),
      error: function(xhr,status,err){
        console.log(err);
        alert(err);
      }
    })
  }

  componetDidMount(){
    this.getResumeData();
  }

  render() {
    console.log(this.state.resumeData)
    return (
      <div className="App">

      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      </div>
    );
  }
}

export default App;
