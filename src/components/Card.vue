<template>
    <div class="mt-3 mb-3">
        <b-card-group deck >
            <b-row align-h="center">
                <b-col>
            <b-card border-variant="success" header="Recovered" align="center">
                <b-card-text ><ICountUp
                    :delay=500
                    :endVal=this.getRecovered
                    :options="{
                        separator:','
                    }"
                />

                </b-card-text>
                <b-card-text class="mt-2">
                    {{ this.getUpdate | moment("dddd, MMMM Do YYYY") }}
                </b-card-text>
            </b-card>
                </b-col>
                <b-col>
            <b-card
                    border-variant="danger"
                    header-border-variant="danger"
                    header-text-variant="danger"
                    header=" Dead"
                    align="center"

            >
                <b-card-text><ICountUp
                        :delay= 500
                        :endVal=this.getDeaths
                        :options="{
                        separator:','
                    }"
                /></b-card-text>
                <b-card-text> {{ this.getUpdate | moment("dddd, MMMM Do YYYY") }}</b-card-text>
            </b-card>
                    </b-col>
                <b-col>
            <b-card
                    border-variant="warning"
                    header="Confirmed"
                    header-bg-variant="transparent"
                    align="center"


            >
                <b-card-text><ICountUp
                        :delay=500
                        :endVal=this.getConfirmed
                        :options="{
                        separator:','
                    }"
                /></b-card-text>
                <b-card-text> {{ this.getUpdate | moment("dddd, MMMM Do YYYY") }}</b-card-text>
            </b-card>
                    </b-col>
            </b-row>
        </b-card-group>
    </div>


</template>

<script>
    import ICountUp from 'vue-countup-v2'
    import {mapGetters} from 'vuex';
    export default {
        name: "Card",
        components:{
            ICountUp
        },
        computed:{
            ...mapGetters(['getConfirmed','getRecovered','getDeaths','getUpdate'])
        },
    }
</script>

<style scoped>
</style>