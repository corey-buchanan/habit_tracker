<script>
    import { readUserData, writeUserData } from './Database.svelte';
    import { Checkbox, Loader } from '@svelteuidev/core';

    let today = new Date(Date.now());
    let selectedDate = new Date(today);
    let selectedDateString = "Today";

    let formatDate = (date, delim = '-') => {
        return `${date.getMonth() + 1}${delim}${date.getDate()}${delim}${date.getFullYear()}`;
    }

    let isToday = () => {
        return formatDate(selectedDate) === formatDate(today);
    }

    let incrementDate = (numDays) => {
        selectedDate.setDate(selectedDate.getDate() + numDays);
        if (isToday()) {
            selectedDateString = "Today";
        }
        else {
            selectedDateString = formatDate(selectedDate, '/');
        }
    }

    let retrievedHabits = false;
    let habits = [];

    readUserData("habits", (response) => {
        if (response != null) {
            let allHabits = Object.keys(response).map(habit => {
                return response[habit];
            });
            habits = allHabits;
        }
        retrievedHabits = true;
    });

    $: habits && uploadHabits();

    let newHabit = "";

    let addHabit = () => {
        habits = [...habits, {name: newHabit, completed: false}];
        newHabit = "";
    }

    let uploadHabits = () => {
        if (!retrievedHabits) return;
        writeUserData("habits", habits);
    }

    

</script>

<div id="container">
    <div id="date-navbar">
        <button class="arrow" on:click={() => incrementDate(-1)}>
            <img class="arrow" alt="Left Arrow" src="left-arrow.svg" />
        </button>
        <h2>{selectedDateString}</h2>
        <button class="arrow" disabled={selectedDateString === "Today"} on:click={() => incrementDate(1)}>
            <img class="arrow" alt="Left Arrow" src="right-arrow.svg" />
        </button>
    </div>
    
    <hr>

    <ul>
        {#if retrievedHabits}
            {#each habits as habit}
            <li>
                <span>{habit.name}</span>
                <div style="flex-grow: 1"></div>
                <Checkbox color="var(--peach)" bind:checked={habit.completed} />
            </li>
            {/each}
        {:else}
            <li><div style="margin: auto"><Loader variant="dots" color="orange"/></div></li>
        {/if}
        <li>
            <form on:submit|preventDefault={addHabit}>
                <input disabled={!retrievedHabits} type="text" id="new-habit" placeholder="New habit..." bind:value={newHabit}/>
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
    #new-habit:disabled {
        background-color: white;
    }
</style>