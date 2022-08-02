import React from "react";
// import {FontAwesomeIcon} from 'react-fontawesome'

function Footer() {

  return (
    <footer className='footer'>
      <div className="footer-contact">
        <a href="https://www.facebook.com/profile.php?id=100078885734879" target="_blank"><i className="fa fa-facebook-square"></i> Facebook</a>
        <a href="mailto:kire_val@yahoo.com.com"><i className="fa fa-at"></i> Email</a>
        <a href="tel:389-70-377-090"><i class="fa fa-mobile"></i> Telefon</a>
      </div>
      <p>
        Copyright @{new Date().getFullYear()}
      </p>
    </footer>)
}

export default Footer