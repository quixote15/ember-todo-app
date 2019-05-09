import Controller from '@ember/controller';
import {computed} from '@ember/object'

export default Controller.extend({
    isDone: false,

    current: '',
  
    actions: {
      editTask(task) {
        this.transitionToRoute('task.edit', task.get('id'));
      }
    }
});
