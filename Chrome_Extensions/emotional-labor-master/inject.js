console.log("changeText");

// load the file into an array
var new_lines = loadStrings("data/new_lines.txt");

$('.editable').each(function(){
    
    // grab the text from the element on the page to manipulate
    var text = $(this).html();

    // replace periods with exclamation points
    text = text.replace(/\./g, "!!!");

    // replace word "hi " with a random string from text file
    var random_string = getRandom(new_lines);
    text = text.replace("hi ", random_string);
    
      // replace word "today" with a random string from text file
    var random_string = getRandom(new_lines);
    text = text.replace("today", random_string);
    
     // replace word "when" with a random string from text file
    var random_string = getRandom(new_lines);
    text = text.replace("when", random_string);
    
    // replace word "work" with a random string from text file
    var random_string = getRandom(new_lines);
    text = text.replace("work", random_string);
    
    // replace word "for example" with a random string from text file
    var random_string = getRandom(new_lines);
    text = text.replace("for example", random_string);
    
    // replace word "work" with a random string from text file
    var random_string = getRandom(new_lines);
    text = text.replace("work", random_string);
    
    // replace word "schedule" with a random string from text file
    var random_string = getRandom(new_lines);
    text = text.replace("schedule", random_string);
    
    // replace word "organization" with a random string from text file
    var random_string = getRandom(new_lines);
    text = text.replace("organization", random_string);
    
    // replace word "principles" with a random string from text file
    var random_string = getRandom(new_lines);
    text = text.replace("principles", random_string);
    
    // replace word "agreement" with a random string from text file
    var random_string = getRandom(new_lines);
    text = text.replace("agreement", random_string);
    
    // replace word "followup" with a random string from text file
    var random_string = getRandom(new_lines);
    text = text.replace("followup", random_string);
    
    // replace word "immediately" with a random string from text file
    var random_string = getRandom(new_lines);
    text = text.replace("immediately", random_string);
    
    // replace word "wait" with a random string from text file
    var random_string = getRandom(new_lines);
    text = text.replace("wait", random_string);
    
    text = text.replace ("Best,", "xoxo");
    text = text.replace ("best,", "xoxo");

    text = text.replace ("Sincerely,", "Love,");
    text = text.replace ("sincerely,", "love,");
    
    text = text.replace ("Regards,", "Hearts and stars,");
    text = text.replace ("regards,", "hearts and stars,");
    
    text = text.replace (", ", ". :) ");

    
    text = "Hey lovey! I've been thinking of you :)" + text 
    
    // put the modified text back into the element on the page
    $(this).html(text);
});



//seperates .txt into an array of strings based on line breaks
function loadStrings(file) {
  var result;
  $.ajax({
    type: "GET",
    url: chrome.extension.getURL(file),
    async: false,
    success: function(data){
      result = data;
    }
  });
  return result.split("\n");
}


//returns random element from array
function getRandom(array){
  var index = Math.floor(Math.random()*array.length);
  var value = array[index];
  return value;
}