import React from 'react'
import {Link} from 'react-router'

import api from '../api'

import Header from './Header'
import Banner from './Banner'
import ListItem from './ListItem'

export default React.createClass({
  getInitialState () {
    return {
      tickets: []
    }
  },

  componentDidMount () {
    api.getTickets(this.renderResults)
  },

  renderResults (err, allTickets) {
    console.log(allTickets)
    this.setState({
      tickets: allTickets
    })
  },

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="listWrapper">
          {this.state.tickets.map((tickets) => {
            return <ListItem
            key={tickets.ticketId}
            ticketId={tickets.ticketId}
            donorId={tickets.donorId}
            donorName={tickets.donorName}
            recipientId={tickets.recipientId}
            recipientName={tickets.recipientName}
            address={tickets.address}
            expectedKg={tickets.expectedKg}
            actualKg={tickets.actualKg}
            isComplete={tickets.isComplete}/>
          })}
        </div>
      </div>
    )
  }
})
