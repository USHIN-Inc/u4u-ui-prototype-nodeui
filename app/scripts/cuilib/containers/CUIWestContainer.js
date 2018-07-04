class CUIWestContainer extends CUIContainer {
  constructor() {
    super();
    this._layout = 'west';
  }
  render() {
    [0].forEach(function(container){
      this._rendered += this._components[container].render();
    }, this);

    this._rendered += '<div class="cui-container-' + this._layout + '-inner">';
    [1, 2, 4, 5, 7, 8].forEach(function(container){
      this._rendered += this._components[container].render();
    }, this);
    this._rendered += '</div>';

    [3, 6].forEach(function(container){
      this._rendered += this._components[container].render();
    }, this);

    return '<div class="cui-container cui-container-' + this._layout + '">'
      + this._rendered
      + '</div>';
  }
}
