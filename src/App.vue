<template>
  <div class="App">
    <div class="container">
        <h1>Vue Focus Keyboard Component</h1>
        <div class="row">
          <div class="col">
              <div class="form-group">
                <label>Standart Input</label>
                <input class="form-control" type="text">
              </div>
              <div class="form-group">
                <label>Textarea</label>
                <textarea class="form-control"></textarea>
              </div>
          </div>
        </div>
      <FocusKeyboard></FocusKeyboard>
    </div>
  </div>
</template>

<script>
import FocusKeyboard from './FocusKeyboard.vue'

export default {
  name: 'App',
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
  }

  .col{
    /* flex: 1; */
  }
</style>

