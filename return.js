var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";
var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);
var player;var h='';var w='';var done=false;
var funcSrch=funcSrch||{};
funcSrch={vid:'3nP6Tz45K_U',bs:false,bAp:true,bdb:true,
    gak:'AIzaSyCBrcqXgjh0hzFBS-nxUHMYUwvSEhFafng',
    tableID:'1AEwxOyi_yhIbmq6ymIougg5hL0uPxA6TBEH_OiGk',msk:[],tbsrch:[],
    pVid:function(i){var it =$('#lrtrn').jqxListBox('getItem', i);funcSrch.vid=it['value'];player.loadVideoById(funcSrch.vid);},
    clck:function(id){funcSrch.tableID= id;funcSrch.srch();},    
    srch:function(){var cb='';
        if(funcSrch.bdb) cb='funcSrch.dbcb';else cb='funcSrch.refcb';
        var queryStr =[];queryStr.push("SELECT nom,id");queryStr.push(" FROM "+funcSrch.tableID);
        var sql = encodeURIComponent(queryStr.join(" "));
        $.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+cb+"&key="+funcSrch.gak, 
                dataType: "jsonp"});                
    },
    ipsrch:function(){
        funcSrch.msk=[];
        for(i in funcSrch.tbsrch){
        var queryStr =[];queryStr.push("SELECT nom, id, genre");queryStr.push(" FROM "+funcSrch.tbsrch[i][1]);
        var sql = encodeURIComponent(queryStr.join(" "));
        $.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback=funcSrch.ipcb&key="+funcSrch.gak, 
                dataType: "jsonp"});}
      },
    dbcb:function(json){try{funcSrch.handleError(json);}catch(e){;}
        var rws=json["rows"];
        for(var i in rws) if(rws[i][0]) funcSrch.tbsrch.push(rws[i]);
        var l=funcSrch.tbsrch.length;
        funcSrch.tableID=funcSrch.tbsrch[l-1][1];
        funcSrch.bdb=false;funcSrch.srch();
        var choix=$('#choix');var ul=$('<ul/>').addClass("nav navbar-nav");
        $.each(funcSrch.tbsrch,function(){
            if(this[0]){var li = $('<li/>').appendTo(ul);
              var a=$('<a/>').attr('href', "javascript:funcSrch.clck('"+this[1]+"');").text(this[0]).css('color','white').appendTo(li);
            }
        });
        ul.appendTo(choix);
    },
    refcb:function(json){
        try{funcSrch.handleError(json);}catch(e){;}
        funcSrch.msk=json["rows"];var source = funcSrch.msk;
                $("#entrer").jqxListBox({allowDrop:true, source:source, width:w*13,height:h});
                $('#entrer').bind('select', function (event){
                var args = event.args;var item = $('#entrer').jqxListBox('getItem', args.index);var it=item['value'];var lb=it.split(',');
                if(funcSrch.bAp) player.loadVideoById(lb[1]);$("#lrtrn").jqxListBox('addItem',{label:lb[0],value:lb[1]});
            });
            if(!funcSrch.bs){funcSrch.vid=source[0][1];player.loadVideoById(funcSrch.vid);funcSrch.bs=true;} 
            json=new array();
    },
    ipcb:function(json){
        try{funcSrch.handleError(json);}catch(e){;}
        var rw=json["rows"];var val=$('#input').val();        
        for(var i in rw) if(rw[i][0].contains(val)) funcSrch.msk.push(rw[i][2]+"/_/"+rw[i][0]);              
        funcSrch.fnshipsrch();           
    },
    fnshipsrch:function(){
      $("#entrer").jqxListBox({allowDrop:true, source:funcSrch.msk, width:w*13,height:h});  
    },
    handleError:function(json){if(json["error"]!=undefined){var error=json["error"]["errors"];console.log("Error in Fusion Table call!");for(var row in error){console.log("Domain: "+error[row]["domain"]);console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}}
}; 
function onYouTubeIframeAPIReady(){
    player=new YT.Player('yT',{events:{'onReady':onPlayerReady,'onStateChange':onPlayerStateChange}});
};
function onPlayerReady(event){player.setSize(w*70,h);player.loadVideoById(funcSrch.vid);event.target.playVideo();
}
function onPlayerStateChange(event){
    if(event.data==0) done=false;
    if(!done){done=true;var idx=$("#lrtrn").jqxListBox('getSelectedIndex');funcSrch.pVid(idx+1);funcSrch.bAp=false;}
};               
      
$(document).ready(function(){
    h=$(window).height();w=$(window).width()/100;
    $(window).resize(function(){if(player!=null){player.setSize(w*70,h);}}).resize();
    funcSrch.srch();$("#input").jqxInput({ width: 'auto', height: 'auto'});
    $('#input').on('change',function(event){if(event.args.type==='keyboard') funcSrch.ipsrch();});
    $("#lrtrn").jqxListBox({allowDrop: true,allowDrag: true, width:w*13,height:h });
    $('#lrtrn').bind('select',function(event){funcSrch.bAp=false;var args = event.args;funcSrch.pVid(args.index);}); 
    rClick=function(){var idx = $("#lrtrn").jqxListBox('getSelectedIndex');$("#lrtrn").jqxListBox('removeAt',idx);};
    $("#dtc").mouseover(function(){$("#choix").addClass('anm').removeClass('anom');})
             .mouseleave(function(){$("#choix").addClass('anom').removeClass('anm');});
 });