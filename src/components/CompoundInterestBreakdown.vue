<template>
    <a href="#" class="back" @click="closeBreakdown">back</a>
    <div class="compound-interest-breakdown">
        <div class="daily-breakdown" v-for="(daily, index) in compoundBreakdown" :key="index">
            <p class="day">Day {{ daily.day }}</p>
            <p class="principal">Principal: {{ daily.principal }} pesos</p>
            <p class="rate">Interest Rate: {{ daily.rate*100 }}%</p>
            <p class="increase">New principal: {{ daily.newPrincipal }} pesos</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CompoundInterestBreakdown",
    props: {
        compoundBreakdown: {
            type: Array,
            required: true
        }
    },
    methods: {
        closeBreakdown(){
            this.$emit('close-breakdown')
        }
    }
}
</script>

<style scoped lang="scss">
    .back {
        z-index: 999;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
        padding: 10px;
    }
    .compound-interest-breakdown {
        position: fixed;
        height: 100%;
        width: 100%;
        padding: 40px 10px 10px 10px;
        top: 0;
        left: 0;
        background: #fff;

        display: flex;
        flex-flow: row wrap;
        gap: 5px;

        overflow-x: hidden;
        overflow-y: auto;

        .daily-breakdown {
            border: 1px solid #000;
            padding: 10px;
            width: 100%;
            border-radius: 7px;

            text-align: left;

            .day {
                margin-bottom: 2rem;
            }
        }
    }
</style>
