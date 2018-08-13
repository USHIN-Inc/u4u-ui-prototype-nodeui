(function(){

    var nodes = window.__INITIAL_STATE__.data || [];

    var inflectedTag = {
        "merit": "merits",
        "person": "people",
        "action": "actions",
        "topic": "topics",
        "need": "needs",
        "feeling": "feelings",
        "thought": "thoughts",
        "fact": "facts"
    }

    // Check if route is valid, otherwise set route to root node GUID
    if (location.hash === "") {
        var rootNode = nodes.find(node => node.parent_id === null);
        window.history.replaceState(null, null, "#!/" + rootNode.id);
    }

    // Render the node collection
    renderSemUINav(nodes, "#semui-view-navigation");
    renderSemUIRegions(nodes, "#semui-view-regions");


    // Listen for route changes
    $(window).on('hashchange', function(e) {
        renderSemUINav(nodes, "#semui-view-navigation");
        renderSemUIRegions(nodes, "#semui-view-regions");
    });

    // Render functions
    function renderSemUINav(nodes, el) {
        var selectedNodeID = location.hash.replace("#!/", "");
        var selectedNode = nodes.find(node => node.id.toString() === selectedNodeID);

        function traverseNodes(nodes, rootNode) {
            var output = '';
            output += '<ul><li>';
            output += '<a ';
            if (rootNode.id === selectedNode.id) {
                output += 'class="selected" ';
            }
            output += 'href="#!/' + rootNode.id + '" data-id="' + rootNode.id + '" data-tag="' + rootNode.tag +'">'
            output += '<img style="height: 12px;" alt="" src="/img/' + inflectedTag[rootNode.tag] + '.png" /> ' + rootNode.title + '</a>';
            nodes.filter(node => node.parent_id === rootNode.id).forEach(currentNode => {
                output += traverseNodes(nodes, currentNode);
            });
            output += '</li></ul>';
            return output;
        }
        $(el).html(traverseNodes(nodes, nodes.find(node => node.parent_id === null)));
    };

    function renderSemUIRegions(nodes, el) {
        var selectedNodeID = location.hash.replace("#!/", "");
        var selectedNode = nodes.find(node => node.id.toString() === selectedNodeID);

        var nodesToRender = [];
        nodesToRender.push(nodes.filter(node => node.id === selectedNode.parent_id));
        nodesToRender.push(nodes.filter(node => node.parent_id === selectedNode.id));
        nodesToRender = nodesToRender.reduce((acc, val) => acc.concat(val), []);

        $(el).empty();

        $(el).append('<div id="semui-view-region-focus"><span class="focus">' + selectedNode.title + '</span></div>');

        var output = "";
        ["merit", "person", "action", "topic", "need", "feeling", "thought", "fact"].forEach(tag => {
            output += '<div id="semui-view-region-' + inflectedTag[tag] + '"><ul>';
            nodesToRender.filter(node => node.tag === tag).forEach(node => {
                output += '<li><a href="#!/' + node.id + '" data-id="' + node.id + '" data-tag="' + node.tag +'">' + node.title + '</a></li>';
            });
            output += '</ul></div>';
        });
        $(el).append(output);
    };

})();
