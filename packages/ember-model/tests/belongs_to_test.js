module("Ember.belongsTo");

test("it exists", function() {
  ok(Ember.belongsTo);
});

test("is a CP macro", function() {
  var Person = Ember.Model.extend();
  var cp = Ember.belongsTo(Person, 'address');

  ok(cp instanceof Ember.ComputedProperty);
  
  var address = Ember.Model.create();
  var person = { data: {address: address} };
  
  var ret = cp.func.call(person, "address");
  ok(ret instanceof Ember.Model);


});
