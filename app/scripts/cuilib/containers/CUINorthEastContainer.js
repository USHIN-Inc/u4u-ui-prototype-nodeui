class CUINorthEastContainer extends CUIContainer {
  constructor() {
    super();
    this._layout = 'northeast';
  }
  render() {
    var rendered = '';

    [0, 1, 2].forEach(function(container){
      rendered += this._components[container].render();
    }, this);

    rendered += '<div class="cui-container-' + this._layout + '-inner">';
    [3, 4, 6, 7].forEach(function(container){
      rendered += this._components[container].render();
    }, this);
    rendered += '</div>';

    [5, 8].forEach(function(container){
      rendered += this._components[container].render();
    }, this);

    return '<div class="cui-container cui-container-' + this._layout + '">'
      + rendered
      + '</div>';
  }
}
