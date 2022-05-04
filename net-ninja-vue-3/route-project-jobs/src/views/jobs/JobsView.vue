<template>
    <div class="main-div">
        <h1 class="flex-items-columns">Jobs Lists</h1>
        <div class="flex-items-columns grid-list">
            <div class="grid-items" v-for="(job, i) in jobs" :key="i">
                <h2>{{ job.title }}</h2>
                <h3>{{ job.type }}</h3>
            </div>
        </div>
    </div>
    
</template>

<script>
let jobsList = [
    {title: "Web Developer", id: 1, type: "Software"},
    {title: "Fullstack Developer", id: 2, type: "Software"},
    {title: "Data Scientist", id: 2, type: "Data"}
];


export default {
    data(){
        return {
            jobs: jobsList
        }
    }
}
</script>