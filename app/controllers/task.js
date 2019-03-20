import Controller from '@ember/controller';
import {computed} from '@ember/object'

export default Controller.extend({
    isDone: false,

    current: '',
  
    completed: computed( 'model', 'current', function() {
      var tasks = this.get('model');
      var current = this.get('current');
  
      let finished = current === 'complete';
      let unfinished = current === 'incomplete';
  
      if (finished) {
        return tasks.filter((task) => {
          return task.get('isDone') === true;
        });
      }
  
      if (unfinished) {
        return tasks.filter((task) => {
          return task.get('isDone') === false;
        });
      }
      return tasks;
    }),
  
    actions: {
      showAll() {
        this.set('current', '');
      },
      showCompleted() {
        this.set('current', 'complete');
      },
      showIncomplete() {
        this.set('current', 'incomplete');
      },
      editTask(task) {
        this.transitionToRoute('task.edit', task.get('id'));
      }
    }
});
