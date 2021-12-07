<template>
  <div class="step3">
    <div class="container">
      <div class="column is-8 is-offset-2">
        <div class="card">
          <header class="card-header">
            <h2 class="card-header-title">
              Step3 ご相談内容をご記入ください
            </h2>
          </header>
          <div class="card-content">
            <div class="content">
              <p>-ご相談内容-</p>
              <div class="field">
                <div class="control">
                  <textarea v-model="consultation" class="textarea"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="buttons is-justify-content-center mt-5">
          <button @click="$router.push('step2')" class="button is-primary">前へ戻る</button>  
          <button @click="$router.push('step4')" class="button is-primary">次へ進む</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step3',
  computed : {
    consultation: {
      get() {
        return this.$store.getters.consultation;
      },
      set(value) {
        this.$store.commit('setConsultation', value);
      }
    }
  }
}
</script>	