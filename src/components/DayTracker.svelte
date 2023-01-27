<script>
    import { readUserData, writeUserData } from "./Database.svelte";

    let today = new Date(Date.now());
    let selectedDate = new Date(today);
    let selectedDateString = "Today";

    let habits = [];
    
    //readUserData("habits", (val) => { habits = val; });

    let incrementDate = (numDays) => {
        selectedDate.setDate(selectedDate.getDate() + numDays);
        if (selectedDate.getDate() === today.getDate() &&
            selectedDate.getMonth() === today.getMonth() &&
            selectedDate.getFullYear() === today.getFullYear()) {
            selectedDateString = "Today";
        }
        else {
            selectedDateString = selectedDate.getMonth() + 1 + "/" + selectedDate.getDate() + "/" + selectedDate.getFullYear();
        }
    }

    let newHabit = "";

    let addHabit = () => {
        habits = [...habits, {name: newHabit, completed: false}];
        newHabit = "";
        console.log(habits);
    }

    let uploadData = () => {
        //writeUserData("habits", habits);
    }

</script>

<div id="container">
    <div id="date-navbar">
        <button class="arrow"><img class="arrow" alt="Left Arrow" src="left-arrow.svg" on:click={() => incrementDate(-1)}/></button>
        <h2>{selectedDateString}</h2>
        <button class="arrow"><img class="arrow" alt="Left Arrow" src="right-arrow.svg" on:click={() => incrementDate(1)}/></button>
    </div>
    
    <hr>

    <ul>
        {#each habits as habit}
        <li>
            <span>{habit.name}</span>
            <div style="flex-grow: 1"></div>
            <input type="checkbox" bind:checked={habit.completed} on:change={uploadData}/>
        </li>
        {/each}
        <li>
            <form on:submit|preventDefault={addHabit}>
                <input type="text" id="new-habit" placeholder="New habit..." bind:value={newHabit}/>
            </form>
        </li>
    </ul>
</div>

<style>
    :root {
        --peach: rgb(238, 93, 83);
    }
    .arrow {
        height: 1rem;
    }
    #date-navbar {
        display: flex;
        margin: auto;
        text-align: center;
    }
    h2 {
        flex-grow: 1;
        font-size: 1.5rem;
    }
    h2, .arrow {
        display: inline;
    }
    .arrow {
        margin: 0 5px;
        margin-top: 3px;
    }
    hr {
        margin: 5px 0px;
        border: 1px solid var(--peach);
    }
    #container {
        width: 100%;
        height: 100%;
        display: inline-block;
        border-radius: 20px;
        border: 2px solid var(--peach);
        padding: 10px 10px 0 10px;
    }
    ul {
        width: 100%;
    }
    li {
        border: 1px solid black;
        padding: 10px;
        margin: 10px 0;
        border-radius: 10px;
        display: flex;
    }
    form, #new-habit {
        width: 100%;
    }
    #new-habit {
        outline: none;
    }
</style>