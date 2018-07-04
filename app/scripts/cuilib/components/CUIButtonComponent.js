class CUIButtonComponent extends CUIComponent {
  constructor(text = 'New Button Component', onclick = 'console.log(\'click\');') {
    super();
    this._text = text;
    this._onclick = onclick;
  }
  render() {
    return ''
      + '<div class="cui-component cui-component-button cui-component-border">'
      + '<button onclick="' + this._onclick + '">' + this._text + '</button>'
      + '</div>';
  }
}
