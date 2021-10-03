<template>
    <div class="one">
        <h3>Person List one</h3>
        <ul>
            <li v-for="person in persons" :key="person.name+Math.random()">{{person.name}} ({{ person.city }})</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['persons'],
    data(){
        return{
            
        }
    }
}
</script>