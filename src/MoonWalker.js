var MoonWalker = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

MoonWalker.prototype = Object.create(makeDancer.prototype);
MoonWalker.prototype.constructor = MoonWalker;

MoonWalker.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({left : "+=50px"}, this.timeBetweenSteps);
};