var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);
var h='';var w='';var done=false;
var funcSrch=funcSrch||{};
funcSrch={vid:'3nP6Tz45K_U',vnm:'',bs:false,bdb:true,player:null,idx:0,idxout:-1,bid:true,gre:'',gak:'AIzaSyCBrcqXgjh0hzFBS-nxUHMYUwvSEhFafng',tableID:'1AEwxOyi_yhIbmq6ymIougg5hL0uPxA6TBEH_OiGk',msk:[],tbsrch:[],
    pVid:function(i){var it;if(funcSrch.bid) {it=$("#entrer").jqxListBox('getItem', i);var tb=it['value'].split(',');funcSrch.vid=tb[1];funcSrch.vnm=tb[0];}else{it=$("#lrtrn").jqxListBox('getItem', i);funcSrch.idxout=it['index'];funcSrch.vid=it['value'];}funcSrch.player.loadVideoById(funcSrch.vid);},
    lent:function(src){$("#entrer").remove();$("#pl").append($("<div/>",{id:'entrer'}) );$("#entrer").jqxListBox({allowDrop:true, source:src, width:w*13,height:h*0.95});$('#entrer').bind('select', function (event){funcSrch.idxout++;var idx=event.args.index;funcSrch.idx=idx;var item=$('#entrer').jqxListBox('getItem',idx);var it=item['value'];var lb=it.split(',');funcSrch.vnm=lb[0].replace(' ','+');funcSrch.bid=true;funcSrch.player.loadVideoById(lb[1]);$("#lrtrn").jqxListBox('addItem',{label:lb[0],value:lb[1]});});},
    clck:function(id){funcSrch.tableID= id;funcSrch.srch();},    
    srch:function(){var cb='';if(funcSrch.bdb) cb='funcSrch.dbcb';else cb='funcSrch.refcb';var queryStr=[];queryStr.push("SELECT nom,id,genre");queryStr.push(" FROM "+funcSrch.tableID);var sql=encodeURIComponent(queryStr.join(" "));$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+cb+"&key="+funcSrch.gak,dataType:"jsonp"});},
    ipsrch:function(){funcSrch.msk=[];for(i in funcSrch.tbsrch){var queryStr=[];queryStr.push("SELECT nom, id, genre");queryStr.push(" FROM "+funcSrch.tbsrch[i][1]);var sql=encodeURIComponent(queryStr.join(" "));$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback=funcSrch.ipcb&key="+funcSrch.gak,dataType: "jsonp"});}},
    dbcb:function(json){try{funcSrch.handleError(json);}catch(e){;}var rws=json["rows"];for(var i in rws) if(rws[i][0]) funcSrch.tbsrch.push(rws[i]);var l=funcSrch.tbsrch.length;funcSrch.tableID=funcSrch.tbsrch[l-1][1];funcSrch.bdb=false;funcSrch.srch();var choix=$('#choix');var ul=$('<ul/>').addClass("nav navbar-nav");$.each(funcSrch.tbsrch,function(){if(this[0]){var li = $('<li/>').appendTo(ul);var a=$('<a/>').attr('href', "javascript:funcSrch.clck('"+this[1]+"');").text(this[0]).css('color','white').appendTo(li);}});ul.appendTo(choix);},
    refcb:function(json){try{funcSrch.handleError(json);}catch(e){;}funcSrch.msk=json["rows"];var source=[];if(funcSrch.gre){for(var i in funcSrch.msk){var src=funcSrch.msk[i];if(funcSrch.gre==src[2]) source.push(src);}}else source=funcSrch.msk;if(source.length==0) source.push("choice another table");funcSrch.lent(source);if(!funcSrch.bs){funcSrch.vid=source[0][1];funcSrch.player.loadVideoById(funcSrch.vid);funcSrch.bs=true;}json=new array();},
    ipcb:function(json){try{funcSrch.handleError(json);}catch(e){;}var rw=json["rows"];var val=$('#tabsrch').val();for(var i in rw) if(rw[i][0].contains(val)) funcSrch.msk.push([rw[i][2]+"/_/"+rw[i][0],rw[i][1]]);funcSrch.fnshipsrch();},
    fnshipsrch:function(){funcSrch.lent(funcSrch.msk);},
    handleError:function(json){if(json["error"]!=undefined){var error=json["error"]["errors"];console.log("Error in Fusion Table call!");for(var row in error){console.log("Domain: "+error[row]["domain"]);console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}}
}; 
onYouTubeIframeAPIReady=function(){funcSrch.player=new YT.Player('yT',{events:{'onReady':ready,'onStateChange':change,'onError':erreur}});};
ready=function(event){funcSrch.player.setSize(w*70,h);funcSrch.player.loadVideoById(funcSrch.vid);event.target.playVideo();}
change=function(event){if(event.data==0){funcSrch.idx=funcSrch.idx+1;funcSrch.pVid(funcSrch.idx);}};               
erreur=function(event){$("#entrer").jqxListBox('removeAt',funcSrch.idx);$("#lrtrn").jqxListBox('removeAt',funcSrch.idxout);if(funcSrch.bid){funcSrch.pVid(funcSrch.idx);}else{funcSrch.pVid(funcSrch.idxout);}funcSrch.idxout--;};  
$(document).ready(function(){h=$(window).height();w=$(window).width()/100;$(window).resize(function(){if(funcSrch.player!=null){funcSrch.player.setSize(w*70,h);}$('#lrtrn').jqxListBox('refresh');$('#entrer').jqxListBox('refresh');}).resize();
    funcSrch.srch();$("#tabsrch").jqxInput({ width: w*13, height: 'auto'});
    $('#tabsrch').on('change',function(event){if(event.args.type==='keyboard') funcSrch.ipsrch();});
    $("#lrtrn").jqxListBox({allowDrop: true,allowDrag: true, width:w*13,height:h*0.95 });
    $('#lrtrn').bind('select',function(event){funcSrch.bid=false;var idx=event.args.index;funcSrch.idxout=idx;funcSrch.pVid(idx);}); 
    rClick=function(){var idx = $("#lrtrn").jqxListBox('getSelectedIndex');$("#lrtrn").jqxListBox('removeAt',idx);};
    $("#dtc").mouseover(function(){funcSrch.player.setSize(w*70,h*0.85);$("#choix").addClass('anm').removeClass('anom');}).mouseleave(function(){funcSrch.player.setSize(w*70,h);$("#choix").addClass('anom').removeClass('anm');});
var src=['','rap','r&b','poprock','electro','gangsta','dancehall','newroots','roots','ile','luv','reunion'];
$("#genre").jqxComboBox({ source: src, placeHolder: "genre", width:w*13, height: '25px' });
$('#genre').bind('select',function (event){var idx = event.args.index;var item = $('#genre').jqxComboBox('getItem', idx.index);funcSrch.gre=item.label;funcSrch.srch();});
});
 