class CUIBalancedContainer extends CUIContainer {
  constructor() {
    super();
    this._layout = 'balanced';
  }
  render() {
    var rendered = '';

    rendered += this._components.map((component) => {
      return component.render();
    }).reduce((a, b)  => {
      return  a + b;
    });

    return '<div class="cui-container cui-container-' + this._layout + '">'
      + rendered
      + '</div>';
  }
}
