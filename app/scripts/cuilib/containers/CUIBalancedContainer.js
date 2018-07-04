class CUIBalancedContainer extends CUIContainer {
  constructor() {
    super();
    this._layout = 'balanced';
  }
  render() {
    this._rendered += this._components.map((component) => {
      return component.render();
    }).reduce((a, b)  => {
      return  a + b;
    });

    return '<div class="cui-container cui-container-' + this._layout + '">'
      + this._rendered
      + '</div>';
  }
}
