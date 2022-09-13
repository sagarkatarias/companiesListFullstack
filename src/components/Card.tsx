import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
} from 'mdb-react-ui-kit';

const Card = ({ companyData }) => {
  const { name, email, specialties, city, logo } = companyData;
  return (
    <MDBCard className='mt-3'>
      <MDBRipple
        rippleColor='light'
        rippleTag='div'
        className='bg-image hover-overlay'
      >
        <MDBCardImage
          src={logo}
          fluid
          alt='cat'
        />
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{name}</MDBCardTitle>
        <div className='d-flex flex-row'>
          <MDBCardText>Speciality:- </MDBCardText>
          <MDBCardText>{specialties}</MDBCardText>
        </div>
        <div className='d-flex flex-row'>
          <MDBCardText>City:- </MDBCardText>
          <MDBCardText>{city}</MDBCardText>
        </div>
        <div className='d-flex flex-row'>
          <MDBCardText>Email:- </MDBCardText>
          <MDBCardText>{email}</MDBCardText>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;
