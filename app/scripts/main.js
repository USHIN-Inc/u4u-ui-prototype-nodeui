(function($, window){

    var nodes = window.__INITIAL_STATE__.data || [{}];

    // Check if route is valid, otherwise set route to root node ID
    if (location.hash === '') {
        var rootNode = nodes.find(node => node.parent_id === null);
        if (rootNode) {
            window.history.replaceState(null, null, '#!/' + rootNode.id);
        }
    }

    // Render the node collection
    renderSemUINav(nodes, '#semui-view-navigation');
    renderSemUIRegions(nodes, '#semui-view-regions');

    // enable collapsible navigation column
    $('#collapseExample').on('hidden.bs.collapse', function () {
      console.log('navigation hidden...');
      $('#showNavButton').html('Show Navigation');
      $('#UINavPane').removeClass('col-md-8');
      $('#UINavPane').addClass('col-md-12');
    });
    $('#collapseExample').on('show.bs.collapse', function () {
      console.log('showing navigation...');
      $('#showNavButton').html('Hide Navigation');
      $('#UINavPane').removeClass('col-md-12');
      $('#UINavPane').addClass('col-md-8');
    })

    // Listen for route changes and re-render
    $(window).on('hashchange', function(e) {
        renderSemUINav(nodes, '#semui-view-navigation');
        renderSemUIRegions(nodes, '#semui-view-regions');
    });


    // Render functions
    function renderSemUINav(nodes, el) {
        var selectedNodeID = location.hash.replace('#!/', '');
        var selectedNode = nodes.find(node => node.id.toString() === selectedNodeID);
        var rootNode = nodes.find(node => node.parent_id === null);

        if (rootNode) {
            $(el).html(traverseNodes(nodes, rootNode));
        }

        function traverseNodes(nodes, rootNode) {
            var output = '';
            output += '<ul><li>';
            output += '<a ' + ((rootNode.id === selectedNode.id) ? 'class="selected" ' : '') + 'href="#!/' + rootNode.id + '" data-id="' + rootNode.id + '" data-tag="' + rootNode.tag +'">';
            output += '<img style="height: 12px;" alt="" src="images/' + pluralize(rootNode.tag) + '.png" /> ' + rootNode.title;
            output += '</a>';
            nodes.filter(node => node.parent_id === rootNode.id).forEach(currentNode => {
                output += traverseNodes(nodes, currentNode);
            });
            output += '</li></ul>';
            return output;
        }
    };

    function renderSemUIRegions(nodes, el) {
        var selectedNodeID = location.hash.replace('#!/', '');
        var selectedNode = nodes.find(node => node.id.toString() === selectedNodeID);

        var nodesToRender = [];
        nodesToRender.push(nodes.filter(node => node.id === selectedNode.parent_id));
        nodesToRender.push(nodes.filter(node => node.parent_id === selectedNode.id));
        nodesToRender = nodesToRender.reduce((acc, val) => acc.concat(val), []);

        if (selectedNode && nodesToRender) {

            $(el).html('<div id="semui-view-region-focus"><span class="focus">' + selectedNode.title + '</span></div>');

            ['merit', 'person', 'action', 'topic', 'need', 'feeling', 'thought', 'fact'].forEach(tag => {
                var template = $('#semuiViewRegionTemplate').html();
                var rendered = Mustache.render(template, {
                    regionName: pluralize(tag),
                    nodes: nodesToRender.filter(node => node.tag === tag)
                });
                $(el).append(rendered);
            });

        }

        $.contextMenu({
            selector: el + ' li', 
            callback: function(key, options) {
                var m = 'clicked: ' + key + ' on ' + $(this).text();
                console.log(m); 
                console.log(options);
            },
            items: {
                'delete': {name: 'Delete', icon: 'delete'},
            }
        });

        $.contextMenu({
            selector: el + ' div.semui-view-region-editable', 
            callback: function(key, options) {
                var m = 'clicked: ' + key;
                console.log(m); 
                console.log(options);
            },
            items: {
                'add': {name: 'Add', icon: 'add'}
            }
        });

    };

})(jQuery, window);
