import React from 'react';

const Profile = (props) => {
    return (
        <div>
         <h1>{props.data.name}</h1>
            <p>{props.data.Bio}
        <div onClick={()=>props.affiche(props.data.name)} 
        style={{
            width:"20px" ,
            height:"20px",
            borderRadius : "50%",
            backgroundColor:'green',
    

        }
        }
        ></div></p>
        {props.children}
        </div>
    )
}
export default Profile;