import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.png'
import SocialLinks from './SocialLinks'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="RodeoCat"
          />
 </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/tech">
                        Latest Tech Views
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/cycle">
                        Cycling Blog
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
