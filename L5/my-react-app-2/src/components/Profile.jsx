import React from "react";
import profileImage from "../assets/salman_khan.jpg";

// External css

const style = {

    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(0, 0, 0, 0.9)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '300px',
        margin: '10px',
    },
    
    image: {
        borderRadius: '3%',
        marginBottom: '5px'
    }
    
};

const Profile = () => {
    return (
     
        // Applying external css
        <div style={style.card}>
            <img src={profileImage} alt="Salman Khan" height={200} style={style.image} />

            {/* Applying In-line css */}
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>Salman Khan</h2> 
        </div>
    );
};

export default Profile;
