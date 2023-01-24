<script>
    import { signUpWithEmail, signInWithEmail } from './Auth.svelte';
    import GoogleLogin from './GoogleLogin.svelte';

    let email = '';
    let password = '';

    let register = () => signUpWithEmail(email, password);
    let signIn = () => signInWithEmail(email, password);
</script>

<div id="login-form">
    <h2>Login</h2>
    <form on:submit|preventDefault={signIn}>
        <input class="login-field" type="email" id="email" placeholder="Email" bind:value={email}>
        <input class="login-field" type="password" id="password" placeholder="Password" bind:value={password}>
    
        <div id="login-buttons">
            <input id="register-button" type="button" value="Register" on:click={register}>
            <input id="sign-in-button" type="submit" value="Sign in">
        </div>
    </form>
    
    <p>or</p>
    
    <GoogleLogin></GoogleLogin>
</div>

<style>
    #login-form {
        width: 350px;
        margin: auto;
        margin-top: 20px;
        background: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(44,223,145,1) 100%);
        color: white;
        padding: 15px;
        display: flex;
        flex-direction: column;
        font-family: 'Open Sans';
    }

    h2 {
        font-size: 1.5rem;
        padding: 0;
        margin: 0px;
        margin-bottom: 10px;
    }

    .login-field {
        background-color: white;
        color: #111;
        border: none;
        width: 100%;
        margin: 5px 0px;
        padding: 10px 10px;
        outline: none;
    }

    .login-field:focus, .login-field:active {
        outline: none;
        border: none;
    }

    #login-buttons {
        padding: 0;
        margin: 5px 0px;
    }
    
    #login-buttons input{
        width: 50%;
        margin: 0;
        padding: 10px 0;
        border: none;
        cursor: pointer;
    }

    #register-button {
        float: left;
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
    }

    #register-button:hover, #register-button:active {
        background-color: rgba(255, 255, 255, 0.1);
    }

    #sign-in-button {
        float: right;
        background-color: rgba(255, 255, 255, 0.8);
        color: #111;
    }

    #sign-in-button:hover, #sign-in-button:active {
        background-color: rgba(255, 255, 255, 0.7);
    }

    #login-form p {
        text-align: center;
        margin: 10px;
    }
</style>