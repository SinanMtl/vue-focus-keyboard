<template>
  <div class="App">
    <div class="container">
        <h1>Vue Focus Keyboard Component</h1>
        <div class="row">
          <div class="col col-6">
              <div class="form-group">
                <div class="row">
                  <div class="col col-6">
                    <label>Keyboard Type</label>
                    <select class="form-control" v-model="selected_keyboard">
                      <option v-for="(keyboardType, index) in list" :key="index" :value="keyboardType">{{ keyboardType }}</option>
                    </select>
                  </div>

                  <div class="col col-6">
                    <label>Theme</label>
                    <select class="form-control" v-model="theme">
                      <option value="dark">Dark</option>
                      <option value="light">Light</option>
                    </select>
                  </div>

                </div>
              </div>
              <div class="form-group">
                <label>Standard Input</label>
                <input class="form-control" type="text">
              </div>
              <div class="form-group">
                <label>Textarea</label>
                <textarea class="form-control"></textarea>
              </div>
          </div>
        </div>
      <FocusKeyboard :keyboard="selected_keyboard" :theme="theme"></FocusKeyboard>
    </div>
  </div>
</template>

<script>
import FocusKeyboard from '../src/FocusKeyboard'

export default {
  name: 'App',
  data () {
    return {
      selected_keyboard: 'us_international',
      theme: 'dark',
      list: [
        'us_international',
        'turkish_qwerty_pc',
        'numeric',
      ]
    }
  },
  components: {
    FocusKeyboard
  }
}
</script>

<style>
  * {
    box-sizing: border-box
  }

  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    text-align: center;
  }

  .small, small {
    font-size: 80%;
    font-weight: 400;
  }

  label {
    display: inline-block;
    margin-bottom: .5rem;
  }
  
  .form-group {
    margin-bottom: 1em;
    text-align: left;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  
  select.form-control{
    height: 38px;
  }

  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }

  .form-text {
    display: block;
    margin-top: .25rem;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }

  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .text-muted {color: #6c757d!important;}

  .container{
    max-width: 1170px;
    padding: 0 15px;
    margin: 0 auto;
  }

  .row{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 -15px;
  }

  .col{
    padding: 0 15px;
  }

  .col-1{width: 8.333333333333334%;}
  .col-2{width: 16.666666666666668%;}
  .col-3{width: 25%;}
  .col-4{width: 33.333333333333336%;}
  .col-5{width: 41.66666666666667%;}
  .col-6{width: 50%;}
  .col-7{width: 58.333333333333336%;}
  .col-8{width: 66.66666666666667%;}
  .col-9{width: 75%;}
  .col-10{width: 83.33333333333334%;}
  .col-11{width: 91.66666666666667%;}
  .col-12{width: 100%;}
</style>

