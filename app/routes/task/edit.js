import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
       return this.store.find('task', params.id);
      },
      actions: {
        saveEdit(model, description, deadline) {
          model.setProperties( {
            description,
            deadline
          });
          model.save().then(() => this.transitionTo('task'));
        }
      }
});
