import React from 'react';

const signupAuth = () => {

    /*axios.post('/api/signup', {
        username: username,
        password: password,
    })
    .then((res) => {
        console.log(res.data);

        if(res.data.success){
            console.log("User registered.");
        }
        else {
            setError(res.data.error);
        }
    })
    .catch(() => {
        setError("An error occured while registering.");
    });*/
};

const SignUp = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    return (
        <div>
            <h1>Signup</h1>

            <div id="SignupBox">
                <div id="username">
                    <input value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                </div>
                <div id="password">
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <button name="button" disabled={!username || !password}
                        onClick={signupAuth}>Register</button>
                </div>
                <div>
                    <a href="/home">Go Back Home</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
