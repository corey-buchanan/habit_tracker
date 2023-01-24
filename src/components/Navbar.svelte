<script>
    import { user, signUserOut } from "../components/Auth.svelte";
</script>

<div id="title-bar">
    <h1><a href="/index">Habit Tracker</a></h1>
    <div style="flex-grow:1"></div>
{#if ($user != null)}
    <button id="sign-out" on:click={signUserOut}>Sign Out</button>
{/if}
</div>

<style>
    #title-bar {
        background: linear-gradient(135deg, rgba(207,86,86,1) 0%, rgba(255,153,83,1) 100%);
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 10px;
        color: white;
    }

    h1 {
        font-size: 1.5rem;
        padding: 0;
        font-family: 'Lobster';
    }

    #sign-out {
        float: right;
        font-family: 'Open Sans';
        padding: 4px 12px;
        border-radius: 20px;
        border: none;
        background-color: white;
        color: #111;
    }

    #sign-out:hover, #sign-out:active {
        box-shadow: 0px 1px 2px #aaa inset;
        cursor: pointer;
    }
</style>