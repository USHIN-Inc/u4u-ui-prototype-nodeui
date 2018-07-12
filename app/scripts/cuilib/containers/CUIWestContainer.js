class CUIWestContainer extends CUIContainer {
  constructor() {
    super();
    this._layout = 'west';
  }
  render() {
    var rendered = '';

    [0].forEach(function(container){
      rendered += this._components[container].render();
    }, this);

    rendered += '<div class="cui-container-' + this._layout + '-inner">';
    [1, 2, 4, 5, 7, 8].forEach(function(container){
      rendered += this._components[container].render();
    }, this);
    rendered += '</div>';

    [3, 6].forEach(function(container){
      rendered += this._components[container].render();
    }, this);

    return '<div class="cui-container cui-container-' + this._layout + '">'
      + rendered
      + '</div>';
  }
}
