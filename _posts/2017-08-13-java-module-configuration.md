---
layout: post
title: Java Module Configuration
---

<div class="message">
  Java Module Configuration in Java 9 can be expressed with <B>EBNF</B> and <B>Railroad Diagram</B> as shown below.
</div>

<img src="https://i.pinimg.com/originals/9e/ce/19/9ece197e032e447691efa4c3c3d1eb8c.png" alt="" style="width:700px;"/>

<div class="message">
<B>EBNF Statement</B> with which the diagram was generated is as below,
JavaModuleConfiguration ::= annotation* 'open'? 'module' name '{' ('requires' 'transitive'? 'static'? moduleName ';' )* ( ( 'exports' | 'opens' ) packageName ( 'to' moduleName (',' moduleName)* )? ';' )* ( 'uses' SPIClassNameWithPackage ';' )* ( 'provides' SPIClassNameWithPackage 'with' SPIClassImplWithPackage (',' SPIClassImplWithPackage)* ';' )* '}'
</div>
<a href="https://www.slideshare.net/narendransolaisridharan/java-module-configuration" target="_blank">Get More Details...</a>

<div>
The above diagram has been generated with <a name="Railroad-Diagram-Generator" class="signature" title="http://www.bottlecaps.de/rr/ui" href="http://www.bottlecaps.de/rr/ui" target="_blank">Railroad Diagram Generator</a>. To know more about railroad diagram and to generate your custom diagram visit <a name="Railroad-Diagram-Generator" class="signature" title="http://www.bottlecaps.de/rr/ui" href="http://www.bottlecaps.de/rr/ui" target="_blank">Railroad Diagram Generator</a>
</div>




