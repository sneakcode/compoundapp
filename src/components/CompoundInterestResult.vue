<template>
    <div class="compound-interest-result">
        <h1>Compound Interest</h1>
        <p>"The compound interest with a starting capital of {{ compoundResult.capital }} pesos over a period of {{ compoundResult.days }} day(s) given a {{ compoundResult.rate }}% interest per day is {{ compoundResult.total }} pesos."</p>
        <p>
            <a href="#" @click.prevent="compoundInterestBreakdown">Breakdown</a> | 
            <a href="#" @click.prevent="closeResult">Close</a>
        </p>
    </div>
</template>

<script>
export default {
    name: "CompoundInterestResult",
    props: {
        compoundResult : {
            type: Object,
            required: true
        }
    },
    methods: {
        compoundInterestBreakdown() {
            this.$emit('compound-interest-breakdown')
        },
        closeResult() {
            this.$emit('close-result')
        }
    }
}
</script>

<style scoped lang="scss">
    .compound-interest-result {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #fff;
        padding: 15px;
        
        p {
            color: #807A7A;
            width: 100%;
        }

        h1 {
            margin-bottom: .5rem;
            width: 100%;
        }
    }
</style>
