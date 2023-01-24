<script context="module">
    import { initAuth } from '../auth/index.js';
    export const { user, loginWithGoogle, signUpWithEmail, signInWithEmail, signUserOut } = initAuth();

    user.subscribe(v => console.log(v));
</script>