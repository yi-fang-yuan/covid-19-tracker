<template>
    <div class="formControl">
        <b-form-select v-on:change="fetchOption($event)">
            <option value="Global">Global</option>
            <option v-for="country in this.getCountries" v-bind:key="country">{{country}}</option>
        </b-form-select>
    </div>

</template>

<script>
    import {mapGetters,mapActions} from 'vuex';
    export default {
        name: "Country",
        computed:{
            ...mapGetters(['getCountries'])
        },
        methods:{
            ...mapActions(['fetchCountries','fetchCountryData','fetchData','fetchCardData']),
            fetchOption(e){
                if (e !== 'Global'){
                    this.fetchCountryData(e);
                    this.fetchCardData(e)
                }
                else{
                    this.fetchData();
                    this.fetchCardData(e)
                }
            },

        },
        created(){
            this.fetchCountries();
        }



    }
</script>

<style scoped>
    .formControl{
        width:30%;
        margin-bottom:30px !important
    }

</style>