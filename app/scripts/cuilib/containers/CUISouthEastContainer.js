class CUISouthEastContainer extends CUIContainer {
  constructor() {
    super();
    this._layout = 'southeast';
  }
  render() {
    var rendered = '';

    rendered += '<div class="cui-container-' + this._layout + '-inner">';
    [0, 1, 3, 4].forEach(function(container){
      rendered += this._components[container].render();
    }, this);
    rendered += '</div>';

    [2, 5, 6, 7, 8].forEach(function(container){
      rendered += this._components[container].render();
    }, this);

    return '<div class="cui-container cui-container-' + this._layout + '">'
      + rendered
      + '</div>';
  }
}
