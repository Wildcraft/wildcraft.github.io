---
layout: post
title: Java 9 - JDK Module Dependencies
---
<link rel="stylesheet" href="/public/css/jdk-modules.css">
In order to know the dependents/dependecies of any JDK module, select the module on the below chart. All **dependents** will be highlighted with color <span style="color:green">green</span> and all the module **dependencies** will be highlighted with color <span style="color:red">red</span>. 

<div id="chart" align="left"></div>
In order, to know whether a dependecy is a transitive or not, to know whether a module is an aggregate module or not, to know about the list of exported packages and service provider interfaces & providers, refer - [JDK Module Summary](http://cr.openjdk.java.net/~mr/jigsaw/ea/module-summary.html)

<script type="text/javascript" src="/public/js/d3.v3.min.js"></script>
<script type="text/javascript" src="/public/js/jdk-modules.js"></script>