var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);
var h='';var w='';var done=false;
var funcSrch=funcSrch||{};
funcSrch={vid:'3nP6Tz45K_U',vnm:'',bs:false,bdb:true,bid:true,bpl:true,bmob:false,player:null,larg:0,idx:0,idxout:-1,gre:'',gak:'AIzaSyCBrcqXgjh0hzFBS-nxUHMYUwvSEhFafng',tableID:'1AEwxOyi_yhIbmq6ymIougg5hL0uPxA6TBEH_OiGk',msk:[],tbsrch:[],tbid:['#entrer','#tabsrch','#lrtrn','#genre','#choix'],
    pVid:function(i){var it;if(funcSrch.bpl) if(funcSrch.bid){it=$(funcSrch.tbid[0]).jqxListBox('getItem', i);var tb=it['value'].split(',');funcSrch.vid=tb[1];funcSrch.vnm=tb[0];$('#listitem'+funcSrch.idx+'entrer').addClass('slc');}else{it=$(funcSrch.tbid[2]).jqxListBox('getItem', i);funcSrch.idxout=it['index'];funcSrch.vid=it['value'];$('#listitem'+funcSrch.idx+'lrtrn').addClass('slc');}if(funcSrch.bpl) funcSrch.player.loadVideoById(funcSrch.vid);},
    lent:function(src){$(funcSrch.tbid[0]).remove();$("#pl").append($("<div/>",{id:'entrer'}));var lrg;$("#entrer").jqxListBox({allowDrop:true, source:src,width:funcSrch.larg,height:h*0.95,renderer:function(idx,lb,v){return lb.split(',')[0];}});$(funcSrch.tbid[0]).bind('select',function(event){funcSrch.idx=event.args.index;var item=$(funcSrch.tbid[0]).jqxListBox('getItem',funcSrch.idx);var it=item['value'];var lb=it.split(',');funcSrch.vnm=lb[0].replace(' ','+');funcSrch.bid=true;if(funcSrch.bpl) funcSrch.player.loadVideoById(lb[1]);$(funcSrch.tbid[2]).jqxListBox('addItem',{label:lb[0],value:lb[1]});$('#listitem'+funcSrch.idxout+'lrtrn').jqxTooltip({content:lb[2]+"**//**"+lb[0]});$('#listitem'+funcSrch.idx+'entrer').addClass('uslc');});var items=$(funcSrch.tbid[0]).jqxListBox('getItems');var nb=0;$.each(items,function(){var lab=this['label'].split(',');$('#listitem'+nb+'entrer').attr("title",lab[2]+"**//**"+lab[0]);nb++;});},
    bsip:function(){$("#tabsrch").jqxInput({width:funcSrch.larg-4,height:'auto'});$(funcSrch.tbid[1]).on('change',function(event){if(event.args.type==='keyboard') funcSrch.ipsrch();});},
    clck:function(id){funcSrch.tableID= id;funcSrch.srch();},    
    srch:function(){var cb='';if(funcSrch.bdb) cb='funcSrch.dbcb';else cb='funcSrch.refcb';var queryStr=[];queryStr.push("SELECT nom,id,genre");queryStr.push(" FROM "+funcSrch.tableID);var sql=encodeURIComponent(queryStr.join(" "));$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+cb+"&key="+funcSrch.gak,dataType:"jsonp"});},
    ipsrch:function(){funcSrch.msk=[];for(i in funcSrch.tbsrch){var queryStr=[];queryStr.push("SELECT nom, id, genre");queryStr.push(" FROM "+funcSrch.tbsrch[i][1]);var sql=encodeURIComponent(queryStr.join(" "));$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback=funcSrch.ipcb&key="+funcSrch.gak,dataType: "jsonp"});}},
    dbcb:function(json){try{funcSrch.handleError(json);}catch(e){;}var rws=json["rows"];for(var i in rws) if(rws[i][0]) funcSrch.tbsrch.push(rws[i]);var l=funcSrch.tbsrch.length;funcSrch.tableID=funcSrch.tbsrch[l-1][1];funcSrch.bdb=false;funcSrch.srch();var choix=$(funcSrch.tbid[4]);var ul=$('<ul/>').addClass("nav navbar-nav");$.each(funcSrch.tbsrch,function(){if(this[0]){var li = $('<li/>').appendTo(ul);var a=$('<a/>').attr('href', "javascript:funcSrch.clck('"+this[1]+"');").text(this[0]).css('color','white').appendTo(li);}});ul.appendTo(choix);},
    refcb:function(json){try{funcSrch.handleError(json);}catch(e){;}funcSrch.msk=json["rows"];var source=[];if(funcSrch.gre){for(var i in funcSrch.msk){var src=funcSrch.msk[i];if(funcSrch.gre==src[2]) source.push(src);}}else source=funcSrch.msk;if(source.length==0) source.push("choice another table");funcSrch.lent(source);if(!funcSrch.bs){funcSrch.vid=source[0][1];if(funcSrch.bpl) funcSrch.player.loadVideoById(funcSrch.vid);funcSrch.bs=true;}json=new array();},
    ipcb:function(json){try{funcSrch.handleError(json);}catch(e){;}var rw=json["rows"];var val=$(funcSrch.tbid[1]).val().toLowerCase();for(var i in rw) if(rw[i][0].toLowerCase().contains(val)) funcSrch.msk.push([rw[i][2]+"/_/"+rw[i][0],rw[i][1]]);funcSrch.fnshipsrch();},
    fnshipsrch:function(){funcSrch.lent(funcSrch.msk);},
    handleError:function(json){if(json["error"]!=undefined){var error=json["error"]["errors"];console.log("Error in Fusion Table call!");for(var row in error){console.log("Domain: "+error[row]["domain"]);console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}},
    ready:function(event){if(funcSrch.bmob) funcSrch.player.setSize(w*100,h);else funcSrch.player.setSize(w*70,h);funcSrch.player.loadVideoById(funcSrch.vid);event.target.playVideo();},
    change:function(event){if(event.data==0){if(!funcSrch.bpl) $("#lock").mousedown();funcSrch.bpl=true;if(funcSrch.bid){funcSrch.idx=funcSrch.idx+1;try{funcSrch.pVid(funcSrch.idx);}catch(ex){funcSrch.idx=0;funcSrch.pVid(funcSrch.idx);}}else{funcSrch.idxout=funcSrch.idxout+1;try{funcSrch.pVid(funcSrch.idxout);}catch(ex){funcSrch.idxout=0;funcSrch.pVid(funcSrch.idxout);} }}},
    erreur:function(event){alert(event.data);$(funcSrch.tbid[0]).jqxListBox('removeAt',funcSrch.idx);$(funcSrch.tbid[2]).jqxListBox('removeAt',funcSrch.idxout);if(funcSrch.bid){funcSrch.pVid(funcSrch.idx++);}funcSrch.idxout--;},
    opMn:function(){if(!funcSrch.bmob) funcSrch.player.setSize(w*70,h*0.85);$(funcSrch.tbid[4]).addClass('anm').removeClass('anom');},clMn:function(){if(!funcSrch.bmob) funcSrch.player.setSize(w*70,h);$(funcSrch.tbid[4]).addClass('anom').removeClass('anm');}
}; 
onYouTubeIframeAPIReady=function(){funcSrch.player=new YT.Player('yT',{events:{'onReady':funcSrch.ready,'onStateChange':funcSrch.change,'onError':funcSrch.erreur}});};
$(document).ready(function(){h=$(window).height();w=$(window).width()/100;
    funcSrch.larg=w*13;var size=w*70;funcSrch.srch();funcSrch.bsip();if($("#lock").css('width')=='20px') funcSrch.bmob=true;if(funcSrch.bmob){$("<div/>",{id:'yT'}).appendTo("body");size=w*100;funcSrch.larg=w*37;}
    else{$("<div/>",{id:'yT'}).appendTo("#dtc");$("#dtc").mouseover(function(){funcSrch.opMn();}).mouseleave(function(){funcSrch.clMn();});$("#src").hide();}
    $(window).resize(function(){if(funcSrch.player!=null){funcSrch.player.setSize(size,h);}}).resize();
    $("#lrtrn").jqxListBox({allowDrop: true,allowDrag: true, width:funcSrch.larg,height:h*0.95});$(funcSrch.tbid[2]).bind('select',function(event){funcSrch.bid=false;var idx=event.args.index;funcSrch.idxout=idx;funcSrch.pVid(idx);});rClick=function(){var idx=$(funcSrch.tbid[2]).jqxListBox('getSelectedIndex');$(funcSrch.tbid[2]).jqxListBox('removeAt',idx);};$("#lrtrn").mousedown(function(e){if(!e) rClick();});    
var src=['','rap','r&b','poprock','electro','gangsta','dancehall','newroots','roots','ile','luv','reunion'];
$("#genre").jqxComboBox({ source: src, placeHolder: "genre", width:w*11, height: '25px' });
$(funcSrch.tbid[3]).bind('select',function (event){var idx=event.args.index;var item = $(funcSrch.tbid[3]).jqxComboBox('getItem', idx);funcSrch.gre=item.label;funcSrch.srch();$('#listitem'+funcSrch.idxout+'lrtrn').addClass('uslc');});
$("#lock").css('width',w*2);$("#lock").css('height',h*0.04);
$("#lock").mousedown(function(){var path="http://youtube.runsense.re/css/";if(funcSrch.bpl){funcSrch.bpl=false;$("#lock").css('background-image','url("'+path+'lock.png")');}else{funcSrch.bpl=true;$("#lock").css('background-image','url("'+path+'lockop.png")');};});
$("#src").mousedown(function(){var cl=$(funcSrch.tbid[4]).attr('class').replace('container-fluid ','');if(cl=='anom'){$("#lrtrn").jqxListBox({width:'auto'});$("#lrtrn").jqxListBox('refresh');funcSrch.opMn();}else funcSrch.clMn();});});
 
