var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var h='';var w='';var done=false;
var FS=FS||{};FS={vid:'3nP6Tz45K_U',bs:false,bdb:true,bid:true,bpl:true,bmob:false,player:null,larg:0,idx:0,idxout:-1,gre:'',gak:'AIzaSyCBrcqXgjh0hzFBS-nxUHMYUwvSEhFafng',tableID:'1AEwxOyi_yhIbmq6ymIougg5hL0uPxA6TBEH_OiGk',msk:[],tbsrch:[],tbid:['#entrer','#tabsrch','#lrtrn','#genre','#choix','#lock'],pos:0,tbitms:[{id:0,items:[]}],pVid:function(i){var it;if(FS.bpl) if(FS.bid){it=$(FS.tbid[0]).jqxListBox('getItem', i);var tb=it['value'].split(',');FS.vid=tb[1];$("#listitem"+i+"entrer").addClass('uslc');}else{it=$(FS.tbid[2]).jqxListBox('getItem', i);FS.idxout=it['index'];FS.vid=it['value'];$("#listitem"+i+"lrtrn").addClass('uslc');}if(FS.bpl) FS.play(FS.vid);},lent:function(src){$(FS.tbid[0]).remove();$("#pl").append($("<div/>",{id:'entrer'}));var lrg;$(FS.tbid[0]).jqxListBox({allowDrop:true, source:src,width:FS.larg,height:h*0.95,renderer:function(idx,lb,v){return lb.split(',')[0];}});$(FS.tbid[0]).bind('select',function(event){FS.idx=event.args.index;var item=$(FS.tbid[0]).jqxListBox('getItem',FS.idx);var it=item['value'];var lb=it.split(',');if(FS.bpl){FS.bid=true;FS.play(lb[1]);}$(FS.tbid[2]).jqxListBox('addItem',{label:lb[0],value:lb[1]});});var items=$(FS.tbid[0]).jqxListBox('getItems');var nb=0;$(FS.tbid[0]+".jqx-widget.jqx-listbox").mouseenter(function(){var w=$(this).css('width').replace('px','')*1.5;$(FS.tbid[0]).jqxListBox({'width':w+'px'});FS.clMn();if(!FS.bmob) $("#verticalScrollBarentrer").hide();}).mouseleave(function(){var w=$(this).css('width').replace('px','')/1.5;$(FS.tbid[0]).jqxListBox({'width':w+'px'});FS.opMn();$("#verticalScrollBarentrer").show();});},bsip:function(){$(FS.tbid[1]).jqxInput({width:FS.larg-4,height:'auto'});$(FS.tbid[1]).on('change',function(event){if(event.args.type==='keyboard') FS.ipsrch();});},clck:function(id){FS.tableID= id;FS.srch();},play:function(id){if(id.charAt(0)!='*'){FS.player.loadVideoById(id);}else{id=id.substring(1);FS.player.loadPlaylist({list:id,index:0,listType:'playlist'});};},  srch:function(){var cb='';if(FS.bdb) cb='FS.dbcb';else cb='FS.refcb';var queryStr=[];queryStr.push("SELECT nom,id,genre");queryStr.push(" FROM "+FS.tableID);var sql=encodeURIComponent(queryStr.join(" "));$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+cb+"&key="+FS.gak,dataType:"jsonp"});},ipsrch:function(){FS.msk=[];for(i in FS.tbsrch){var queryStr=[];queryStr.push("SELECT nom, id, genre");queryStr.push(" FROM "+FS.tbsrch[i][1]);var sql=encodeURIComponent(queryStr.join(" "));$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback=FS.ipcb&key="+FS.gak,dataType: "jsonp"});}},dbcb:function(json){try{FS.handleError(json);}catch(e){;}var rws=json["rows"];for(var i in rws) if(rws[i][0]) FS.tbsrch.push(rws[i]);var l=FS.tbsrch.length;FS.tableID=FS.tbsrch[l-1][1];FS.bdb=false;FS.srch();var choix=$(FS.tbid[4]);var ul=$('<ul/>').addClass("nav navbar-nav");$.each(FS.tbsrch,function(){if(this[0]){var li = $('<li/>').appendTo(ul);var a=$('<a/>').attr('href', "javascript:FS.clck('"+this[1]+"');").text(this[0]).css('color','white').appendTo(li);}});ul.appendTo(choix);},refcb:function(json){try{FS.handleError(json);}catch(e){;}FS.msk=json["rows"];var source=[];if(FS.gre){for(var i in FS.msk){var src=FS.msk[i];if(FS.gre==src[2]) source.push(src);}}else source=FS.msk;if(source.length==0) source.push("choice another table");FS.lent(source);if(!FS.bs){FS.vid=source[0][1];if(FS.bpl) FS.play(FS.vid);FS.bs=true;}FS.idx=0;$(FS.tbid[0]).removeClass("boxanm");$(FS.tbid[0]).addClass("boxanm");json=new array();},ipcb:function(json){try{FS.handleError(json);}catch(e){;}var rw=json["rows"];var val=$(FS.tbid[1]).val().toLowerCase();for(var i in rw) if(rw[i][0].toLowerCase().contains(val)) FS.msk.push([rw[i][2]+"/_/"+rw[i][0],rw[i][1]]);FS.fnshipsrch();},fnshipsrch:function(){FS.lent(FS.msk);},handleError:function(json){if(json["error"]!=undefined){var error=json["error"]["errors"];console.log("Error in Fusion Table call!");for(var row in error){console.log("Domain: "+error[row]["domain"]);console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}},ready:function(event){if(FS.bmob) FS.player.setSize(w*100,h);else FS.player.setSize(w*70,h);try{FS.play(FS.vid);}finally{event.target.playVideo();}},change:function(event){if(event.data==0){if(!FS.bpl) $("#lock").mousedown();FS.bpl=true;if(FS.bid){$("#listitem"+FS.idx+"entrer").removeClass('uslc');FS.idx=FS.idx+1;try{FS.pVid(FS.idx);}catch(ex){FS.idx=0;FS.pVid(FS.idx);}}else{$("#listitem"+FS.idxout+"lrtrn").removeClass('uslc');FS.idxout=FS.idxout+1;try{FS.pVid(FS.idxout);}catch(ex){FS.idxout=0;FS.pVid(FS.idxout);} }}},erreur:function(event){$(FS.tbid[0]).jqxListBox('removeAt',FS.idx);var items=$(FS.tbid[2]).jqxListBox('getItems');FS.idxout=items.length-1;$(FS.tbid[2]).jqxListBox('removeAt',FS.idxout);if(FS.bid){FS.pVid(FS.idx);}FS.idxout=FS.idxout-1;},opMn:function(){if(!FS.bmob) FS.player.setSize(w*70,h*0.85);$(FS.tbid[4]).addClass('anm').removeClass('anom');},clMn:function(){if(!FS.bmob) FS.player.setSize(w*70,h);$(FS.tbid[4]).addClass('anom').removeClass('anm');}}; 
onYouTubeIframeAPIReady=function(){FS.player=new YT.Player('yT',{events:{'onReady':FS.ready,'onStateChange':FS.change,'onError':FS.erreur}});};
$(document).ready(function(){h=$(window).height();w=$(window).width()/100;FS.larg=w*13;var size=w*70;FS.srch();FS.bsip();if($("#lock").css('width')=='20px') FS.bmob=true;if(FS.bmob){$("<div/>",{id:'yT'}).appendTo("body");size=w*100;FS.larg=w*37;}else{$("<div/>",{id:'yT'}).appendTo("#dtc");$("#dtc").mouseover(function(){FS.opMn();}).mouseleave(function(){FS.clMn();});}$(window).resize(function(){if(FS.player!=null){FS.player.setSize(size,h);}}).resize();$(FS.tbid[2]).jqxListBox({allowDrop: true,allowDrag: true, width:FS.larg,height:h*0.95});$(FS.tbid[2]).bind('select',function(event){if(FS.bpl) FS.bid=false;var idx=event.args.index;FS.idxout=idx;FS.pVid(idx);});rClick=function(){var idx=$(FS.tbid[2]).jqxListBox('getSelectedIndex');$(FS.tbid[2]).jqxListBox('removeAt',idx);$(FS.tbid[2]).jqxListBox('clearSelection');};$(FS.tbid[2]).mousedown(function(e){if(!e) rClick();});var src=['','rap','r&b','poprock','electro','gangsta','dancehall','newroots','roots','ile','luv','reunion',"web serie","film","doc","humor tv"];$(FS.tbid[3]).jqxComboBox({ source:src,placeHolder:"genre",width:w*11,height: '25px'});$("#dropdownlistContentgenre").click(function(){if($(FS.tbid[3]).jqxComboBox('isOpened')) $(FS.tbid[3]).jqxComboBox('close');else $(FS.tbid[3]).jqxComboBox('open');});$(FS.tbid[3]).bind('select',function (event){var idx=event.args.index;var item = $(FS.tbid[3]).jqxComboBox('getItem', idx);FS.gre=item.label;FS.srch();});$(FS.tbid[5]).css('width',w*2);$(FS.tbid[5]).css('height',h*0.04);$(FS.tbid[5]).mousedown(function(){var path="http://youtube.runsense.re/css/";if(FS.bpl){FS.bpl=false;$(FS.tbid[5]).css('background-image','url("'+path+'lock.png")');}else{FS.bpl=true;$(FS.tbid[5]).css('background-image','url("'+path+'lockop.png")');};});});
 