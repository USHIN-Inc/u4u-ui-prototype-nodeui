class CUIContainer extends CUIComponent {
  constructor() {
    super();
    this._components = [
      new CUITextComponent('A'),
      new CUITextComponent('B'),
      new CUITextComponent('C'),
      new CUITextComponent('D'),
      new CUITextComponent('E'),
      new CUITextComponent('F'),
      new CUITextComponent('G'),
      new CUITextComponent('H'),
      new CUITextComponent('I')
    ];
  }
  setComponent(index, component) {
    this._components[index] = component;
    return this;
  }
  getComponent(index) {
    return this._components[index];
  }
}
