import React from 'react'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
    return (
      <>
      <StyledHero>
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">Home</Link>
        </Banner>
      </StyledHero>
      <RoomContainer/>
      </>
    )
}

export default Rooms
