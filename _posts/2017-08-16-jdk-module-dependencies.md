---
layout: post
title: Java 9 - JDK Module Dependencies
---
<link rel="stylesheet" href="/public/css/jdk-modules.css">
In order to know the dependents/dependecies of any JDK module, select the module on the below chart. All **dependents** will be highlighted with color <span style="color:green">green</span> & <span style="color:#1ee232">lighter green</span> and all the module **dependencies** will be highlighted with color <span style="color:red">red</span> &  <span style="color:#931919">brown</span>.

<div id="chart" align="left"></div>

<span style="color:green">Green</span> - **normal** dependents. <br/>
<span style="color:#1ee232">Lighter green</span> - **transitive** dependents. <br/>
<span style="color:red">Red</span> - **normal** dependencies. <br/>
<span style="color:#931919">Brown</span> - **transitive** dependencies. <br/>

Aggregator is a module with module-info.class only. There are 3 aggregator module in Jdk.
1. java.se
2. java.se.ee
3. jdk.jdwp.agent

In order to know about the list of exported packages and service provider interfaces & providers, refer - [JDK Module Summary](http://cr.openjdk.java.net/~mr/jigsaw/ea/module-summary.html)

The above diagram has been generated using <a href="https://d3js.org/" target="_blank">D3 JS library</a> and with a reference implementation for <a href="https://bl.ocks.org/mbostock/7607999" target="_blank">Hierarchical Edge Bundling</a>. To know more about the diagram generation, you can check out the reference implementation.

<script type="text/javascript" src="/public/js/d3.v3.min.js"></script>
<script type="text/javascript" src="/public/js/jdk-modules.js"></script>