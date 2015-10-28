var stack_results = function (term, div) {
   SE.init({
      clientId: 5856,
      key: 'jgXwNuCIkHhQe9j9LI1vAQ((',
      channelUrl: 'https://understandunderscore.firebaseapp.com/blank.html',
      complete: function (data) {
         var run_on_success = function (data) {
            _.each(data, function (element, index, list) {
               //  console.log(element);
               //  console.log(index);
               console.log(list.items);
               //  console.log(data.items[0].link);
               $(div)
                  .text(data.items[0].link);
               //  $(div).text(data.items[1].link);
            });
         };
         var get = $.get('https://api.stackexchange.com/2.2/questions?pagesize=6&order=desc&sort=votes&tagged=%5Bunderscore%5D%3B%20' + term + '&site=stackoverflow')
            .success(run_on_success);
      }
   });
};
