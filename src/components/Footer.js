import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SocialIcon from './SocialIcon';
import { scrollTo } from '../lib/scroll.js';

class Footer extends Component {
  render() {
    return (
      <footer className="footer flex-parent flex-ac flex-jc flex-row">
        <div className="container pad flex-parent flex-ac">
          <div className="sitemap flex-parent flex-row flex-ac">
            <Link className="nav-type list-item" to="/">
              Portfolio
            </Link>
            <Link className="nav-type list-item" to="/about">
              About
            </Link>
          </div>
          <div className="content-right">
            <div className="social-icons flex-parent flex-row flex-ac">
              <SocialIcon
                href="https://github.com/joewang96"
                targetBlank={true}
                iconClass="icon-github"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/joseph-wang-7b0751129/"
                targetBlank={true}
                iconClass="icon-linkedin"
              />
              <SocialIcon
                href="mailto:wang.jo@husky.neu.edu"
                targetBlank={false}
                iconClass="icon-google"
              />
              <SocialIcon
                href="https://dribbble.com/josephwang"
                targetBlank={true}
                iconClass="icon-dribbble"
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
