<script>
    import{Line,mixins} from 'vue-chartjs';
    const {reactiveProp} = mixins
    export default {
        extends:Line,
        mixins:[reactiveProp],
        props: {
            chartData: {
                type: Object,
                default: null
            },
        },
        mounted () {
            this.renderChart(this.chartData)
        }
    }
</script>

<style scoped>

</style>
