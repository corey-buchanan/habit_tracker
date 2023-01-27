<script context="module">
    import { datastore } from "../database/index.js";
    export const { readUserData, writeUserData } = datastore();
</script>