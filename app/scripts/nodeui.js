var nodeui = (() => {

    var root = new Node('Fruit', 'topic');
    root.add(new Node('Fruit is good for you', 'thought'))
        .add(new Node('Eat', 'action'))
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

    return { root: root };

})();

$('#nodes').html('<h1>What\'s up!</h1>');