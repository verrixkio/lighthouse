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
             }
}

FUNCTIONS TO IMPLEMENT:

prints a list of all playlists, in the form:
p01: Coding Music - 2 tracks
p02: Other Playlist - 1 tracks

var printPlaylists = function (){

for(var keys in library.playlists){
       var pId = library.playlists[keys].id; 
       var pName = library.playlists[keys].name;
       var pTracks = library.playlists[keys].tracks.length;
       console.log(pId + ": " + pName + " - " + pTracks + " tracks");
       }
}
printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

for(var keys in library.tracks){
       var tName = library.tracks[keys].name
       var tArt = library.tracks[keys].artist
       var tAlb = library.tracks[keys].album
       console.log(keys + ": " + tName + " by " + tArt + "(" + tAlb + ")")
       }
}
printTracks();

prints a list of tracks for a given playlist, in the form:
p01: Coding Music - 2 tracks
t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
       
       var pId = library.playlists[playlistId].id; 
       var pName = library.playlists[playlistId].name;
       var pTracks = library.playlists[playlistId].tracks.length;
       console.log(pId + ": " + pName + " - " + pTracks + " tracks");
       
       for (var trackAdd in library.playlists.p01.tracks) {
              var tracktoAdd = (library.playlists.p01.tracks[trackAdd])
              var tName = library.tracks[tracktoAdd].name
              var tArt = library.tracks[tracktoAdd].artist
              var tAlb = library.tracks[tracktoAdd].album
              console.log(tracktoAdd + ": " + tName + " by " + tArt + "(" + tAlb + ")")
       }

}




printPlaylist(p04)
//adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

       library.playlists[playlistId].tracks.push(trackId)
       console.log(library.playlists[playlistId].tracks)

}

addTrackToPlaylist("t04", "p01")


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

console.log(uid())
// adds a track to the library

var addTrack = function (name, artist, album) {
       newtrack = uid()
       library.tracks.t04 = {"id": newtrack, "name": name , "artist": artist, "album": album} 
       console.log(library.tracks)
}      

addTrack ("boyfriend", "jbiebs", "Idontknow")
// adds a playlist to the library

var addPlaylist = function (name) {

       library.playlists.p03 = {id: "p03", name: name, tracks: ["t04", "t05"]}
       console.log(library.playlists)


}

addPlaylist ("Love Songs lol")

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}