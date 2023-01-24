<script>
    import { loginWithGoogle } from "./Auth.svelte";
</script>

<button id="google-login" on:click={loginWithGoogle}><img id="google-logo" src="google.svg" alt="Google Logo">Sign in with Google</button>

<style>
    #google-logo {
        margin-right: 5px;
        padding: 0px;
        width: 24px;
        height: 24px;
    }

    #google-login {
        background-color: white;
        border: none;
        box-shadow: 0px 0px 5px #888;
        display: flex;
        align-items: center;
        margin: 0 auto;
        font-family: 'Roboto';
        color: #555;
        font-size: 0.8rem;
        padding: 6px 8px;
    }

    #google-login:hover, #google-login:active {
        cursor: pointer;
        box-shadow: 0px 0px 5px rgb(10, 117, 216);
    }
</style>