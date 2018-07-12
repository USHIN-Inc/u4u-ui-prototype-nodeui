class CUINorthContainer extends CUIContainer {
  constructor() {
    super();
    this._layout = 'north';
  }
  render() {
    var rendered = '';

    [0, 1, 2].forEach(function(container){
      rendered += this._components[container].render();
    }, this);

    rendered += '<div class="cui-container-' + this._layout + '-inner">';
    [3, 4, 5, 6, 7, 8].forEach(function(container){
      rendered += this._components[container].render();
    }, this);
    rendered += '</div>';

    return '<div class="cui-container cui-container-' + this._layout + '">'
      + rendered
      + '</div>';
  }
}
