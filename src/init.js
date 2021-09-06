$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    //console.log("%%%%%%%%%%%%", dancerMakerFunctionName);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log("##############", dancerMakerFunction);

    // make a dancer with a random position; new instance of blinkydancer
    var dancer = new dancerMakerFunction(
      Math.floor($('body').height() * Math.random()),
      Math.floor($('body').width() * Math.random()),
      1000
    );

    //$(dancer.$node).addClass('dancer');
    //$('.dancer').append(dancer.$node);
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    //console.log("************", window.dancers);

    //dancer interact with other dancers;
    $('.dancer').hover((e)=>{
      //console.log('hovered');
      //console.log(e.target.className);
      //$(e.target).css("border", "10px solid green");
      $(e.target).addClass('hoverstyle');
    });

    $('.dancer').on('click', function(e) {
      //console.log(e.target);
      var position = $(e.target).position();
      //console.log('******************', position.top, position.left);
      //var distArr = [];
      var minDist = Number.MAX_VALUE;
      var closestNode = window.dancers[0];
      for (var i = 0; i < window.dancers.length; i++) {
        //console.log('%%%%%%%%%%%%%%%', window.dancers[i].top, '$$$$$$$$$$$$', window.dancers[i].left);
        var distance = Math.hypot(window.dancers[i].top - position.top, window.dancers[i].left - position.left);

        //distArr.push(distance);
        if (distance < minDist && distance !== 0) {
          minDist = distance;
          closestNode = window.dancers[i];
          //console.log('##############', window.dancers[i]);
        }
        //console.log('@@@@@@@@@@@@@@@', distance);
      }
      //console.log('minDist', minDist);
      closestNode.changeColor();
    });

  });
});


$('.lineup').on('click', function(event) {
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].lineUp();
  }
});

