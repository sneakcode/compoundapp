<template>
    <h1>Compound Interest</h1>
    <CompoundInterestForm :calculated-compound-interest="displayResult"/>
</template>

<script>
    import CompoundInterestForm from '@/components/CompoundInterestForm.vue'

    export default {
        name: "InputScreen",
        data() {
            return  {
                rate: null
            }
        },
        methods: {
            displayResult(e){
                console.log(e)
            }
        },
        components : {
            CompoundInterestForm
        }
    }
</script>

<style scoped lang="scss">

</style>
