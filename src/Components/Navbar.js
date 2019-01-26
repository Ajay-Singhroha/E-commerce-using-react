import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class  extends Component {
  render() {
    return (
      <div>
        <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to='/'>
          <img src={logo} alt= "Home" className="navbar-brand"></img>
        </Link>
        <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
        <Link to="/" className="nav-link">Products</Link></li>
        </ul>
        <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
          <i className="fas fa-cart-plus" />
          </span>
          My Cart
          
          </ButtonContainer>
          </Link>
        </NavWrapper>
      </div>
    )
  }
}


const NavWrapper=styled.nav`
  background:var(--mainBlue);
  .nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
  }

`
