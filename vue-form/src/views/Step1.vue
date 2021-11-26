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
                    <input type="radio" v-model="form.gender" value="male">
                    男性
                  </label>
                  <label class="radio">
                    <input type="radio" v-model="form.gender" value="female">
                    女性
                  </label>
                </div>
              </div> 
              <p>-生年月日-</p>
              <div class="is-flex is-justify-content-center is-align-items-center">
                <div class="select">
                  <select v-model="form.year">
                    <option value="1980">1980年（昭和55）</option>
                    <option value="1981">1981年（昭和56）</option>
                    <option value="1982">1982年（昭和57）</option>
                    <option value="1983">1983年（昭和58）</option>
                    <option value="1984">1984年（昭和59）</option>
                    <option value="1985">1985年（昭和60）</option>
                    <option value="1986">1986年（昭和61）</option>
                    <option value="1987">1987年（昭和62）</option>
                    <option value="1988">1988年（昭和63）</option>
                    <option value="1989">1989年（平成1）</option>
                    <option value="1990">1990年（平成2）</option>
                    <option value="1991">1991年（平成3）</option>
                    <option value="1992">1992年（平成4）</option>
                    <option value="1993">1993年（平成5）</option>
                    <option value="1994">1994年（平成6）</option>
                    <option value="1995">1995年（平成7）</option>
                    <option value="1996">1996年（平成8）</option>
                    <option value="1997">1997年（平成9）</option>
                    <option value="1998">1998年（平成10）</option>
                    <option value="1999">1999年（平成11）</option>
                    <option value="2000">2000年（平成12）</option>
                    <option value="2001">2001年（平成13）</option>
                    <option value="2002">2002年（平成14）</option>
                    <option value="2003">2003年（平成15）</option>
                    <option value="2004">2004年（平成16）</option>
                    <option value="2005">2005年（平成17）</option>
                    <option value="2006">2006年（平成18）</option>
                    <option value="2007">2007年（平成19）</option>
                    <option value="2008">2008年（平成20）</option>
                    <option value="2009">2009年（平成21）</option>
                    <option value="2010">2010年（平成22）</option>
                  </select>
                </div>
                <div>年</div>
                <div class="select">
                  <select v-model="form.month">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                </div>
                <div>月</div>
                <div class="select">
                  <select v-model="form.day">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
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
        <!-- <pre><code>{{ form }}</code></pre> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step1',
  computed : {
    form : function(){
      return this.$store.state.form
    }
  }
}
</script>	