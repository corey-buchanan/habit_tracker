<script>
    import { metatags } from '@roxi/routify';
    import DayTracker from '../components/DayTracker.svelte';
    
    metatags.title = 'Habit Tracker'
    metatags.description = '75 Day Healthy Habits Challenge'
</script>

<div id="day-tracker-widget">
    <DayTracker></DayTracker>
</div>

<style>
    #day-tracker-widget {
        width: 50%;
        min-width: 350px;
        margin: auto;
        margin-top: 20px;
    }
</style>