class CUISouthContainer extends CUIContainer {
  constructor() {
    super();
    this._layout = 'south';
  }
  render() {
    var rendered = '';

    rendered += '<div class="cui-container-' + this._layout + '-inner">';
    [0, 1, 2, 3, 4, 5].forEach(function(container){
      rendered += this._components[container].render();
    }, this);
    rendered += '</div>';

    [6, 7, 8].forEach(function(container){
      rendered += this._components[container].render();
    }, this);

    return '<div class="cui-container cui-container-' + this._layout + '">'
      + rendered
      + '</div>';
  }
}
