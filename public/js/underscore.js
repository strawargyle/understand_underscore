$('#underfunc').append('<code class "javascript" id="code-example-body prettyprint">

   _.map(list, <a href="javascript:void(0)" class="tooltip" data-tip="The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.">iteratee</a>, [context])

   Alias: collect

   Produces a new array of values by mapping each
   value in list through a transformation function
   (iteratee). The iteratee is passed three arguments:
   the value, then the index (or key) of the iteration,
   and finally a reference to the entire list.

   _.map([1, 2, 3], function(num) {
      return num * 3; });
                        => [3, 6, 9]

   _.map({one: 1, two: 2, three: 3}, function(num, key) {
      return num * 3; });
                        => [3, 6, 9]

   _.map([[1, 2], [3, 4]], _.first);
                        => [1, 3]

</code>')
