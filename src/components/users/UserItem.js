import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserItem = (props) => {

    const {avatar_url,login,html_url} = props.user;

    return(
      <div className="card text-center">
        <img src={avatar_url} className="round-img" style={{width: '70px'}}/>
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className="btn btn-dark">
          More
        </Link>
      </div>
    )
}

UserItem.propTypes={
  user: PropTypes.object
}

export default UserItem
