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
