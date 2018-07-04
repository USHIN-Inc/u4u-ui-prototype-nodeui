class CUINorthContainer extends CUIContainer {
  constructor() {
    super();
    this._layout = 'north';
  }
  render() {
    [0, 1, 2].forEach(function(container){
      this._rendered += this._components[container].render();
    }, this);

    this._rendered += '<div class="cui-container-' + this._layout + '-inner">';
    [3, 4, 5, 6, 7, 8].forEach(function(container){
      this._rendered += this._components[container].render();
    }, this);
    this._rendered += '</div>';

    return '<div class="cui-container cui-container-' + this._layout + '">'
      + this._rendered
      + '</div>';
  }
}
