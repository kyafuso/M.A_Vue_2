<template>
  <div class="step2">
    <div class="container">
      <div class="column is-8 is-offset-2">
        <div class="card">
          <header class="card-header">
            <h2 class="card-header-title">
              Step2 以下にお答えください
            </h2>
          </header>
          <div class="card-content">
            <div class="content">
              <div>
                <p>現在、生命保険に加入されていますか？</p>
                <div class="field">
                  <div class="control">
                    <label class="radio">
                      <input type="radio" @click="openHospitalization" v-model="insurance" value="はい">
                      はい
                    </label>
                    <label class="radio">
                      <input type="radio" @click="openHospitalization" v-model="insurance" value="いいえ">
                      いいえ
                    </label>
                  </div>
                </div>
              </div>
              <div v-if="isOpenHospitalization">              
                <p>現在入院中ですか。または最近3カ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
                <div class="field">
                  <div class="control">
                    <label class="radio">
                      <input type="radio" @click="openHistory" v-model="hospitalization" value="はい">
                      はい
                    </label>
                    <label class="radio">
                      <input type="radio" @click="openHistory" v-model="hospitalization" value="いいえ">
                      いいえ
                    </label>
                  </div>
                </div>
              </div> 
              <div v-if="isOpenHistory">             
                <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
                <div class="field">
                  <div class="control">
                    <label class="radio">
                      <input type="radio" v-model="history" value="はい">
                      はい
                    </label>
                    <label class="radio">
                      <input type="radio" v-model="history" value="いいえ">
                      いいえ
                    </label>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <div class="buttons is-justify-content-center mt-5">
          <button @click="$router.push('step1')" class="button is-primary">前へ戻る</button>  
          <button @click="$router.push('step3')" class="button is-primary">次へ進む</button>
        </div>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step2',
  data: function(){
    return {
      isOpenHospitalization : false,
      isOpenHistory : false
    }
  },
  methods: {
    openHospitalization: function(){
      this.isOpenHospitalization = true
    },    
    openHistory: function(){
      this.isOpenHistory = true
    },
  },
  computed : {
    insurance: {
      get() {
        return this.$store.state.insurance;
      },
      set(value) {
        this.$store.commit('setInsurance', value);
      }
    },
    hospitalization: {
      get() {
        return this.$store.state.hospitalization;
      },
      set(value) {
        this.$store.commit('setHospitalization', value);
      }
    },
    history: {
      get() {
        return this.$store.state.history;
      },
      set(value) {
        this.$store.commit('setHistory', value);
      }
    }
  }
}
</script>	