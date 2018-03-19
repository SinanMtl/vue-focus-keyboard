<template>
  <transition name="slideUp">
    <div class="KeyboardComponent" v-if="show" :class="theme" @click="input.focus()" @contextmenu.prevent>
      <div class="buttons" :style="{width: keyboardWidth}">
        <div class="key-row" v-for="(row, index) in currentButtons" :key="index">
          <button type="button" v-for="(key, i) in row" :key="i" :class="getClass(key)" :style="getStyle(key)" @mousedown="pressAndHold($event, key)" @mouseup="pressAndHold($event, key)" @click.prevent="buttonPress(key)" @touchstart="pressAndHold($event, key)" @touchend="pressAndHold($event, key)">
            <div class="text">
              <svg class="icon" v-if="getIconByMetaKey(key)">
                <use :xlink:href="`static/icons.svg#icon-${getIconByMetaKey(key)}`"></use>
              </svg>
              <template v-else-if="/(ctrl(l|r))/g.test(key)">Ctrl</template>
              <template v-else-if="key === '{alt}'">Alt</template>
              <template v-else-if="key === '{altgr}'">Alt Gr</template>
              <template v-else-if="/(space|empty)/g.test(key)">&nbsp;</template>
              <template v-else>{{ key }}</template>
            </div>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import layout from './layout'

  let eventKeyDown = new Event('keydown')
  let eventKeyUp = new Event('keyup')
  let eventKeyPress = new Event('keypress')
  let eventInput = new Event('input')
  let isHoldDown = false

  const debounce = (func, wait, immediate) => {
    let timeout
    return function () {
      let context = this
      let args = arguments
      let later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      let callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  export default {
    name: 'FocusKeyboard',
    props: {
      keyboardWidth: {
        type: [String, Number],
        default: '100%'
      },
      theme: {type: String, default: ''},
      keyboard: {
        type: [Object, String],
        default () { return 'us_international' }
      }
    },
    data () {
      return {
        show: false,
        shift: false,
        capslock: false,
        ctrl: false,
        alt: false,
        input: null
      }
    },
    computed: {
      layout () {
        if (
          typeof this.keyboard === 'object' &&
          this.keyboard.hasOwnProperty('default')
        ) {
          return this.keyboard
        } else {
          if (
            typeof this.keyboard === 'string' &&
            layout.hasOwnProperty(this.keyboard)
          ) {
            return layout[this.keyboard]
          } else {
            return layout[layout.default]
          }
        }
      },
      buttons () {
        let list = {}
        for (let stateName in this.layout) {
          let state = this.layout[stateName]
          if (stateName !== '_metaKeys') {
            list[stateName] = []
            state.forEach((row, key) => {
              list[stateName].push(row.split(' '))
            })
          }
        }
        return list
      },
      currentButtons () {
        let state = 'default'
        if (this.shift) {
          state = 'shifted'
          if (this.capslock) {
            state = 'shifted_capsed'
          } else if (this.alt) {
            state = 'shifted_alted'
          }
        } else if (this.capslock) {
          state = 'capsed'
        } else if (this.alt) {
          state = 'alted'
        }
        return this.buttons[state]
      }
    },
    methods: {
      getIconByMetaKey (key) {
        let metaIconKeys = [
          '{backspace}', '{shiftl}',
          '{shiftr}', '{enter}',
          '{capslock}', '{tab}'
        ]
        if (metaIconKeys.indexOf(key) > -1) {
          let keyName = key.replace(/({|})/g, '')
          if (/(shift(l|r))/.test(keyName)) {
            return 'shift'
          }
          return keyName
        } else {
          return null
        }
      },
      getClass (key) {
        if (
          (this.capslock && key === '{capslock}') ||
          (this.ctrl && /ctrl(l|r)/g.test(key)) ||
          (this.alt && /alt(gr)?/g.test(key)) ||
          (this.shift && /shift(l|r)?/g.test(key))
        ) return 'active'
        return ''
      },
      getStyle (key) {
        let keyName = key.replace(/({|})/g, '')
        let metaKeys = layout._metaKeys

        if (this.layout.hasOwnProperty('_metaKeys')) {
          metaKeys = Object.assign({},
            metaKeys,
            this.layout._metaKeys
          )
        }

        if (metaKeys.hasOwnProperty(keyName)) {
          let metaKey = metaKeys[keyName]
          return {flex: metaKey.width}
        } else {
          return {}
        }
      },
      open () {
        this.show = true
      },
      close () {
        this.show = false
        this.input = null
        clearInterval(isHoldDown)
        isHoldDown = false
      },
      moveCursor (start, end) {
        if (this.input) {
          this.input.selectionStart = start || 0
          this.input.selectionEnd = end || start || 0
        }
      },
      isInput (input) {
        let expectedElements = ['INPUT', 'TEXTAREA']
        let isContentEditable = input.getAttribute('contenteditable')
        return expectedElements.indexOf(input.nodeName) > -1 || !!isContentEditable
      },
      isSupportedType (input) {
        let expectedTypes = [
          'text', 'password',
          'search', 'tel', 'url',
          'email', 'number'
        ]
        let isContentEditable = input.getAttribute('contenteditable')
        let isTextarea = input.nodeName === 'TEXTAREA'
        return expectedTypes.indexOf(input.type) > -1 || !!isContentEditable || isTextarea
      },
      backspace (cursor) {
        let val = this.input.value || this.input.innerHTML
        let splitted = val.split('')
        splitted.splice(cursor.start, cursor.end - cursor.start)
        return splitted.join('')
      },
      setMetaKey (key) {
        switch (key) {
          case '{capslock}':
            this.capslock = !this.capslock
            break

          case '{shiftl}':
          case '{shiftr}':
            this.shift = !this.shift
            break

          case '{ctrll}':
          case '{ctrlr}':
            this.ctrl = !this.ctrl
            break

          case '{alt}':
          case '{altgr}':
            this.alt = !this.alt
            break
        }
      },
      setKey (cursor, key) {
        let val = this.input.value || this.input.innerHTML
        let splitted = val.split('')
        splitted.splice(cursor.start, 0, key)
        return splitted.join('')
      },
      ctrlCombination (key = '') {
        if (typeof key !== 'string') return false
        switch (key.toLowerCase()) {
          case 'a':
            this.input.select()
            break

          case 'z':
            document.execCommand('undo', false, null)
            break

          case 'y':
            document.execCommand('redo', false, null)
            break

          case 'c':
            document.execCommand('copy', false, null)
            break

          case 'x':
            document.execCommand('cut', false, null)
            break
        }
        this.ctrl = false
      },
      setValue (key, cursor) {
        let val = ''
        switch (key) {
          case '{backspace}':
            if (cursor.start === cursor.end) cursor.start -= 1
            val = this.backspace(cursor)
            break
  
          case '{space}':
            val = this.setKey(cursor, ' ')
            break
  
          case '{tab}':
            val = this.setKey(cursor, '\t')
            break
  
          case '{enter}':
            if (this.input.nodeName === 'TEXTAREA') {
              val = this.setKey(cursor, "\n")
            } else {
              if (this.input.form) {
                this.input.form.submit()
              }
            }
            break
  
          default:
            val = this.setKey(cursor, key)
            break
        }

        if (key === '{enter}' && this.input.nodeName !== 'TEXTAREA') {
          return false
        }

        let isContentEditable = !!this.input.getAttribute('contenteditable')
        if (isContentEditable) {
          this.input.innerHTML = val
        } else {
          this.input.value = val
        }
      },
      buttonPress (key) {
        if (!this.input) return
        let cursor = this.getCursor()
        let notWrite = [
          '{shiftl}', '{shiftr}',
          '{capslock}', '{ctrll}',
          '{ctrlr}', '{alt}', '{altgr}'
        ]

        if (notWrite.indexOf(key) > -1) {
          this.setMetaKey(key)
          return
        }

        if (this.ctrl) {
          this.ctrlCombination(key)
          return
        }

        this.shift = false
        this.ctrl = false
        this.alt = false

        this.setValue(key, cursor)
        this.triggerEvents()
        this.input.focus()

        if (key === '{backspace}') {
          this.moveCursor(cursor.start)
        } else {
          this.moveCursor(cursor.start + 1, cursor.end + 1)
        }
      },
      triggerEvents () {
        this.input.dispatchEvent(eventInput)
        this.input.dispatchEvent(eventKeyDown)
        this.input.dispatchEvent(eventKeyPress)
        this.input.dispatchEvent(eventKeyUp)
      },
      pressAndHold: debounce(function (e, key) {
        if (key === '{backspace}') {
          if (e.type === 'mouseup' || e.type === 'touchend') {
            clearInterval(isHoldDown)
            isHoldDown = false
          } else {
            if (!isHoldDown) {
              isHoldDown = setInterval(() => {
                this.buttonPress(key)
              }, 30)
            }
          }
        }
      }, 150),
      getCursor () {
        if (this.isSupportedType(this.input)) {
          let pos = {
            start: this.input.selectionStart || 0,
            end: this.input.selectionEnd || 0
          }
          if (pos.end < pos.start) {
            pos.end = pos.start
          }
          return pos
        } else {
          let val = this.input.value || this.input.innerHTML
          return {
            start: val.length,
            end: val.length
          }
        }
      },
      getParents (el, parentSelector) {
        // If no parentSelector defined will bubble up all the way to *document*
        if (parentSelector === undefined) {
          parentSelector = document
        }

        let parents = []
        let p = el.parentNode

        while (p !== parentSelector) {
          let o = p
          parents.push(o)
          p = o.parentNode
        }
        parents.push(parentSelector) // Push that parentSelector you wanted to stop at
        return parents
      },
      onFocusInput (e) {
        if (this.isInput(e.target) && this.isSupportedType(e.target)) {
          this.input = e.target
          this.input.addEventListener('keydown', () => {})
          this.open()
        }
      },
      onDocumentClick (e) {
        // console.log(this.getParents(e.target))
        if (
          this.getParents(e.target).find(x => x === this.$el) ||
          e.target === this.$el ||
          e.target === this.input
        ) {
          return false
        }
        if (this.isInput(e.target) && this.isSupportedType(e.target)) {
          this.input = e.target
          return false
        }
        if (this.input) this.input.blur()
        this.close()
      },
      initEvents () {
        // Watching focues input
        document.addEventListener('focus', this.onFocusInput, true)
        document.addEventListener('click', this.onDocumentClick)
      }
    },
    mounted () {
      this.initEvents()
    }
  }
</script>

<style scoped>
  .KeyboardComponent
  .KeyboardComponent *{
    box-sizing: border-box;
  }
  .KeyboardComponent{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 300;
    width: 100%;
    padding: 2.5px;
    font-size: 22px;
    background-color: #FFF;
    border: 1px solid #f1f1ff;
  }

  .KeyboardComponent .icon {
    width: 1em;
    height: 1em;
    stroke-width: 0;
    fill: currentColor;
    stroke: currentColor;
    display: inline-block;
  }

  .KeyboardComponent .key-row{display: flex;}
  .KeyboardComponent .buttons{width: 100%;}

  .KeyboardComponent button,
  .KeyboardComponent button.enter:after{
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    flex: 50;
    position: relative;
    height: 50px;
    margin: 2.5px;
    border-radius: 3px;
    color: #FFF;
    font-size: 18px;
    font-weight: normal;
    border: 1px solid #000;
    background-color: #333;
    cursor: pointer;
  }

  .KeyboardComponent button:focus{
    outline: none;
  }

  .KeyboardComponent button .text:first-child{padding-top: 2px;}

  .KeyboardComponent button .text.right-bottom{
    right: 5px;
    bottom: 1px;
    font-size: 0.6em;
    position: absolute;
  }

  .KeyboardComponent button.enter{border-radius: 3px 3px 0 3px;}

  .KeyboardComponent button.enter .text{
    top: 5px;
    right: -8px;
    position: relative;
  }

  .KeyboardComponent button.enter:after{
    content: "";
    margin: 0;
    top: 100%;
    right: -1px;
    height: 57px;
    border-top: 0;
    position: absolute;
    border-radius: 0 0 3px 3px;
  }

  .KeyboardComponent button.active,
  .KeyboardComponent button:active,
  .KeyboardComponent button.enter:active:after{
    color: #333;
    background-color: #FFF;
  }

  .KeyboardComponent.light button{
    color: #333;
    border: 1px solid #e8e8e8;
    background-color: #f3f3f3;
  }

  .KeyboardComponent.light button.active,
  .KeyboardComponent.light button:active,
  .KeyboardComponent.light button.enter:active:after{
    color: #FFF;
    border-color: #000;
    background-color: #333;
  }

  .slideUp-enter-active,
  .slideUp-leave-active{
    transition: transform 0.1s ease, opacity 0.1s linear;
  }

  .slideUp-enter,
  .slideUp-leave-to{
    opacity: 0;
    transform: translateY(20px);
  }

  .slideUp-enter-to,
  .slideUp-leave{
    opacity: 1;
    transform: translateY(0);
  }
</style>
