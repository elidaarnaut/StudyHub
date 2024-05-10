import React, { useState } from 'react';
import SignUpImage from '../assets/3DSignUp.svg';  // Adjusted the import path

function Login() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        // Add logic to handle login here
    };

    const styles = {
        loginContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            height: '100vh'
        },
        loginForm: {
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2D4263',
            padding: '20px',
            boxSizing: 'border-box'
        },
        form: {
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            width: '450px',
            height: '500px',
            backgroundColor: '#EEEEEE',
            padding: '30px',
            borderRadius: '20px'
        },
        input: {
            padding: '15px',
            fontSize: '16px',
            width: '350px',
            borderRadius: '12px'
        },
        title: {
            fontWeight: 'bold',
            fontSize: '30px',
            color: '#D03D18',  // Removed the duplicate property for color
            marginBottom: '20px'
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        },
        button: {
            padding: '10px',
            backgroundColor: '#D03D18',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            width: '250px',
            borderRadius: '12px'
        },
        imageContainer: {
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'#2D4263'
        },
        imageStyle: {  // Added style for the image
            maxWidth: '100%',  // Ensures image is responsive and does not overflow its container
            height: '93%',    // Maintains aspect ratio
            padding: '20px'   // Adds some padding around the image
        }
    };

    return (
        <div style={styles.loginContainer}>
            <div style={styles.loginForm}>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.title}>Sign Up</div>
                    <input type="text" name="name" placeholder="Name" value={inputs.name} onChange={handleChange} style={styles.input} />
                    <input type="email" name="email" placeholder="Email" value={inputs.email} onChange={handleChange} style={styles.input} />
                    <input type="password" name="password" placeholder="Password" value={inputs.password} onChange={handleChange} style={styles.input} />
                    <div style={styles.buttonContainer}>
                        <button type="submit" style={styles.button}>Login</button>
                    </div>
                </form>
            </div>
            <div style={styles.imageContainer}>
                <img src={SignUpImage} alt="Sign Up" style={styles.imageStyle} />  {/* Applying style to the image */}
            </div>
        </div>
    );
}

export default Login;
