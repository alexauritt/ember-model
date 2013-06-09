module("Ember.belongsTo");

test("it exists", function() {
  ok(Ember.belongsTo);
});

test("is a CP macro", function() {
  var Model = Ember.Model.extend();
  var cp = Ember.belongsTo(Model, 'address');

  ok(cp instanceof Ember.ComputedProperty);
});
