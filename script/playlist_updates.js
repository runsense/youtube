var playlistId, channelId;
$.urlParam=function(name){
	var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);
	try{return results[1]||0;}catch(e){return null;}}
	
function handleAPILoaded() {
  enableForm();
  if($.urlParam('val')!=null){alert($.urlParam('ur'));plyLstId.nm="Personal"+plyLstId.id;}
}
function enableForm() {
  $('#playlist-button').attr('disabled', false);
}

function createPlaylist() {
  var request = gapi.client.youtube.playlists.insert({
    part: 'snippet,status',
    resource: {
      snippet: {
        title: 'Test Playlist',
        description: 'by runsense on gadiambTiVi'
      },
      status: {
        privacyStatus: 'public'
      }
    }
  });
  request.execute(function(response) {
    var result = response.result;
    if (result) {
      playlistId = result.id;
      $('#playlist-id').val(playlistId);
      $('#playlist-title').html(result.snippet.title);
      $('#playlist-description').html(result.snippet.description);
    } else {
      $('#status').html('Could not create playlist');
    }
  });
}
function addVideoToPlaylist() {
  addToPlaylist($('#video-id').val());
}
function addToPlaylist(id, startPos, endPos) {
  var details = {
    videoId: id,
    kind: 'youtube#video'
  }
  if (startPos != undefined) {
    details['startAt'] = startPos;
  }
  if (endPos != undefined) {
    details['endAt'] = endPos;
  }
  var request = gapi.client.youtube.playlistItems.insert({
    part: 'snippet',
    resource: {
      snippet: {
        playlistId: playlistId,
        resourceId: details
      }
    }
  });
  request.execute(function(response) {
    $('#status').html('<pre>' + JSON.stringify(response.result) + '</pre>');
  });
}