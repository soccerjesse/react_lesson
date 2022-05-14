import Profile from '../images/lastprofile.jpg';
import Cover from '../images/react.png';
import { FaTwitter, FaGithub } from 'react-icons/fa';


export const Header = () => {
  return(
    <header className="main-cover" style={{backgroundImage: `url(${Cover})`}}>
      {/* overlayはカバー画像の上 */}
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div className="profile-thumb" style={{backgroundImage: `url(${Profile})`}}></div>
            <h1 className="title-text">あなたの名前</h1>
            <h3 className="title-text">あなたの肩書(ex.Engineer)</h3>
            <ul className="social-icons">
              <li className="icon-link">
                <a href="https://twitter.com">
                  <FaTwitter color='white' size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://github.com/soccerjesse">
                  <FaGithub color='white' size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}