Ember.belongsTo = function(klass, key) {
  return Ember.computed(function() {
    return Ember.Model.create();
  }).property();
};