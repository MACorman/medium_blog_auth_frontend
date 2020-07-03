import React from 'react'

function Profile(props) {
    return(
        <>
            <h3>{props.currentUser.username}</h3>
            <img src={props.currentUser.avatar} alt='' style={{height: 200, width: 200}}/>
            <div>{props.currentUser.bio}</div>
        </>
    )
    
}

export default Profile