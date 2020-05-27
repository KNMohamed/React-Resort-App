import React, { Component } from 'react'
import Title from './Title'

// Import icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } 
from 'react-icons/fa'

export default class Services extends Component {
  state = {
    services: [
      { 
        icon: <FaCocktail/>,
        title: "Free cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, consectetur."
      },
      { 
        icon: <FaHiking/>,
        title: "Endless cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, consectetur."
      },
      { 
        icon: <FaShuttleVan/>,
        title: "Free shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, consectetur."
      },
      { 
        icon: <FaBeer/>,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, consectetur."
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services"/>
        <div className="services-center">
          {this.state.services.map((value, index) =>{
              return <article key={index} className="service">
                <span>{value.icon}</span>
                <h6>{value.title}</h6>
                <p>{value.info}</p>
              </article>
          })}
        </div>
      </section>
    )
  }
}
