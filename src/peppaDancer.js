/*var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};
*/
var makePeppaDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node belongs to the parent class, we can append it, but if we overwrite it, it will lose the property of the parenet!
  this.$node.append('<img class="peppaDancer rotate" src="src/img/Peppa.png" width="50" height="50"/>');
};

makePeppaDancer.prototype = Object.create(makeDancer.prototype);//just copy makeDancer.prototype into anther memory address.
makePeppaDancer.prototype.constructor = makePeppaDancer;
//var oldStep = makeDancer.prototype.step;//record the old step so that we can rewrite the new step method then we'll not lost the adress.

makePeppaDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};




