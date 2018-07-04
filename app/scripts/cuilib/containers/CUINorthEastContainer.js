class CUINorthEastContainer extends CUIContainer {
  constructor() {
    super();
    this._layout = 'northeast';
  }
  render() {
    [0, 1, 2].forEach(function(container){
      this._rendered += this._components[container].render();
    }, this);

    this._rendered += '<div class="cui-container-' + this._layout + '-inner">';
    [3, 4, 6, 7].forEach(function(container){
      this._rendered += this._components[container].render();
    }, this);
    this._rendered += '</div>';

    [5, 8].forEach(function(container){
      this._rendered += this._components[container].render();
    }, this);

    return '<div class="cui-container cui-container-' + this._layout + '">'
      + this._rendered
      + '</div>';
  }
}
