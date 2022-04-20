<template>
    <form class="compound-interest-form" @submit.prevent="submittedForm">

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
            submittedForm() {
                let data = {
                    rate: this.rate,
                    duration: this.duration,
                    capital: this.capital,
                }

                this.$emit('compound-interest-form-submitted', data)

                this.rate = ''
                this.duration = ''
                this.capital = ''
            }
        }
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