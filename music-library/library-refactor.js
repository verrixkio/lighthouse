var library = {
    tracks: { t01: { id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three" },
              t02: { id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"},
              t03: { id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"}
            },
    playlists: { p01: { id: "p01",
                        name: "Coding Music",
                        tracks: ["t01", "t02"]
                      },
                 p02: { id: "p02",
                        name: "Other Playlist",
                        tracks: ["t03"]
                      }
               },



    addTrackToPlaylist: function (trackId, playlistId) {

    this.playlists[playlistId].tracks.push(trackId)
    
    }


     printPlaylist: function (playlistId) {

    var pId = this.playlists[playlistId].id; 
    var pName = this.playlists[playlistId].name;
    var pTracks = this.playlists[playlistId].tracks.length;
    console.log(pId + ": " + pName + " - " + pTracks + " tracks");
    
    for (var trackAdd in this.playlists.p01.tracks) {
            var tracktoAdd = (this.playlists.p01.tracks[trackAdd])
            var tName = this.tracks[tracktoAdd].name
            var tArt = this.tracks[tracktoAdd].artist
            var tAlb = this.tracks[tracktoAdd].album
            console.log(tracktoAdd + ": " + tName + " by " + tArt + "(" + tAlb + ")")
    }

}

    Print Tracks Function          
    printTracks:  function () {

    for(var keys in this.tracks){
            var tName = this.tracks[keys].name
            var tArt = this.tracks[keys].artist
            var tAlb = this.tracks[keys].album
            console.log(keys + ": " + tName + " by " + tArt + "(" + tAlb + ")")
            }
    }


    // Print Play List Function             
    printPlaylists: function (){
        for(var keys in this.playlists){
            var pId = this.playlists[keys].id; 
            var pName = this.playlists[keys].name;
            var pTracks = this.playlists[keys].tracks.length;
            console.log(pId + ": " + pName + " - " + pTracks + " tracks");
           }
    }
    

  }
  
console.log(library.addTrackToPlaylist("t04", "p01"))
  
//   FUNCTIONS TO IMPLEMENT:
  

//   // generates a unique id
//   // (use this for addTrack and addPlaylist)
  
//   var uid = function() {
//     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//   }
  
//   console.log(uid())
//   // adds a track to the library
  
//   var addTrack = function (name, artist, album) {
//          newtrack = uid()
//          library.tracks.t04 = {"id": newtrack, "name": name , "artist": artist, "album": album} 
//          console.log(library.tracks)
//   }      
  
//   addTrack ("boyfriend", "jbiebs", "Idontknow")
//   // adds a playlist to the library
  
//   var addPlaylist = function (name) {
  
//          library.playlists.p03 = {id: "p03", name: name, tracks: ["t04", "t05"]}
//          console.log(library.playlists)
  
  
//   }
  

//   addPlaylist ("Love Songs lol")
  
//   // STRETCH:
//   // given a query string string, prints a list of tracks
//   // where the name, artist or album contains the query string (case insensitive)
//   // tip: use "string".search("tri") 
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  
//   var printSearchResults = function(query) {
  
//   }