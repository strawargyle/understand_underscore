var stack_results = function (term, div) {
   SE.init({
      clientId: 5856,
      key: 'jgXwNuCIkHhQe9j9LI1vAQ((',
      channelUrl: 'https://understandunderscore.firebaseapp.com/blank.html',
      complete: function (data) {
         var run_on_success = function (data) {
            for(var i = 0; i < 6; i++) {
               console.log(data.items[i].link);
               // $(div).append(data.items[i].title);
               $(div).append('<p><a href="'+data.items[i].link+'">'+data.items[i].title+'</a></p>');
            }
         };
         var get = $.get('https://api.stackexchange.com/2.2/questions?pagesize=6&order=desc&sort=votes&tagged=%5Bunderscore%5D%3B%20' + term + '&site=stackoverflow')
            .success(run_on_success);
      }
   });
};

var search = function() {
var div_search = $('#div').val();
console.log(div_search);
if (div_search === 'map') {
   $('#map').hide().fadeIn(1400);
   $('#each').hide();
   $('#reduce').hide();
   $('#pluck').hide();
} else if (div_search === 'each') {
   $('#each').hide().fadeIn(1400);
   $('#map').hide();
   $('#reduce').hide();
   $('#pluck').hide();
} else if (div_search === 'reduce') {
   $('#reduce').hide().fadeIn(1400);
   $('#map').hide();
   $('#each').hide();
   $('#pluck').hide();
} else if (div_search === 'pluck') {
   $('#pluck').hide().fadeIn(1400);
   $('#map').hide();
   $('#reduce').hide();
   $('#each').hide();
}
$('#div').val('');
};
