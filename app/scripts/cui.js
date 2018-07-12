var CUIContainer =
  new CUIOutlineContainer()
    .setComponent(4,
      new CUIBalancedContainer()
        .setComponent(0, new CUINorthWestContainer())
        .setComponent(1, new CUINorthContainer()
          .setComponent(7, new CUIButtonComponent(
              'Click me!',
              'myButtonClick()'
          )))
        .setComponent(2, new CUINorthEastContainer())
        .setComponent(3, new CUIWestContainer())
        .setComponent(4, new CUIBalancedContainer()
          .setComponent(4, new CUITextComponent('Click that button up there!')))
        .setComponent(5, new CUIEastContainer())
        .setComponent(6, new CUISouthWestContainer())
        .setComponent(7, new CUISouthContainer())
        .setComponent(8, new CUISouthEastContainer())
    );

function renderContainer() {
  document
    .getElementById('CUIContainer')
    .innerHTML = CUIContainer.render();
}
    
var count = 0;
function myButtonClick() {
  (CUIContainer
    .getComponent(4)
      .getComponent(4)
        .getComponent(4)).text = '<h1>' + (++count) + '</h1>';
  renderContainer();
}
