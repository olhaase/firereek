#olhfirereek

JQuery Animation for Smoke and Fire
- - - 

###How to use it!

**First step: Just add following lines in your page**



<ul>
<code>
&lt;script src="javascripts/jquery-1.6.min.js" type="text/javascript"&gt;&lt;/script&gt;<br />
&lt;script src="javascripts/olhfirereek.js" type="text/javascript"&gt;&lt;/script&gt;<br />
&lt;script type="text/javascript"&gt;<br />
$(document).ready(function(){<br />
&nbsp;&nbsp;$("#olhfirereek").olhfirereek({<br />
&nbsp;&nbsp;&nbsp;&nbsp;fps:125,<br />
&nbsp;&nbsp;&nbsp;&nbsp;speed:40,<br />
&nbsp;&nbsp;&nbsp;&nbsp;turbulence:5,<br />
&nbsp;&nbsp;&nbsp;&nbsp;items:20,<br />
&nbsp;&nbsp;&nbsp;&nbsp;images: [<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'&lt;img src="images/smoke_0.png" width="100" height="194"/&gt;',<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'&lt;img src="images/smoke_1.png" width="100" height="194"/&gt;'<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br />
&nbsp;&nbsp;&nbsp;&nbsp;]<br />
&nbsp;&nbsp;});<br />
});<br />
&lt;/script&gt;>
</code>
</ul>


**Second step: Add a DIV with an ID of OLHFIREREEK in your page and start smoking.**

<ul>
<code>
e.x. stylesheet<br />
 #olhfirereek{<br />
&nbsp;&nbsp;position:absolute;<br />
&nbsp;&nbsp;top:0;<br />
&nbsp;&nbsp;left:250px;<br />
&nbsp;&nbsp;z-index:1000;<br />
&nbsp;&nbsp;overflow:hidden;<br />
&nbsp;&nbsp;width:300px;<br />
&nbsp;&nbsp;height:400px;<br />
}
</code>
</ul>


**Third step: Add in your page the following link: <a href="http://www.olh.de">design und programmierung haase</a>**

P.S.: Fire and explosions will be added some day.

 

