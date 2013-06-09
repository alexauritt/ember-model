var get = Ember.get;

Ember.belongsTo = function(klass, key) {
  return Ember.computed(function() {
    return Ember.Model.create({
      parent: this,
      modelClass: klass,
      content: get(this, 'data.' + key)
    });
  }).property();
};