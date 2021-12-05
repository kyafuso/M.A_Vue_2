<template>
  <div class="step1">
    <div class="container">
      <div class="column is-8 is-offset-2">
        <div class="card">
          <header class="card-header">
            <h2 class="card-header-title">
              Step1 お客様の情報を入力してください
            </h2>
          </header>
          <div class="card-content">
            <div class="content">
              <p>-性別-</p>
              <div class="field">
                <div class="control">
                  <label class="radio">
                    <input type="radio" v-model="gender" value="male">
                    男性
                  </label>
                  <label class="radio">
                    <input type="radio" v-model="gender" value="female">
                    女性
                  </label>
                </div>
              </div> 
              <p>-生年月日-</p>
              <div class="is-flex is-justify-content-center is-align-items-center">
                <div class="select">
                  <select v-model="year">
                    <option v-for="year in years" :key="year.seireki" :value="year.seireki">{{ year.seireki + "（" + year.wareki + "）"}}</option>
                  </select>
                </div>
                <div>年</div>
                <div class="select">
                  <select v-model="month">
                    <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                </select>
                </div>
                <div>月</div>
                <div class="select">
                  <select v-model="day">
                    <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
                  </select>
                </div>
                <div>日</div>
              </div>
            </div>
          </div>
        </div>
        <div class="buttons is-justify-content-center mt-5">
          <button @click="$router.push('Step2')" class="button is-primary">次へ進む</button>
        </div>
        <!-- <pre><code>{{ state }}</code></pre> -->
      </div>
    </div>
  </div>
</template>

<script>
import {years, months, days} from "../definition.js"

export default {
  name: 'Step1',
  data: function(){
    return {
      years : years,
      months : months,
      days : days
    }
  },
  computed : {
    gender: {
      get() {
        return this.$store.state.gender;
      },
      set(value) {
        this.$store.commit('setGender', value);
      }
    },
    year: {
      get() {
        return this.$store.state.year;
      },
      set(value) {
        this.$store.commit('setYear', value);
      }
    },
    month: {
      get() {
        return this.$store.state.month;
      },
      set(value) {
        this.$store.commit('setMonth', value);
      }
    },
    day: {
      get() {
        return this.$store.state.day;
      },
      set(value) {
        this.$store.commit('setDay', value);
      }
    }
  }
}
</script>	