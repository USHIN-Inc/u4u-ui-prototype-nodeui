class CUIComponent {
  constructor(state = 'Balanced', border = true) {
    this._components = {};
    this._state = state;
    this._border = border;
  }
  setContainer(container, component) {
    this._components[container] = component;
    return this;
  }
  render() {
    var output = '<div class="cui-component cui-component-state-' + this._state.toLowerCase() + (this._hasBorder ? ' cui-component-border' : '') + '">';
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].forEach(function(container){
      if (this._components.hasOwnProperty(container)) {
        output += this._components[container].render();
      } else {
        output += '<div class="cui-component cui-component-border">' + container + '</div>';
      }
    }, this);
    output = output + '</div>'
    return output;
  }
}

var rootCUIComponent =
  new CUIComponent('Outline')
    .setContainer('E',
      new CUIComponent('Balanced')
        .setContainer('A', new CUIComponent('NorthWest'))
        .setContainer('B', new CUIComponent('North'))
        .setContainer('C', new CUIComponent('NorthEast'))
        .setContainer('D', new CUIComponent('West'))
        .setContainer('E', new CUIComponent('Balanced'))
        .setContainer('F', new CUIComponent('East'))
        .setContainer('G', new CUIComponent('SouthWest'))
        .setContainer('H', new CUIComponent('South'))
        .setContainer('I', new CUIComponent('SouthEast'))
    );

document
  .getElementById('mainCUIComponent')
  .innerHTML = rootCUIComponent.render();
