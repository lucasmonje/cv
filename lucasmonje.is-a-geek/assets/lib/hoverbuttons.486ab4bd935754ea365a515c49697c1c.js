var stAdSlider;function stSharebarSlider(a,b,j){var i=a;var f=0;var g=0;var e=false;var d=b;var h=j;function k(l,m){slider=document.getElementById(i);if(g>=m){e=false;g=m;if(h=="left"){slider.style.left=m+"px"}clearInterval(f);if(l!=false){l()}}else{g+=d;if(g>m){g=m}if(h=="left"){slider.style.left=g+"px"}}}function c(l,m){slider=document.getElementById(i);if(g<=m){e=false;g=m;if(h=="left"){slider.style.left=m+"px"}clearInterval(f);if(l!=false){l()}}else{g-=d;if(g<m){g=m}if(h=="left"){slider.style.left=g+"px"}}}this.slide=function(m,l,o,n){if(!e){e=true;if(m){g=l;f=setInterval(function(){k(n,o)},30)}else{g=l;f=setInterval(function(){c(n,o)},30)}}}}sharethis.widgets.hoverbuttons.framework=function(){function b(){var k={publisher:"",hostname:"",location:"",st_url:"",st_title:"",position:"left",ad:{visible:false,demoTakeOver_Cadi:false,demoTakeOver:false,demo300x250:false,adLocation:"",openDelay:5,closeDelay:0},chicklets_params:{instagram:{},email:{},facebook:{},twitter:{},pinterest:{},linkedin:{},googleplus:{},digg:{},stumbleupon:{},reddit:{},tumblr:{},sharethis:{}},chicklets:{items:["facebook","twitter","linkedin","email","sharethis"]}};return k}var c;var h;var d;var g=false;function e(s){var r=document.createElement("div");r.className="sthoverbuttons-chicklets";var q="";var m="";if(c.st_url!=""){m='st_url = "'+c.st_url+'"'}var l="";if(c.st_title!=""){l='st_title = "'+c.st_title+'"'}for(var p in c.chicklets.items){if(typeof(c.chicklets.items[p])!="function"){var n="";if(c.chicklets_params[c.chicklets.items[p]]){var k=c.chicklets_params[c.chicklets.items[p]];for(var o in k){n+=o+'="'+k[o]+'"'}}if(c.chicklets.items[p]=="plusone"){q+='<span class="st_'+c.chicklets.items[p]+'_large" '+n+' style="display:block; height: 18px;" displayText="" '+m+" "+l+"></span>"}else{q+='<span class="st_'+c.chicklets.items[p]+'_large" '+n+' style="display:block; height: 35px;" displayText="" '+m+" "+l+"></span>"}}}r.innerHTML=q;s.appendChild(r);if(q!=""){stButtons.makeButtons()}sharethis.utilities.domUtilities.addListenerCompatible(r,"click",function(){sharethis.utilities.gaLog("HoveringButtons - User Action",c.hostname,"sharing button clicked")});return r}function j(){if(g){var l=document.getElementById("sthoverbuttons-300x250-iframe");if(c.ad.adLocation!=""){l.setAttribute("src",c.ad.adLocation)}g=false}if(c.ad.closeDelay>0){clearTimeout(d);d=setTimeout(a,c.ad.closeDelay*1000)}isOpened300x250=true;var k=document.getElementById("sthoverbuttons-300x250");k.style.display="block";if(typeof(stAdSlider)==undefined||typeof(stAdSlider)=="undefined"||stAdSlider==null){stAdSlider=new stSharebarSlider("sthoverbuttons-300x250",10,"left")}if(c.position=="right"){stAdSlider.slide(false,10,-302,"")}else{stAdSlider.slide(true,-232,55,"")}}function a(){clearTimeout(d);if(typeof(stAdSlider)==undefined||typeof(stAdSlider)=="undefined"||stAdSlider==null){stAdSlider=new stSharebarSlider("sthoverbuttons-300x250",10,"left")}if(c.position=="right"){stAdSlider.slide(true,-232,10,i)}else{stAdSlider.slide(false,55,-232,i)}}function i(){isOpened300x250=false;var k=document.getElementById("sthoverbuttons-300x250");k.style.display="none"}function f(m,l){for(var k in l){if(m.hasOwnProperty(k)&&l[k]!==null){if(k!="chicklets"&&k!="chicklets_params"&&typeof(m[k])=="object"){f(m[k],l[k])}else{m[k]=l[k]}}}}this.initWidget=function(){stAdSlider=null;isOpened300x250=false;clearTimeout(h);c=b();if(sharethis.globals.hoveringButtonsOptions){f(c,sharethis.globals.hoveringButtonsOptions)}var q=document.createElement("div");q.setAttribute("id","sthoverbuttons");if(c.position=="right"){q.className="sthoverbuttons-pos-right"}else{q.className="sthoverbuttons-pos-left"}document.getElementsByTagName("body")[0].appendChild(q);var n=document.createElement("div");n.setAttribute("id","sthoverbuttons-background");if(c.position=="right"){n.className="sthoverbuttons-background-r"}else{n.className="sthoverbuttons-background-l"}q.appendChild(n);var t=document.createElement("div");t.setAttribute("id","sthoverbuttons-top");if(c.position=="right"){t.className="sthoverbuttons-top-r"}else{t.className="sthoverbuttons-top-l"}t.innerHTML="&nbsp;";n.appendChild(t);var s=document.createElement("div");s.setAttribute("id","sthoverbuttons-shade");if(c.position=="right"){s.className="sthoverbuttons-shade-r"}else{s.className="sthoverbuttons-shade-l"}s.innerHTML="&nbsp;";n.appendChild(s);var l=document.createElement("div");l.setAttribute("id","sthoverbuttons-bottom");if(c.position=="right"){l.className="sthoverbuttons-bottom-r"}else{l.className="sthoverbuttons-bottom-l"}l.innerHTML="&nbsp;";n.appendChild(l);var r=document.createElement("div");r.setAttribute("id","sthoverbuttonsMain");if(c.position=="right"){r.className="sthoverbuttonsMain-r"}else{r.className="sthoverbuttonsMain-l"}q.appendChild(r);var m=document.createElement("div");m.className="sthoverbuttons-label";m.innerHTML="<span>Share</span>";r.appendChild(m);e(r);g=false;if(c.ad.visible&&(c.ad.adLocation!=""||c.ad.demo300x250)){var u=document.createElement("div");u.setAttribute("id","sthoverbuttonsPromoTab");if(c.position=="right"){u.className="sthoverbuttonsPromoTab-r"}else{u.className="sthoverbuttonsPromoTab-l"}u.innerHTML="&nbsp;";n.appendChild(u);var k=document.createElement("div");k.setAttribute("id","sthoverbuttons-300x250");if(c.position=="right"){k.className="sthoverbuttons-adContainer-r"}else{k.className="sthoverbuttons-adContainer-l"}var o=document.createElement("div");o.className="sthoverbuttons-window";var v=document.createElement("div");v.className="sthoverbuttons-stCloseNew";if(c.position=="right"){v.className+=" sthoverbuttons-stCloseNew-r"}else{v.className+=" sthoverbuttons-stCloseNew-l"}v.innerHTML="<span class='closewindow barassets'>&nbsp;</span>";v.setAttribute("id","sthoverbuttons-closead");sharethis.utilities.domUtilities.addListenerCompatible(v,"click",function(){a();sharethis.utilities.gaLog("HoveringButtons - User Action",c.hostname,"Close ad")});k.appendChild(v);var p;if(c.ad.demo300x250){p=document.createElement("div");p.style.backgroundImage="url(http://sd.sharethis.com/disc/images/demo_300x250.png)";p.style.height="250px"}else{var p=document.createElement("iframe");p.setAttribute("id","sthoverbuttons-300x250-iframe");p.style.height="250px";p.style.width="300px";p.style.border="none";p.setAttribute("frameBorder",0);g=true}o.appendChild(p);k.appendChild(o);q.appendChild(k);if(!c.ad.demo300x250){if(c.ad.openDelay>0){h=setTimeout(j,c.ad.openDelay*1000)}else{j()}}sharethis.utilities.domUtilities.addListenerCompatible(u,"click",function(){if(!isOpened300x250){clearTimeout(h);j();sharethis.utilities.gaLog("HoveringButtons - User Action",c.hostname,"Ad opened")}});sharethis.utilities.domUtilities.addListenerCompatible(u,"mouseover",function(){if(!isOpened300x250){clearTimeout(h);h=setTimeout(j,1000)}});sharethis.utilities.domUtilities.addListenerCompatible(u,"mouseout",function(){clearTimeout(h)})}sharethis.utilities.initGA("HoveringButtons - Load",c.hostname)}};var stMini=new sharethis.widgets.hoverbuttons.framework();var isOpened300x250=false;if(sharethis.globals.barPageDoneLoading==1){stMini.initWidget()}else{if(sharethis.utilities.domUtilities.addListenerCompatible(window,"load",stMini.initWidget)==false){sharethis.utilities.domUtilities.addListenerCompatible(document,"load",stMini.initWidget)}};