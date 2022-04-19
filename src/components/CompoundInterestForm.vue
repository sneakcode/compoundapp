<template>
    <form class="compound-interest-form" @submit.prevent="calculateCompoundInterest">

        <div class="input">
            <label for="">Interest Rate</label>
            <input class="text" type="text" v-model.number="rate" />
        </div>

        <div class="input">
            <label for="">Duration</label>
            <input class="text" type="text" v-model.number="duration" />
        </div>

        <div class="input">
            <label for="">Capital</label>
            <input class="text" type="text" v-model.number="capital" />
        </div>

        <button type="submit">Calculate Compound Interest</button>

    </form>
</template>

<script>
export default {
        name: "CompoundInterestForm",
        data() {
            return  {
                rate: null,
                duration: null,
                capital: null
            }
        },
        methods: {
            calculateCompoundInterest() {
                let data = {}
                data['totalCompoundInterest'] = this.compoundInterest(this.duration, this.rate, this.capital)
                data['dailyCompoundInterest'] = this.dailyCompoundInterest(this.duration, this.rate, this.capital)

                this.$emit('calculated-compound-interest', data)

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
            }
        },
    }
</script>


<style scoped lang="scss">
    .compound-interest-form {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        gap: 25px;
        justify-content: center;
        align-items: center;

        .input {
            width: 100%;
            .text {
                height: 36px;
            }
            label, .text {
                display: block;
                width: 100%;
            }
            label {
                text-align: left;

            }
        }
    }
</style>