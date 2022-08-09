import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth } from "./firebase";
export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('shippingAddress');
  // dispatch({
  //     type: USER_SIGNOUT
  // });
}

function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  const handleClick = event => {
    event.currentTarget.disabled = true;
    console.log('button clicked');
  };
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  
  const signOutHandler = () =>{
    dispatch(signout());
}

  return (
    <><div className='header'>
      <Link to="/">
          <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
      </Link>
      
      <div className="header_search">
              <input className="header_searchInput" type="text"></input>
              <SearchIcon className="header_searchIcon"></SearchIcon>
          </div>

          <div className="header_nav">
            <Link to="/login">
            <div onClick={handleAuthenticaton} className="header_option">
              {/* <button>Sign In</button> */}
              <AccountCircleIcon ></AccountCircleIcon>
                {/* <span className="header_optionLineOne">Hello Guest</span>
                <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'} </span> */}
            </div>
            </Link>

            <div className='sign_out'>
              <Link to="/" onclick={signOutHandler}>
              <LogoutIcon ></LogoutIcon>
              </Link>
            </div>
            {/* <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
            </div> */}

            {/* <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Membership</span> */}
            
            </div>
            <Link to="/checkout">
            <div className="header_optionBasket">
              <ShoppingBasketIcon></ShoppingBasketIcon>
              <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
            </div>
            </Link>
          </div>
        {/* </div> */}
          </>
  )
}

export default Header