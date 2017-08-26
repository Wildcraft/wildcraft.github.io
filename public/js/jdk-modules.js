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
	
	{"imports":["java-java.base","transitive java-java.datatransfer","java-java.logging"],"name":"java-java.activation"},
	{"imports":["java-java.base","transitive java-java.desktop","java-java.logging","java-java.naming","transitive java-java.rmi","java-java.transaction","jdk-jdk.unsupported"],"name":"java-java.corba"},
	{"imports":["java-java.base","transitive java-java.datatransfer","java-java.prefs","transitive java-java.xml"],"name":"java-java.desktop"},
	{"imports":["java-java.base","transitive java-java.management","java-java.naming","transitive java-java.rmi"],"name":"java-java.management.rmi"},
	{"imports":["java-java.base","java-java.security.sasl"],"name":"java-java.naming"},
	{"imports":["java-java.base","java-java.xml"],"name":"java-java.prefs"},
	{"imports":["java-java.base","java-java.logging"],"name":"java-java.rmi"},
	{"imports":["java-java.base","transitive java-java.compiler","transitive java-java.datatransfer","transitive java-java.desktop","transitive java-java.instrument","transitive java-java.logging","transitive java-java.management","transitive java-java.management.rmi","transitive java-java.naming","transitive java-java.prefs","transitive java-java.rmi","transitive java-java.scripting","transitive java-java.security.jgss","transitive java-java.security.sasl","transitive java-java.sql","transitive java-java.sql.rowset","transitive java-java.xml","transitive java-java.xml.crypto"],"name":"java-java.se"},
	{"imports":["transitive java-java.activation","java-java.base","transitive java-java.corba","transitive java-java.se","transitive java-java.transaction","transitive java-java.xml.bind","transitive java-java.xml.ws","transitive java-java.xml.ws.annotation"],"name":"java-java.se.ee"},
	{"imports":["java-java.base","java-java.naming"],"name":"java-java.security.jgss"},
	{"imports":["java-java.base","java-java.logging"],"name":"java-java.security.sasl"},
	
	{"imports":["java-java.base","transitive java-java.logging","transitive java-java.xml"],"name":"java-java.sql"},
	{"imports":["java-java.base","transitive java-java.logging","transitive java-java.naming","transitive java-java.sql"],"name":"java-java.sql.rowset"},
	{"imports":["java-java.base","transitive java-java.rmi"],"name":"java-java.transaction"},
	
	{"imports":["transitive java-java.activation","java-java.base","java-java.compiler","java-java.desktop","java-java.logging","transitive java-java.xml","jdk-jdk.unsupported"],"name":"java-java.xml.bind"},
	{"imports":["java-java.base","java-java.logging","transitive java-java.xml"],"name":"java-java.xml.crypto"},
	{"imports":["transitive java-java.activation","java-java.base","java-java.desktop","java-java.logging","java-java.management","transitive java-java.xml","transitive java-java.xml.bind","java-java.xml.ws.annotation","jdk-jdk.httpserver","jdk-jdk.unsupported"],"name":"java-java.xml.ws"},
	
	{"imports":["java-java.base","transitive java-java.desktop"],"name":"jdk-jdk.accessibility"},
	{"imports":["java-java.base","jdk-jdk.internal.jvmstat"],"name":"jdk-jdk.attach"},
	
	{"imports":["java-java.base","transitive java-java.compiler"],"name":"jdk-jdk.compiler"},
	{"imports":["java-java.base","jdk-jdk.crypto.ec"],"name":"jdk-jdk.crypto.cryptoki"},
	
	{"imports":["java-java.base","java-java.logging"],"name":"jdk-jdk.dynalink"},
	{"imports":["java-java.base","java-java.desktop","jdk-jdk.internal.ed"],"name":"jdk-jdk.editpad"},
	{"imports":["java-java.base","java-java.datatransfer","java-java.desktop","java-java.rmi","java-java.scripting"],"name":"jdk-jdk.hotspot.agent"},
	
	{"imports":["java-java.base","transitive java-java.compiler","java-java.xml","transitive jdk-jdk.compiler"],"name":"jdk-jdk.javadoc"},
	{"imports":["java-java.base","jdk-jdk.attach","jdk-jdk.internal.jvmstat"],"name":"jdk-jdk.jcmd"},
	{"imports":["java-java.base","transitive java-java.desktop","transitive java-java.management","java-java.management.rmi","java-java.rmi","jdk-jdk.attach","jdk-jdk.internal.jvmstat","jdk-jdk.management","jdk-jdk.management.agent"],"name":"jdk-jdk.jconsole"},
	{"imports":["java-java.base","java-java.compiler","jdk-jdk.compiler"],"name":"jdk-jdk.jdeps"},
	{"imports":["java-java.base","jdk-jdk.attach","jdk-jdk.jdwp.agent"],"name":"jdk-jdk.jdi"},
	
	{"imports":["java-java.base","jdk-jdk.internal.opt","jdk-jdk.jdeps"],"name":"jdk-jdk.jlink"},
	{"imports":["java-java.base","transitive java-java.compiler","java-java.logging","transitive java-java.prefs","jdk-jdk.compiler","jdk-jdk.internal.ed","jdk-jdk.internal.le","jdk-jdk.internal.opt","transitive jdk-jdk.jdi"],"name":"jdk-jdk.jshell"},
	{"imports":["java-java.base","java-java.desktop"],"name":"jdk-jdk.jsobject"},
	{"imports":["java-java.base","java-java.rmi","jdk-jdk.internal.jvmstat"],"name":"jdk-jdk.jstatd"},
	
	{"imports":["java-java.base","transitive java-java.management"],"name":"jdk-jdk.management"},
	{"imports":["java-java.base","java-java.management","java-java.management.rmi"],"name":"jdk-jdk.management.agent"},
	{"imports":["java-java.base","java-java.naming"],"name":"jdk-jdk.naming.dns"},
	{"imports":["java-java.base","java-java.naming","java-java.rmi"],"name":"jdk-jdk.naming.rmi"},
	
	{"imports":["java-java.base","java-java.desktop","java-java.logging","java-java.management","java-java.security.jgss","java-java.sql","jdk-jdk.net","jdk-jdk.security.jgss"],"name":"jdk-jdk.policytool"},
	{"imports":["java-java.base","java-java.corba","jdk-jdk.compiler","jdk-jdk.javadoc"],"name":"jdk-jdk.rmic"},
	{"imports":["java-java.base","java-java.logging","transitive java-java.scripting","jdk-jdk.dynalink"],"name":"jdk-jdk.scripting.nashorn"},
	{"imports":["java-java.base","java-java.compiler","java-java.desktop","jdk-jdk.internal.le","jdk-jdk.scripting.nashorn"],"name":"jdk-jdk.scripting.nashorn.shell"},
	
	{"imports":["java-java.base","transitive java-java.naming","java-java.security.jgss"],"name":"jdk-jdk.security.auth"},
	{"imports":["java-java.base","java-java.logging","transitive java-java.security.jgss","java-java.security.sasl"],"name":"jdk-jdk.security.jgss"},
	
	{"imports":["java-java.activation","java-java.base","java-java.compiler","java-java.desktop","java-java.logging","java-java.xml","java-java.xml.bind","jdk-jdk.compiler"],"name":"jdk-jdk.xml.bind"},
	{"imports":["java-java.base","transitive java-java.xml"],"name":"jdk-jdk.xml.dom"},
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
      .each(function(d) {
                     d.source = d[0], 
                     d.target = d[d.length - 1];
                     var actualTarget = d.source.imports.filter(function(e) {return e.substring(e.lastIndexOf(" ")+1)==d.target.name;})[0];                     var targetAttrib = actualTarget.substring(0,actualTarget.lastIndexOf(" ")).trim();
                     d.targetAttrib = targetAttrib;
                 })
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
      .each(function(n) { n.target = n.source = false; n.targetAttrib=""; n.transExp=""; });

  link
      .classed("link--target", function(l) { if (l.target === d) { if(l.targetAttrib  == 'transitive') { l.source.transExp = 'transitive'; l.transExp = 'transitive'; console.log(l); l.source.source = true; return false; } else { return l.source.source = true; } } })
      .classed("link--source", function(l) { if (l.source === d) { if(l.targetAttrib  == 'transitive') { l.target.targetAttrib = 'transitive';  l.target.target = true; return false;} else { return l.target.target = true;}  } })
      .classed("link-transitive-target", function(l) { if (l.source === d) { return l.targetAttrib == 'transitive'; } })
      .classed("link-transitive-source", function(l) { if (l.target === d) { return l.transExp == 'transitive'; } })
      .filter(function(l) { return l.target === d || l.source === d; })
      .each(function() { this.parentNode.appendChild(this); });

  node
      .classed("node--target", function(n) { if(n.targetAttrib != 'transitive') { return n.target;} })
      .classed("node-transitive-target", function(n) { if(n.targetAttrib == 'transitive') {console.log(n); }return n.targetAttrib == 'transitive';})
      .classed("node--source", function(n) { if(n.transExp != 'transitive') { return n.source; } })
      .classed("node-transitive-source", function(n) { if(n.transExp == 'transitive') {console.log(n); }return n.transExp == 'transitive';});
}

function mouseouted(d) {
  link
      .classed("link--target", false)
      .classed("link--source", false)
      .classed("link-transitive-target", false)
      .classed("link-transitive-source", false);

  node
      .classed("node--target", false)
      .classed("node--source", false)
      .classed("node-transitive-target", false)
      .classed("node-transitive-source", false);
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

  // Fo@r each import, construct a link from the source to target node.
  nodes.forEach(function(d) {
  	//d.attrib =[];
    if (d.imports) d.imports.forEach(function(i) {
    	var reqImport = i.substring(i.lastIndexOf(" ")+1);
    	//var attrib = i.substring(0, i.lastIndexOf(" ")+1).trim();
    	//d.attrib.push(attrib);
    	i = reqImport;
      imports.push({source: map[d.name], target: map[i]});
    });
  });

  return imports;
}