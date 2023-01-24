<!-- routify:options preload="proximity" -->
<script>
    import LoginForm from "../components/LoginForm.svelte";
    import { user } from "../components/Auth.svelte";
    import Navbar from "../components/Navbar.svelte";
</script>

<div id="{$user === null ? "page-wrapper" : ""}">
<Navbar></Navbar>

{#if ($user === null)}
    <style>
        background-color: blue;
    </style>
    <LoginForm></LoginForm>
{:else}
    <slot />
{/if}

</div>

<style>
    #page-wrapper {
        width: 100vw;
        height: 100vh;
        /* background-color: #888; */
    }
</style>