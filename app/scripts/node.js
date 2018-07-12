class Node {
  constructor(text = 'New Topic', tag = 'topic', id = UUID.generate()) {
    this._children = [];
    this._id = id;
    this._text = text;
    this._tag = tag;
  }
  get id() {
    return this._id;
  }
  get tag() {
    return this._tag;
  }
  get text() {
    return this._text;
  }
  get children() {
    return this._children;
  }
  add(node) {
    this._children.push(node);
    return this;
  }
  remove(node) {
    for (var i = 0; i < this._children.length; i++) {
      if (this._children[i] === node) {
        this._children.splice(i, 1);
        return;
      }
    }
  }
}

var root = new Node('Fruit', 'topic');
root.add(new Node('Fruit is good for you', 'thought'));
root.add(new Node('Eat', 'action'))
  .add(new Node('Give', 'action'))
  .add(new Node('Plant', 'action'))
  .add(new Node('Preserve', 'action'))
  .add(new Node('Squash', 'action'))
  .add(new Node('Ferment', 'action'))
  .add(new Node('Cook', 'action'))
  .add(new Node('Refine', 'action'))
  .add(new Node('Food', 'topic'));

var leaf = null;

leaf = root.children.find(node => node.text === 'Fruit is good for you');
leaf.add(new Node('Fruit is bad for you', 'thought'));

leaf = root.children.find(node => node.text === 'Preserve');
leaf.add(
  new Node('Refrigerator', 'need').add(
    new Node('Temperature Control', 'need')
  )
);
