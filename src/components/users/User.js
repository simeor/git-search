import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const User = ({user, loading, getUser, getUserRepos, repos,match}) => {
  useEffect( () => {
    getUser(match.params.login);
  }, []);
  const {name, avatar_url, location, bio, blog, login, html_url,followers, following, public_repos, public_gists, hireable, company} = user;

  if(loading) return <Spinner />;
  return(
  <div>
    <div>
      < Link to="/" className="btn btn-light"> Back</Link>
      Hireable: {hireable ? "Yes" : "No"}
    </div>

    <div className="card grid-2">
      <div className="all-center">
        <img src={avatar_url} className="round-img" style={{width: '150px'}} />
        <h1>{name}</h1>
        <p>{location}</p>
        </div>
          {bio && <div>
          <h3>Bio</h3>
          <p>{bio}</p>
          < a href={html_url} className="btn btn-dark my-1">Github</a>
          <ul>
            <li>
              {login && <div>
                <strong>Username: </strong>{login}
              </div>}
            </li>
            <li>
              {company && <div>
                <strong>Company: </strong>{company}
              </div>}
            </li>
            <li>
              {blog && <div>
                <strong>Site: </strong> <a href={blog}>{blog}</a>
              </div>}
            </li>
          </ul>
        </div>}
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">
          Followers: {followers}
        </div>

        <div className="badge badge-dark">
          Following: {following}
        </div>

        <div className="badge badge-success">
          Public Repos: {public_repos}
        </div>
      </div>
  </div>
  )
}

  User.propTypes ={
    loading: PropTypes.bool,
    user: PropTypes.object,
    getUser: PropTypes.func,
    getUserRepos: PropTypes.func
  }

export default User
