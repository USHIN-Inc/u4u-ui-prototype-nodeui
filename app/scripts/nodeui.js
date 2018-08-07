var root = new Node('Fruit', 'topic');

root.add(new Node('Fruit is good for you', 'thought')
        .add(new Node('Fruit is bad for you', 'thought')))
    .add(new Node('Eat', 'action'))
    .add(new Node('Give', 'action'))
    .add(new Node('Plant', 'action'))
    .add(new Node('Preserve', 'action')
        .add(new Node('Refrigerator', 'need')
            .add(new Node('Temperature Control', 'need'))))
    .add(new Node('Squash', 'action'))
    .add(new Node('Ferment', 'action'))
    .add(new Node('Cook', 'action'))
    .add(new Node('Refine', 'action'))
    .add(new Node('Food', 'topic')
        .add(new Node('Alex Garcia', 'person')
            .add(new Node('Big fan of food', 'feeling'))));

function generateUnorderedListFromNode(node) {
    var output = '';
    output += '<ul><li><a href="/" data-id="' + node.id + '" data-tag="' + node.tag +'"><img style="height: 12px;" alt="" src="/img/' + node.tag + 's.png" /> ' + node.text + '</a>';
    node.children.forEach(child => output += generateUnorderedListFromNode(child));
    output += '</li></ul>';
    return output;
}

$('#nodeui').html(generateUnorderedListFromNode(root));
$('#nodeui a').on('click', e => { e.preventDefault(); redrawUI(e.target.dataset.id); });

function redrawUI(focusNodeId) {
    var focusNode;
    var parentNode;
    var childNodes;

    function findNodeById(id, tree) {
        if (tree.id === id) {
            focusNode = tree;
        } else {
            tree.children.forEach(node => findNodeById(id, node));
        }
    }

    function findParentNodeByChildId(id, tree) {
        if (tree.children.find(node => node.id === id)) {
            parentNode = tree;
        } else {
            tree.children.forEach(node => findParentNodeByChildId(id, node));
        }
    }

    findNodeById(focusNodeId, root);
    findParentNodeByChildId(focusNodeId, root);
    childNodes = focusNode.children;

    // console.log(focusNodeId);
    // console.log(focusNode);
    // console.log(parentNode);
    // console.log(childNodes);

    $('#merits ul').empty();
    $('#people ul').empty();
    $('#actions ul').empty();
    $('#topics ul').empty();
    $('#needs ul').empty();
    $('#feelings ul').empty();
    $('#thoughts ul').empty();
    $('#facts ul').empty();

    $('#focus').html('<span class="focus">' + focusNode.text + '</span>');

    if (parentNode) {
        switch (parentNode.tag) {
            case 'merit':
                $('#merits ul').append('<li><a href="#" data-id="' + parentNode.id + '" data-tag="' + parentNode.tag +'">' + parentNode.text + '</a></li>');
                break;
            case 'person':
                $('#people ul').append('<li><a href="#" data-id="' + parentNode.id + '" data-tag="' + parentNode.tag +'">' + parentNode.text + '</a></li>');
                break;
            case 'action':
                $('#actions ul').append('<li><a href="#" data-id="' + parentNode.id + '" data-tag="' + parentNode.tag +'">' + parentNode.text + '</a></li>');
                break;
            case 'topic':
                $('#topics ul').append('<li><a href="#" data-id="' + parentNode.id + '" data-tag="' + parentNode.tag +'">' + parentNode.text + '</a></li>');
                break;
            case 'need':
                $('#needs ul').append('<li><a href="#" data-id="' + parentNode.id + '" data-tag="' + parentNode.tag +'">' + parentNode.text + '</a></li>');
                break;
            case 'feeling':
                $('#feelings ul').append('<li><a href="#" data-id="' + parentNode.id + '" data-tag="' + parentNode.tag +'">' + parentNode.text + '</a></li>');
                break;
            case 'thought':
                $('#thoughts ul').append('<li><a href="#" data-id="' + parentNode.id + '" data-tag="' + parentNode.tag +'">' + parentNode.text + '</a></li>');
                break;
            case 'fact':
                $('#facts ul').append('<li><a href="#" data-id="' + parentNode.id + '" data-tag="' + parentNode.tag +'">' + parentNode.text + '</a></li>');
                break;
        }
    }

    childNodes.forEach(childNode => {
        switch (childNode.tag) {
            case 'merit':
                $('#merits ul').append('<li><a href="#" data-id="' + childNode.id + '" data-tag="' + childNode.tag +'">' + childNode.text + '</a></li>');
                break;
            case 'person':
                $('#people ul').append('<li><a href="#" data-id="' + childNode.id + '" data-tag="' + childNode.tag +'">' + childNode.text + '</a></li>');
                break;
            case 'action':
                $('#actions ul').append('<li><a href="#" data-id="' + childNode.id + '" data-tag="' + childNode.tag +'">' + childNode.text + '</a></li>');
                break;
            case 'topic':
                $('#topics ul').append('<li><a href="#" data-id="' + childNode.id + '" data-tag="' + childNode.tag +'">' + childNode.text + '</a></li>');
                break;
            case 'need':
                $('#needs ul').append('<li><a href="#" data-id="' + childNode.id + '" data-tag="' + childNode.tag +'">' + childNode.text + '</a></li>');
                break;
            case 'feeling':
                $('#feelings ul').append('<li><a href="#" data-id="' + childNode.id + '" data-tag="' + childNode.tag +'">' + childNode.text + '</a></li>');
                break;
            case 'thought':
                $('#thoughts ul').append('<li><a href="#" data-id="' + childNode.id + '" data-tag="' + childNode.tag +'">' + childNode.text + '</a></li>');
                break;
            case 'fact':
                $('#facts ul').append('<li><a href="#" data-id="' + childNode.id + '" data-tag="' + childNode.tag +'">' + childNode.text + '</a></li>');
                break;
        }
    })

    $('#semui a').on('click', e => { e.preventDefault(); redrawUI(e.target.dataset.id); });

    $.contextMenu({
        selector: '#semui li', 
        callback: function(key, options) {
            var m = "clicked: " + key + " on " + $(this).text();
            window.console && console.log(m) || alert(m); 
        },
        items: {
            "delete": {name: "Delete", icon: "delete"},
        }
    });

    $.contextMenu({
        selector: '#semui div', 
        callback: function(key, options) {
            var m = "clicked: " + key;
            window.console && console.log(m) || alert(m); 
        },
        items: {
            "add": {name: "Add", icon: "add"}
        }
    });

}

$('#semui > a').on('click', e => { e.preventDefault(); redrawUI(e.target.dataset.id); });

redrawUI(root.id);
