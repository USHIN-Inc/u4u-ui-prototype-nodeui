class CUIButtonComponent extends CUIComponent {
  constructor(text = 'New Button Component') {
    super();
    this._text = text;
  }
  render() {
    return ''
      + '<div class="cui-component cui-component-button cui-component-border">'
      + '<button>' + this._text + '</button>'
      + '</div>';
  }
}
