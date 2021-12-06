<template>
  <div class="step4">
    <div class="container">
      <div class="column is-8 is-offset-2">
        <div class="card">
          <header class="card-header">
            <h2 class="card-header-title">
              Step4 以下の内容をご確認ください
            </h2>
          </header>
          <div class="card-content">
            <div class="content">
              <div>
                <p>-性別-</p>
                <p>{{ gender }}</p>
              </div>
              <div>
                <p>-生年月日-</p>
                <p>{{ year + "年" + month + "月" + day + "日"}}</p>
              </div>
              <div>
                <p>現在、生命保険に加入されていますか？</p>
                <p>{{ insurance }}</p>
              </div>
              <div>
                <p>現在入院中ですか。または最近3カ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
                <p>{{ hospitalization }}</p>
              </div>
              <div>
                <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
                <p>{{ history }}</p>
              </div>
              <div>
                <p>-ご相談内容-</p>
                <p>{{ consultation }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="buttons is-justify-content-center mt-5">
          <button @click="$router.push('step3')" class="button is-primary">前へ戻る</button>  
          <button class="button is-primary">送信</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Step4',
  computed : {
    ...mapGetters([
      'gender',
      'year',
      'month',
      'day',
      'insurance',
      'hospitalization',
      'history',
      'consultation'
    ])
  }
}
</script>	