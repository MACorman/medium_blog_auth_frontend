import React from 'react'

function Profile(props) {
    let { username, avatar, bio } = props.currentUser.user
    return(
        <>
            <h3>{username}</h3>
            <img src={avatar} alt='' style={{height: 200, width: 200}}/>
            <div>{bio}</div>
        </>
    )
    
}

export default Profile