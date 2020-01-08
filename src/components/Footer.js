import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://www.github.com/augustopablo"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:augustopabloarg@gmail.com?subject=Hello Pablo, how are you?"
                target="_top"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Simple personal Website</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
