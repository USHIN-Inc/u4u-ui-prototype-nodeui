class CUITextComponent extends CUIComponent {
  constructor(text = 'New Text Component') {
    super();
    this._text = text;
  }
  render() {
    return '<div class="cui-component cui-component-text cui-component-border">' + this._text + '</div>';
  }
}
