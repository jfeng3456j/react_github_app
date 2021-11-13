import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


const Users = (props) => {
    const { users, loading } = props;
    
    if (loading) {
        return <Spinner />
    } else {
        return (
            
            <div style={userStyle}>
                {/* https://stackoverflow.com/questions/67529109/array-prototype-map-expects-a-return-value-from-arrow-function-array-callback */}

                {/* https://stackoverflow.com/questions/61636153/meaning-of-curly-braces-in-array-map */}
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
    
}

Users.prototypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1em'
}

export default Users
