---
layout: post
title: Java Module Configuration
---

<div class="message">
  Java Module Configuration in Java 9 can be expressed with EBNF and Rail Road Diagram as shown below.
</div>

<img src="https://i.pinimg.com/originals/f5/37/4e/f5374e2b80781ba93996119085b69225.png" alt="" style="width:700px;"/>

<div class="message">
JavaModuleConfiguration ::= '@annotation'* 'open'? 'module' name '{' ('requires' 'transitive'? 'static'? moduleName (',' moduleName)* ';' )* ( ( 'exports' | 'opens' ) packageName ( 'to' moduleName (',' moduleName)* )? ';' )* ( 'uses' SPIClassNameWithPackage (',' SPIClassNameWithPackage)* ';' )* ( 'provides' SPIClassNameWithPackage 'with' SPIClassImplWithPackage (',' SPIClassImplWithPackage)* ';' )* '}'
</div>
<a href="https://i.pinimg.com/originals/d3/27/b2/d327b2eab439c382884da3dfd3426fcf.gif" target="_blank">Get More Details...</a>

<div>
... generated with <a name="Railroad-Diagram-Generator" class="signature" title="http://www.bottlecaps.de/rr/ui" href="http://www.bottlecaps.de/rr/ui" target="_blank">Railroad Diagram Generator</a>
</div>




