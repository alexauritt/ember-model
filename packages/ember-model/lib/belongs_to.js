var get = Ember.get;

Ember.belongsTo = function(klass, key) {
  return Ember.computed(function() {
    return Ember.Model.create({
      modelClass: klass
    });
  }).property();
};