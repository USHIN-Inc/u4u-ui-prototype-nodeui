class CUISouthContainer extends CUIContainer {
  constructor() {
    super();
    this._layout = 'south';
  }
  render() {
    this._rendered += '<div class="cui-container-' + this._layout + '-inner">';
    [0, 1, 2, 3, 4, 5].forEach(function(container){
      this._rendered += this._components[container].render();
    }, this);
    this._rendered += '</div>';

    [6, 7, 8].forEach(function(container){
      this._rendered += this._components[container].render();
    }, this);

    return '<div class="cui-container cui-container-' + this._layout + '">'
      + this._rendered
      + '</div>';
  }
}
