/* global vis getScaleFreeNetwork */
var nodes = null;
        var edges = null;
        var network = null;

        function destroy() {
            if (network !== null) {
                network.destroy();
                network = null;
            }
        }

        function draw() {
            destroy();
            // randomly create some nodes and edges
            var nodeCount = document.getElementById('nodeCount').value;
            var data = getScaleFreeNetwork(nodeCount)

            // create a network
            var container = document.getElementById('mynetwork');
            var directionInput = document.getElementById("direction").value;
            var options = {
                layout: {
                    hierarchical: {
                        direction: directionInput
                    }
                }
            };
            new vis.Network(container, data, options);

            // add event listeners
            network.on('select', function (params) {
                document.getElementById('selection').innerHTML = 'Selection: ' + params.nodes;
            });
        }

    
    
</head>

<body onload="draw();">
<h2>Hierarchical Layout - Scale-Free-Network</h2>

<div style="width:700px; font-size:14px; text-align: justify;">
    This example shows the randomly generated <b>scale-free-network</b> set of nodes and connected edges from example 2.
    In this example, hierarchical layout has been enabled and the vertical levels are determined automatically.
</div>
<br/>

<form onsubmit="draw(); return false;">
    <label for="nodeCount">Number of nodes:</label>
    <input id="nodeCount" type="text" value="25" style="width: 50px;">
    <input type="submit" value="Go">
</form>
<p>
    <input type="button" id="btn-UD" value="Up-Down">
    <input type="button" id="btn-DU" value="Down-Up">
    <input type="button" id="btn-LR" value="Left-Right">
    <input type="button" id="btn-RL" value="Right-Left">
    <input type="hidden" id='direction' value="UD">
</p>

<script language="javascript">
    var directionInput = document.getElementById("direction");
    var btnUD = document.getElementById("btn-UD");
    btnUD.onclick = function () {
        directionInput.value = "UD";
        draw();
    }
    var btnDU = document.getElementById("btn-DU");
    btnDU.onclick = function () {
        directionInput.value = "DU";
        draw();
    };
    var btnLR = document.getElementById("btn-LR");
    btnLR.onclick = function () {
        directionInput.value = "LR";
        draw();
    };
    var btnRL = document.getElementById("btn-RL");
    btnRL.onclick = function () {
        directionInput.value = "RL";
        draw();
    };
</script>