class Slider extends HTMLElement {
    constructor() {
        super();
    }
    static get observedAttributes() {
        return ['min', 'max'];
    }
    set display_value(val) {
        this._slider.value = val;
        this._number.value = val;
    }
    get value() {
        return this._slider.value;
    }
    
    set value(val) {
        this._slider[0].value = val;
    }
    connectedCallback() {
        var shadowRoot = this.attachShadow({mode: 'open'});
        var min = this.getAttribute('min');
        var max = this.getAttribute('max');
        var step = this.getAttribute('step');
        if(this.hasAttribute('label')) {
            var label = this.getAttribute('label');
            $('<label for="slider">' + label + '</label>').appendTo(shadowRoot);
        }
        
        this._slider = $('<input name="slider" type="range" step="'+step+'" min="'+min+'" max="'+max+'"/>').appendTo(shadowRoot)[0];
        this._number = $('<input name="number" type="number" step="'+step+'" min="'+min+'" max="'+max+'"/>').appendTo(shadowRoot)[0];
        var slider = this;
        this._slider.onchange = function () {
            var val = slider._slider.value;
            slider._number.value = val;
            slider.dispatchEvent(new CustomEvent('change'));
        };
        this._slider.oninput = function () {
            var val = slider._slider.value;
            slider._number.value = val;
        };
        this._number.onchange = function () {
            var val = slider._number.value;
            slider._slider.value = val;
            slider.dispatchEvent(new CustomEvent('change'));
        };
    }
  }
  
customElements.define('ui-slider', Slider);