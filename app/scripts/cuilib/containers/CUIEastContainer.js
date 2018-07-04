class CUIEastContainer extends CUIContainer {
  constructor() {
    super();
    this._layout = 'east';
  }
  render() {
    this._rendered += '<div class="cui-container-' + this._layout + '-inner">';
    [0, 1, 3, 4, 6, 7].forEach(function(container){
      this._rendered += this._components[container].render();
    }, this);
    this._rendered += '</div>';

    [2, 5, 8].forEach(function(container){
      this._rendered += this._components[container].render();
    }, this);

    return '<div class="cui-container cui-container-' + this._layout + '">'
      + this._rendered
      + '</div>';
  }
}
