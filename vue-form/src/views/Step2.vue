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
                      <input type="radio" v-model="form.insurance" value="yes">
                      はい
                    </label>
                    <label class="radio">
                      <input type="radio" v-model="form.insurance" value="no">
                      いいえ
                    </label>
                  </div>
                </div>
              </div>
              <div v-if="form.insurance">              
                <p>現在入院中ですか。または最近3カ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
                <div class="field">
                  <div class="control">
                    <label class="radio">
                      <input type="radio" v-model="form.hospitalization" value="yes">
                      はい
                    </label>
                    <label class="radio">
                      <input type="radio" v-model="form.hospitalization" value="no">
                      いいえ
                    </label>
                  </div>
                </div>
              </div> 
              <div v-if="form.hospitalization">             
                <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
                <div class="field">
                  <div class="control">
                    <label class="radio">
                      <input type="radio" v-model="form.history" value="yes">
                      はい
                    </label>
                    <label class="radio">
                      <input type="radio" v-model="form.history" value="no">
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
        <!-- <pre><code>{{ form }}</code></pre> -->
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step2',
  computed : {
    form : function(){
      return this.$store.state.form
    }
  }
}
</script>	