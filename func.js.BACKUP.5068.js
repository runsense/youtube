var bm=false;if($('#jqxTree').css('width')==='100%'){bnm=true;}var FuncInit=FuncInit||{};var FuncInit={bdo:false,idmxpl:'#mix_pl',idsta:'#sTa',idsto:'#sTo',idmute:'#mute',idsw:'#sw',idsgq:'#sgq',idmi:'#mix',idmp:'#mix_p',idms:'#mix_s',idasyn:"#asyn",idsync:"#sync",idplyr:'#player',bblck:false,bchg:false,basyn:true,bmix:false,sgq:'default',idtree:'#jqxTree',videoid:'',plyLstId:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i',plys:null,player:null,mix:null,tmpVid:[],h:0,w:0,tl:0,fact:1,uri:'',srcsgq:['default','small','medium','large','hd720','hd1080','highres'],src:[{id:'roots',html:'<span title="Charge Playlist" ><a href="#mix_s" >roots</a></span>',value:'PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'},{id:'newRoots',html:'<span title="Charge Playlist" ><a href="#mix_s" >newRoots</a></span>',value:'PLrwe0-1smC6ySPPPHuiS8Zto7t5V46G_L'},{id:'danceHall',html:'<span title="Charge Playlist" ><a href="#mix_s" >danceHall</a></span>',value:'PLrwe0-1smC6yoRxfeKGPOpeFaEF6sK4nR'},{id:'luv',html:'<span title="Charge Playlist" ><a href="#mix_s" >luv</a></span>',value:'PLrwe0-1smC6yjAPZeG8-fQKbgxqVelz_O'},{id:'rnb',html:'<span title="Charge Playlist" ><a href="#mix_s" >rnb</a></span>',value:'PLrwe0-1smC6zwo4Y7O4XBl3cpFzpiMAkH'},{id:'rap',html:'<span title="Charge Playlist" ><a href="#mix_s" >rap</a></span>',value:'PLrwe0-1smC6xiPucN4OZ_Uu2pQ5fJz2uE'},{id:'electro',html:'<span title="Charge Playlist" ><a href="#mix_s" >electro</a></span>',value:'PLrwe0-1smC6w8At_JO2HcJdpucIqn6im1'},{id:'specialhiphop',html:'<span title="Charge Playlist" ><a href="#mix_s" >specialhiphop</a></span>',value:'PLrwe0-1smC6xH0EtS7-2W2K422EVR19bk'},{id:'Ile',html:'<span title="Charge Playlist" ><a href="#mix_s" >Ile</a></span>',value:'PLrwe0-1smC6xvoITpy0zzwirUm2D_4n3b'},{id:'video',html:'<span title="Charge Playlist" ><a href="#mix_s" >video</a></span>',value:'PLrwe0-1smC6y5pjwm9-yE5C3DLxwjoQk3'},{id:'popRock',html:'<span title="Charge Playlist" ><a href="#mix_s" >popRock</a></span>',value:'PLrwe0-1smC6zQc1MWqG-0lse5W7g3V5Lv'},{id:'97kafr',html:'<span title="Charge Playlist" ><a href="#mix_s" >97kafr</a></span>',value:'PLrwe0-1smC6zeAU3Yb9VPb2jjSf8hOWiI'},{id:'reunion',html:'<span title="Charge Playlist" ><a href="#mix_s" >reunion</a></span>',value:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i',selected:true}],tmp:'',rchg:function(){$(FuncInit.idmp).removeClass('anm_p');$(FuncInit.idms).removeClass('anm_s');$(FuncInit.idmute).jqxCheckBox('val',false);FuncInit.mix.destroy();FuncInit.plys.destroy();onYouTubeIframeAPIReady();},choPl:function(){if(FuncInit.basyn) FuncInit.player=FuncInit.mix;else FuncInit.player=FuncInit.plys;try{$(FuncInit.idms).jqxSlider('setValue',FuncInit.player.getVolume());FuncInit.player.setMute($(FuncInit.idmute).jqxCheckBox('val'));}catch(e){;}},init:function(){var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);}};FuncInit.init();FuncInit.h=$(window).height();FuncInit.w=$(window).width();FuncInit.tl=$(window).width()*0.72;if(!bm){$(window).resize(function(){$(FuncInit.idtree).animate({'height':(FuncInit.h)});$(FuncInit.idtree).animate({'width':(FuncInit.w*0.3)});if(FuncInit.plys!=null){FuncInit.plys.setSize(FuncInit.w*67/100,FuncInit.h);}}).resize();}var FuncTree=FuncTree||{};var FuncTree={bchk:false,bgrow:false,bms:true,i:0,arr:[],elmt:null,updBackG:"body",ptbid:['PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'],addPlus:function(){var i=FuncTree.i;if(FuncTree.arr[i]) $(FuncInit.idtree).jqxTree('addTo',{id:i,label:'play '+i,value:FuncTree.arr[i],items:[{id:'',label:' ',value:''}]},FuncTree.elmt);FuncTree.i=FuncTree.i+1;},curi:function(id){FuncInit.uri='<iframe id="'+id+'" sandbox="Access-Control-Allow-Origin allow-scripts" type="text/html" width="250" height="50"src="http://www.youtube.com/embed/'+id+'?autoplay=0&origin=http://runsense.re"frameborder="0" enablejsapi="1" />';},init:function(){var w=FuncInit.w*30/100;if(!bm){w=FuncInit.w;};$(FuncInit.idtree).jqxTree({source:FuncInit.src,width:w,height:FuncInit.h});$(FuncInit.idsgq).jqxListBox({selectedIndex:0,source:FuncInit.srcsgq,width:90,height:50});$(FuncInit.idmp).jqxSlider({showButtons:false,width:FuncInit.w*0.09,min:0,max:2,ticksFrequency:0.25,value:1,step:0.25});$(FuncInit.idms).jqxSlider({showButtons:false,width:FuncInit.w*0.09,min:0,max:100,ticksFrequency:1,value:36,step:1});$(FuncInit.idsw).jqxSwitchButton({height:27,width:81,checked:true});$(FuncInit.idasyn).jqxCheckBox({width:25,height:25,checked:true});$(FuncInit.idmute).jqxCheckBox({width:25,height:25,checked:false});$(FuncInit.idsync).jqxButton({width:FuncInit.w*0.05,height:'20px'});$(FuncInit.idmxpl).change(function(){var v=this.value;if(!$.isNumeric(v)){if(FuncInit.basyn) FuncInit.bmix=true;var rplc='#'+v;$('#jqxTree').jqxTree('selectItem',$(rplc)[0]);$('#jqxTree').jqxTree('ensureVisible',$(rplc)[0]);FuncInit.bmix=false;var rplc='#'+v;$('#jqxTree').jqxTree('selectItem',$(rplc)[0]);var to=$(FuncInit.idsto).val();$(FuncInit.idmp).jqxSlider('setValue',1);}});$(FuncInit.idsta).change(function(){var v=this.value;if($.isNumeric(v)){if(FuncInit.basyn) FuncInit.bmix=true;var rplc='#'+v;$('#jqxTree').jqxTree('selectItem',$(rplc)[0]);$('#jqxTree').jqxTree('ensureVisible',$(rplc)[0]);FuncInit.bmix=false;var rplc='#'+v;$('#jqxTree').jqxTree('selectItem',$(rplc)[0]);var to=$(FuncInit.idsto).val();$(FuncInit.idmp).jqxSlider('setValue',1);}});$(FuncInit.idsta).mouseenter(function(){if(FuncInit.basyn) this.value=FuncInit.mix.getPlaylistIndex();else this.value=FuncInit.plys.getPlaylistIndex();});$(FuncInit.idsto).change(function(){FuncInit.player.seekTo(this.value,true);});$(FuncInit.idsto).mouseenter(function(){if(FuncInit.basyn) this.value=FuncInit.mix.getCurrentTime();else this.value=FuncInit.plys.getCurrentTime();});}};onYouTubeIframeAPIReady=function(){var w=FuncInit.w;FuncInit.plys=new YT.Player('player',{height:FuncInit.h,width:w*0.71,videoId:FuncInit.videoid,events:{'onReady':opr,'onStateChange':ops,'onError':errorP,'onApiChange':dimTx}});FuncInit.mix=new YT.Player('mix',{height:FuncInit.h,width:FuncInit.w*0.27,events:{'onReady':mixReady,'onStateChange':mixChange,'onError':errorP,'onApiChange':dimTx}});$(FuncInit.idmp).jqxSlider('setValue',1);$(FuncInit.idms).jqxSlider('setValue',1);};var done=false;opr=function(event){if(!done){FuncInit.plys.loadPlaylist({list:FuncInit.plyLstId,listType:'playlist',index:FuncTree.i,startSeconds:1,suggestedQuality:FuncInit.sgq});event.target.playVideo();}else FuncInit.plys.playVideo();$('#lk ').addClass('smokVert');};errorP=function(e){var cfm=e.data;if(cfm==100) FuncInit.player.nextVideo();};ops=function(event){FuncInit.choPl();try{var cfm=event.data;if(cfm==YT.PlayerState.PLAYING&&!done){var arr=FuncInit.plys.getPlaylist();var bmu=$(FuncInit.idmute).jqxCheckBox('val');if(!FuncInit.basyn&&!bmu) FuncInit.plys.setVolume(27);else{if(bmu) FuncInit.plys.mute;}add(arr);done=true;}else if(cfm==3){var rplc='#'+FuncInit.plys.getPlaylistIndex();$('#jqxTree').jqxTree('expandItem',$(rplc)[0]);$('#jqxTree').jqxTree('ensureVisible',$(rplc)[0]);}$(FuncInit.idmp).addClass('anm_p');$(FuncInit.idms).addClass('anm_s');}catch(e){onYouTubeIframeAPIReady()}$('#lk ').removeClass('smokVert');};FuncTree.init();$('#jqxTree .jqx-tree-item').mouseenter(function(event){});mixReady=function(){FuncInit.mix.loadPlaylist({list:FuncInit.plyLstId,index:FuncTree.i,listType:'playlist',suggestedQuality:FuncInit.sgq});$('#lk ').addClass('smokVert');};mixChange=function(event){FuncInit.choPl();var cfm=event.data;if(cfm==YT.PlayerState.PLAYING){try{var bmu=$(FuncInit.idmute).jqxCheckBox('val');if(!FuncInit.basyn&&!bmu) FuncInit.mix.setVolume(13);else{if(bmu) FuncInit.mix.mute;}}catch(e){;}}else if(cfm==3){var rplc='#'+FuncInit.mix.getPlaylistIndex();$('#jqxTree').jqxTree('expandItem',$(rplc)[0]);$('#jqxTree').jqxTree('ensureVisible',$(rplc)[0]);}$('#lk ').removeClass('smokVert');};$(FuncInit.idtree).bind('select',function(ev){if(!FuncInit.bdo){$(FuncInit.idsto).val('');var a=ev.args;var e=a.element;$(FuncInit.idtree).jqxTree('expandItem',e);var i=$(FuncInit.idtree).jqxTree('getItem',e);var spl=i.label.split(' ');var pl=$(e).find("li").length;var pe=e.parentElement.parentElement;var pi=$(FuncInit.idtree).jqxTree('getItem',pe);var bsmpl=true;var chd=$(e).find("li");if(pi!=null) if(pi.label!=$('#mix_pl').val()) bsmpl=false;var id=i.id;FuncTree.i=spl[1];if(bsmpl){if(chd.length!=0){$('#sTa').val(id);FuncInit.videoid=i.value;FuncInit.player.playVideoAt(spl[1]);}else{$('#mix_pl').val(id);FuncInit.plyLstId=i.value;done=false;FuncInit.videoid='';FuncInit.rchg();}}else{$('#mix_pl').val(pi.id);FuncInit.plyLstId=pi.value;done=false;FuncInit.videoid='';FuncInit.rchg();}}});$('#jqxTree').bind('expand',function(event){var args=event.args;var elmt=args.element;var i=$(FuncInit.idtree).jqxTree('getItem',elmt);var val=i.value;FuncTree.curi(val);var spl=i.label.split(' ');$(FuncInit.idtree).jqxTree('addTo',{html:FuncInit.uri},elmt);});$(FuncInit.idmp).on('change',function(event){if(FuncInit.basyn) FuncInit.mix.setPlaybackRate(event.args.value);else FuncInit.plys.setPlaybackRate(event.args.value);});$(FuncInit.idsgq).on('select',function(event){if(FuncInit.basyn) $(FuncInit.idsw).on({checked:true});else $(FuncInit.idsw).on({checked:false});if(FuncInit.basyn) var a=event.args;if(a) FuncInit.sgq=a.value;});$(FuncInit.idms).on('change',function(event){if(FuncInit.basyn) FuncInit.mix.setVolume(event.args.value);else FuncInit.plys.setVolume(event.args.value);});$(FuncInit.idsw).on('checked',function (event){if(!FuncInit.bchg){FuncInit.player=FuncInit.plys;FuncInit.mix.setSize(FuncInit.w*0.33,FuncInit.h/2);FuncInit.plys.setSize(FuncInit.w*0.33,FuncInit.h/2);$(FuncInit.idplyr).animate({'left':FuncInit.tl*1/3},{'top':FuncInit.h/2},1008).delay(108);$(FuncInit.idmi).animate({'left':FuncInit.tl*1/3},504).delay(207);$('body').animate({'backgroundColor':'rgba(252,9,9,0.7)'}).delay(153);$(FuncInit.idplyr).animate({'left':FuncInit.tl},1008).delay(504);$(FuncInit.idmi).animate({'left':'1px'},603).delay(306);FuncInit.mix.setSize(FuncInit.w*0.71,FuncInit.h);FuncInit.plys.setSize(FuncInit.w*0.27,FuncInit.h);}});$(FuncInit.idsw).on('unchecked',function (event){if(!FuncInit.bchg){FuncInit.player=FuncInit.mix;$(FuncInit.idplyr).animate({'left':'1px'},1107).delay(180);$('body').animate({'backgroundColor':'black'},504).delay(108);FuncInit.plys.setSize(FuncInit.w*0.71,FuncInit.h);$(FuncInit.idmi).animate({'left':FuncInit.tl},2007).delay(360);FuncInit.mix.setSize(FuncInit.w*0.27,FuncInit.h);}});$(FuncInit.idmute).bind('change',function(event){if(FuncInit.basyn) FuncInit.player=FuncInit.mix;if(event.args.checked) FuncInit.player.mute();else FuncInit.player.unMute();});$(FuncInit.idasyn).bind('change',function(event){FuncInit.basyn=event.args.checked;FuncInit.choPl();if(FuncInit.player.isMuted()) $(FuncInit.idmute).jqxCheckBox('val',true);else $(FuncInit.idmute).jqxCheckBox('val',false);$(FuncInit.idms).jqxSlider('setValue',FuncInit.player.getVolume());$(FuncInit.idmp).jqxSlider('setValue',FuncInit.player.getPlaybackRate());});$(FuncInit.idsync).on('click',function(){var valm=FuncInit.mix.getCurrentTime();var valp=FuncInit.plys.getCurrentTime();var dec=$('#dec').val();if(valm>valp){valm=valp;FuncInit.mix.seekTo(valm+dec,false);for(var i=0;i<10;i++){FuncInit.mix.seekTo(valm+dec,false);FuncInit.plys.seekTo(valm+dec,false);}FuncInit.plys.playVideo();}else{FuncInit.plys.seekTo(valm,false);for(var i=0;i<10;i++){FuncInit.plys.seekTo(valm+dec,false);FuncInit.mix.seekTo(valm+dec,false);}FuncInit.mix.playVideo();}});addExt=function(listid){$(FuncInit.idtree).jqxTree('addTo',{id:'EXT',label:'EXT',value:listid});$('#add').val('Enter Playlist ID');};add=function(arr){FuncInit.bchg=true;FuncTree.arr=arr;FuncTree.i=1;var it=$(FuncInit.idtree).jqxTree('getSelectedItem');var lg;if(it!=null){FuncInit.mix.playVideo();var elmt=it.element;lg=arr.length-1;$(FuncInit.idtree).jqxTree('addTo',{id:0,label:'play '+0,value:arr[0],items:[{id:'',label:' ',value:''}]},elmt);FuncTree.elmt=elmt;for(var i in FuncTree.arr) FuncTree.addPlus();$('#dec').val(.36);var rplc='#'+lg;var itm=$(FuncInit.idtree).jqxTree('getItem',$(rplc)[0]);}$(FuncInit.idtree).jqxTree('selectItem',null);FuncInit.bchg=false;FuncTree.i=0;};$(FuncInit.idsw).jqxSwitchButton({checked:true});dimTx=function(){FuncInit.plys.getOptions('cc','fontSize','-1');FuncInit.mix.getOptions('cc','fontSize','-1');};