var myData = [
	{"imports":[],"name":"java-java.base"},
	{"imports":["java-java.base"],"name":"java-java.compiler"},
	{"imports":["java-java.base"],"name":"java-java.datatransfer"},
	{"imports":["java-java.base"],"name":"java-java.instrument"},
	{"imports":["java-java.base"],"name":"java-java.logging"},
	{"imports":["java-java.base"],"name":"java-java.management"},
	{"imports":["java-java.base"],"name":"java-java.scripting"},
	{"imports":["java-java.base"],"name":"jdk-jdk.httpserver"},
	{"imports":["java-java.base"],"name":"jdk-jdk.incubator.httpclient"},
	{"imports":["java-java.base"],"name":"jdk-jdk.internal.ed"},
	{"imports":["java-java.base"],"name":"jdk-jdk.internal.jvmstat"},
	{"imports":["java-java.base"],"name":"jdk-jdk.internal.le"},
	{"imports":["java-java.base"],"name":"jdk-jdk.internal.opt"},
	{"imports":["java-java.base"],"name":"jdk-jdk.internal.vm.ci"},
	{"imports":["java-java.base"],"name":"jdk-jdk.jartool"},
	{"imports":["java-java.base"],"name":"java-java.xml"},
	{"imports":["java-java.base"],"name":"jdk-jdk.crypto.ec"},
	{"imports":["java-java.base"],"name":"java-java.smartcardio"},
	{"imports":["java-java.base"],"name":"jdk-jdk.charsets"},
	
	{"imports":["java-java.base"],"name":"jdk-jdk.jdwp.agent"},
	{"imports":["java-java.base"],"name":"jdk-jdk.localedata"},
	{"imports":["java-java.base"],"name":"jdk-jdk.net"},
	{"imports":["java-java.base"],"name":"jdk-jdk.pack"},
	{"imports":["java-java.base"],"name":"jdk-jdk.unsupported"},
	{"imports":["java-java.base"],"name":"jdk-jdk.zipfs"},
	{"imports":["java-java.base"],"name":"jdk-jdk.sctp"},
	{"imports":["java-java.base"],"name":"java-java.xml.ws.annotation"},
	
	{"imports":["java-java.base","java-java.datatransfer","java-java.logging"],"name":"java-java.activation"},
	{"imports":["java-java.base","java-java.desktop","java-java.logging","java-java.naming","java-java.rmi","java-java.transaction","jdk-jdk.unsupported"],"name":"java-java.corba"},
	{"imports":["java-java.base","java-java.datatransfer","java-java.prefs","java-java.xml"],"name":"java-java.desktop"},
	{"imports":["java-java.base","java-java.management","java-java.naming","java-java.rmi"],"name":"java-java.management.rmi"},
	{"imports":["java-java.base","java-java.security.sasl"],"name":"java-java.naming"},
	{"imports":["java-java.base","java-java.xml"],"name":"java-java.prefs"},
	{"imports":["java-java.base","java-java.logging"],"name":"java-java.rmi"},
	{"imports":["java-java.base","java-java.compiler","java-java.datatransfer","java-java.desktop","java-java.instrument","java-java.logging","java-java.management","java-java.management.rmi","java-java.naming","java-java.prefs","java-java.rmi","java-java.scripting","java-java.security.jgss","java-java.security.sasl","java-java.sql","java-java.sql.rowset","java-java.xml","java-java.xml.crypto"],"name":"java-java.se"},
	{"imports":["java-java.activation","java-java.base","java-java.corba","java-java.se","java-java.transaction","java-java.xml.bind","java-java.xml.ws","java-java.xml.ws.annotation"],"name":"java-java.se.ee"},
	{"imports":["java-java.base","java-java.naming"],"name":"java-java.security.jgss"},
	{"imports":["java-java.base","java-java.logging"],"name":"java-java.security.sasl"},
	
	{"imports":["java-java.base","java-java.logging","java-java.xml"],"name":"java-java.sql"},
	{"imports":["java-java.base","java-java.logging","java-java.naming","java-java.sql"],"name":"java-java.sql.rowset"},
	{"imports":["java-java.base","java-java.rmi"],"name":"java-java.transaction"},
	
	{"imports":["java-java.activation","java-java.base","java-java.compiler","java-java.desktop","java-java.logging","java-java.xml","jdk-jdk.unsupported"],"name":"java-java.xml.bind"},
	{"imports":["java-java.base","java-java.logging","java-java.xml"],"name":"java-java.xml.crypto"},
	{"imports":["java-java.activation","java-java.base","java-java.desktop","java-java.logging","java-java.management","java-java.xml","java-java.xml.bind","java-java.xml.ws.annotation","jdk-jdk.httpserver","jdk-jdk.unsupported"],"name":"java-java.xml.ws"},
	
	{"imports":["java-java.base","java-java.desktop"],"name":"jdk-jdk.accessibility"},
	{"imports":["java-java.base","jdk-jdk.internal.jvmstat"],"name":"jdk-jdk.attach"},
	
	{"imports":["java-java.base","java-java.compiler"],"name":"jdk-jdk.compiler"},
	{"imports":["java-java.base","jdk-jdk.crypto.ec"],"name":"jdk-jdk.crypto.cryptoki"},
	
	{"imports":["java-java.base","java-java.logging"],"name":"jdk-jdk.dynalink"},
	{"imports":["java-java.base","java-java.desktop","jdk-jdk.internal.ed"],"name":"jdk-jdk.editpad"},
	{"imports":["java-java.base","java-java.datatransfer","java-java.desktop","java-java.rmi","java-java.scripting"],"name":"jdk-jdk.hotspot.agent"},
	
	{"imports":["java-java.base","java-java.compiler","java-java.xml","jdk-jdk.compiler"],"name":"jdk-jdk.java.oc"},
	{"imports":["java-java.base","jdk-jdk.attach","jdk-jdk.internal.jvmstat"],"name":"jdk-jdk.jcmd"},
	{"imports":["java-java.base","java-java.desktop","java-java.management","java-java.management.rmi","java-java.rmi","jdk-jdk.attach","jdk-jdk.internal.jvmstat","jdk-jdk.management","jdk-jdk.management.agent"],"name":"jdk-jdk.jconsole"},
	{"imports":["java-java.base","java-java.compiler","jdk-jdk.compiler"],"name":"jdk-jdk.jdeps"},
	{"imports":["java-java.base","jdk-jdk.attach","jdk-jdk.jdwp.agent"],"name":"jdk-jdk.jdi"},
	
	{"imports":["java-java.base","jdk-jdk.internal.opt","jdk-jdk.jdeps"],"name":"jdk-jdk.jlink"},
	{"imports":["java-java.base","java-java.compiler","java-java.logging","java-java.prefs","jdk-jdk.compiler","jdk-jdk.internal.ed","jdk-jdk.internal.le","jdk-jdk.internal.opt","jdk-jdk.jdi"],"name":"jdk-jdk.jshell"},
	{"imports":["java-java.base","java-java.desktop"],"name":"jdk-jdk.jsobject"},
	{"imports":["java-java.base","java-java.rmi","jdk-jdk.internal.jvmstat"],"name":"jdk-jdk.jstatd"},
	
	{"imports":["java-java.base","java-java.management"],"name":"jdk-jdk.management"},
	{"imports":["java-java.base","java-java.management","java-java.management.rmi"],"name":"jdk-jdk.management.agent"},
	{"imports":["java-java.base","java-java.naming"],"name":"jdk-jdk.naming.dns"},
	{"imports":["java-java.base","java-java.naming","java-java.rmi"],"name":"jdk-jdk.naming.rmi"},
	
	{"imports":["java-java.base","java-java.desktop","java-java.logging","java-java.management","java-java.security.jgss","java-java.sql","jdk-jdk.net","jdk-jdk.security.jgss"],"name":"jdk-jdk.policytool"},
	{"imports":["java-java.base","java-java.corba","jdk-jdk.compiler","jdk-jdk.java.oc"],"name":"jdk-jdk.rmic"},
	{"imports":["java-java.base","java-java.logging","java-java.scripting","jdk-jdk.dynalink"],"name":"jdk-jdk.scripting.nashorn"},
	{"imports":["java-java.base","java-java.compiler","java-java.desktop","jdk-jdk.internal.le","jdk-jdk.scripting.nashorn"],"name":"jdk-jdk.scripting.nashorn.shell"},
	
	{"imports":["java-java.base","java-java.naming","java-java.security.jgss"],"name":"jdk-jdk.security.auth"},
	{"imports":["java-java.base","java-java.logging","java-java.security.jgss","java-java.security.sasl"],"name":"jdk-jdk.security.jgss"},
	
	{"imports":["java-java.activation","java-java.base","java-java.compiler","java-java.desktop","java-java.logging","java-java.xml","java-java.xml.bind","jdk-jdk.compiler"],"name":"jdk-jdk.xml.bind"},
	{"imports":["java-java.base","java-java.xml"],"name":"jdk-jdk.xml.dom"},
	{"imports":["java-java.base","java-java.compiler","java-java.logging","java-java.rmi","java-java.xml","java-java.xml.bind","java-java.xml.ws","jdk-jdk.xml.bind"],"name":"jdk-jdk.xml.ws"}
];



var diameter = 750,
    radius = diameter / 2,
    innerRadius = radius - 100

var cluster = d3.layout.cluster()
		.size([360, innerRadius])
    .sort(null)
    .value(function(d) { return d.size; });

var bundle = d3.layout.bundle();

var line = d3.svg.line.radial()
    .interpolate("bundle")
    .tension(.85)
    .radius(function(d) { return d.y; })
    .angle(function(d) { return d.x / 180 * Math.PI; });

var svg = d3.select("#chart").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
  .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var link = svg.append("g").selectAll(".link"),
    node = svg.append("g").selectAll(".node");

classes = myData;
	

  var nodes = cluster.nodes(packageHierarchy(classes)),
      links = packageImports(nodes);

  link = link
      .data(bundle(links))
    .enter().append("path")
      .each(function(d) { d.source = d[0], d.target = d[d.length - 1]; })
      .attr("class", "link")
      .attr("d", line);

  node = node
      .data(nodes.filter(function(n) { return !n.children; }))
    .enter().append("text")
      .attr("class", "node")
      .attr("dy", ".31em")
      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + 8) + ",0)" + (d.x < 180 ? "" : "rotate(180)"); })
      .style("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
      .text(function(d) { return d.key; })
      .on("mouseover", mouseovered)
      .on("mouseout", mouseouted);

function mouseovered(d) {
  node
      .each(function(n) { n.target = n.source = false; });

  link
      .classed("link--target", function(l) { if (l.target === d) return l.source.source = true; })
      .classed("link--source", function(l) { if (l.source === d) return l.target.target = true; })
    .filter(function(l) { return l.target === d || l.source === d; })
      .each(function() { this.parentNode.appendChild(this); });

  node
      .classed("node--target", function(n) { return n.target; })
      .classed("node--source", function(n) { return n.source; });
}

function mouseouted(d) {
  link
      .classed("link--target", false)
      .classed("link--source", false);

  node
      .classed("node--target", false)
      .classed("node--source", false);
}

d3.select(self.frameElement).style("height", diameter + "px");

// Lazily construct the package hierarchy from class names.
function packageHierarchy(classes) {
  var map = {};

  function find(name, data) {
    var node = map[name], i;
    if (!node) {
      node = map[name] = data || {name: name, children: []};
      if (name.length) {
        node.parent = find(name.substring(0, i = name.lastIndexOf("-")));
        node.parent.children.push(node);
        node.key = name.substring(i + 1);
      }
    }
    return node;
  }

  classes.forEach(function(d) {
    find(d.name, d);
  });

  return map[""];
}

// Return a list of imports for the given array of nodes.
function packageImports(nodes) {
  var map = {},
      imports = [];

  // Compute a map from name to node.
  nodes.forEach(function(d) {
    map[d.name] = d;
  });

  // For each import, construct a link from the source to target node.
  nodes.forEach(function(d) {
    if (d.imports) d.imports.forEach(function(i) {
      imports.push({source: map[d.name], target: map[i]});
    });
  });

  return imports;
}