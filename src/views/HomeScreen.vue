<template>
    <main>
        <h1>Compound Interest</h1>
        <CompoundInterestForm @compound-interest-form-submitted="calculateCompoundInterest"/>
        <CompoundInterestResult v-if="calculated" :compoundResult="result" @compound-interest-breakdown="startCompoundInterestBreakdown" @close-result="closeCompoundInterestResult" />
        <CompoundInterestBreakdown v-if="displayBreakdown" :compoundBreakdown="breakdown" @close-breakdown="closeCompoundInterestBreakdown" />
    </main>
</template>

<script>
    import CompoundInterestForm from '@/components/CompoundInterestForm.vue'
    import CompoundInterestResult from '@/components/CompoundInterestResult.vue'
    import CompoundInterestBreakdown from '@/components/CompoundInterestBreakdown.vue'

    export default {
        name: "HomeScreen",
        data() {
            return  {
                result: null,
                breakdown: null,
                calculated: false,
                displayBreakdown: false
            }
        },
        methods: {

            calculateCompoundInterest(data) {
                console.log(data)
                this.result = {
                    rate: data.rate,
                    capital: data.capital,
                    days: data.duration,
                    total: this.compoundInterest(data.duration, data.rate, data.capital),
                }

                this.breakdown = this.dailyCompoundInterest(data.duration, data.rate, data.capital)
                this.calculated = true
            },
            compoundInterest(days, rate, capital) {
                let compound = capital
                let rateInterest = rate/100
                for(let i = 1; i <= days; i++){
                    compound += (compound * rateInterest)
                }
                return compound
            },
            dailyCompoundInterest(days, rate, capital) {
                let daily = []
                let compound = capital
                let rateInterest = rate/100
                for(let i = 1; i <= days; i++){
                    
                    daily.push({
                        day:i,
                        principal:compound,
                        rate:rateInterest,
                        newPrincipal: compound += (compound * rateInterest)
                    })
                }
                return daily
            },
            startCompoundInterestBreakdown() {
                this.displayBreakdown = true
            },
            closeCompoundInterestBreakdown() {
                this.displayBreakdown = false
            },
            closeCompoundInterestResult() {
                this.calculated = false
            }
        },
        components : {
            CompoundInterestForm,
            CompoundInterestResult,
            CompoundInterestBreakdown
        }
    }
</script>

<style scoped lang="scss">
    main {
        width: 375px;
        margin: 0 auto;
    }
</style>
