// let out = document.getElementById("output");
//         let p = document.createElement('p');
//         p.innerHTML = "BOOGA BOOGA AL;DKFJALS;DKJF"
//         out.appendChild(p);

$('#wiki').keypress(function(e) {
    // console.log(e);
    if (e.keyCode === 13) {
        let wikiSearchBar = $('#wiki').val();
        // console.log(wikiSearchBar);
        for (let i = 0; i < wikiSearchBar.length; i++) {
            if (wikiSearchBar[i] == '') {
                wikiSearchBar = '_';
            }
        }
        

        let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+
        wikiSearchBar +"&format=json&callback=?";

        $.ajax({
            url:url, 
            type: "GET", 
            async: false, 
            dataType: "json", 
            success: function(data, status, jqxhr) {
                // console.log(data);

                // let test = ['zero', 'one', 'two', 'three']

                // for (let i = 0; i < test.length; i++) {
                //     console.log(test[i]);
                // }

                for(var i = 0; i < data[1].length; i++){
                    // console.log(data[1][i]);
                    $("#output").append("<div><div class='well'><a href="+data[3][i]+"><h2>"+data[1][i]+"</h2>");
                  }

                // for(var i = data[1].length; i > 0; i--){
                //     $("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>"+data[1][i]+"</h2>" + "<p>" + data[2][1] + "</p></a></div></div>");
                //   }
                }
                
              })
    }
})

// $('#searchTerm').keypress(function(e){
//     console.log(e);
//      if(e.keyCode === 13){
//        var searchTerm = $('#searchTerm').val();
//        console.log(searchTerm);
       
//        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+
//        searchTerm +"&format=json&callback=?";
       
//        $.ajax({
//          url:url,
//          type: "GET",
//          async: false,
//          dataType: "json",
//          success: function(data, status, jqXHR){
//            console.log(data);
           
//            for(var i = 0; i < data[1].length; i++){
//              $("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>"+data[1][i]+"</h2>" + "<p>" + data[2][1] + "</p></a></div></div>");
//            }
//          }
         
//        })
//      }
//    })

// let searchUrl =
//   'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
// let contentUrl =
//   'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';

// let userInput;

// let counter = 0;

// function setup() {
//   noCanvas();
//   userInput = select('#userinput');
//   userInput.changed(startSearch);
//   //goWiki(userInput.value());

//   function startSearch() {
//     counter = 0;
//     goWiki(userInput.value());
//   }

//   function goWiki(term) {
//     counter = counter + 1;

//     if (counter < 10) {
//       //let term = userInput.value();
//       let url = searchUrl + term;
//       loadJSON(url, gotSearch, 'jsonp');
//     }
//   }

//   function gotSearch(data) {
//     console.log(data);
//     let len = data[1].length;
//     let index = floor(random(len));
//     let title = data[1][index];
//     title = title.replace(/\s+/g, '_');
//     createDiv(title);
//     console.log('Querying: ' + title);
//     let url = contentUrl + title;
//     loadJSON(url, gotContent, 'jsonp');
//   }

//   function gotContent(data) {
//     let page = data.query.pages;
//     let pageId = Object.keys(data.query.pages)[0];
//     console.log(pageId);
//     let content = page[pageId].revisions[0]['*'];
//     console.log(content);
//     let wordRegex = /\b\w{4,}\b/g;
//     let words = content.match(wordRegex);
//     let word = random(words);
//     goWiki(word);
//     console.log(word);
//   }
// }