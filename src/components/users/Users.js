import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users=(props)=>{

  if (props.loading){
    return <Spinner />
  }else{
     return(
      <div style={userStlye}>
        {props.users.map(user=>(
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

Users.propTypes={
  Users: PropTypes.array,
  loading: PropTypes.bool
}

const userStlye={
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}


export default Users
