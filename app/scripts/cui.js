function myButton1Click() {
  alert('myButton1Click called');
}
function myButton2Click() {
  alert('myButton2Click called');
}
var CUIContainer =
  new CUIOutlineContainer()
    .setComponent(4,
      new CUIBalancedContainer()
        .setComponent(0, new CUINorthWestContainer())
        .setComponent(1, new CUINorthContainer())
        .setComponent(2, new CUINorthEastContainer())
        .setComponent(3, new CUIWestContainer())
        .setComponent(4, new CUIBalancedContainer()
          .setComponent(4, new CUITextComponent('Text'))
        )
        .setComponent(5, new CUIEastContainer())
        .setComponent(6, new CUISouthWestContainer())
        .setComponent(7, new CUISouthContainer())
        .setComponent(8, new CUISouthEastContainer())
    )
    .setComponent(1, new CUIButtonComponent(
      'Button 1',
      'myButton1Click()'
    ))
    .setComponent(3, new CUIButtonComponent('Button'))
    .setComponent(7, new CUIButtonComponent(
      'Button 2',
      'myButton2Click()'
    ))
    ;

document
  .getElementById('CUIContainer')
  .innerHTML = CUIContainer.render();
