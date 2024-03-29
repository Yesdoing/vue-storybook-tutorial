import { storiesOf } from '@storybook/vue';
import { task } from './Task.stories';

import PureTaskList from './PureTaskList';
import { methods } from './Task.stories';

export const defaultTaskList = [
  { ...task, id: '1', title: 'Task 1' },
  { ...task, id: '2', title: 'Task 2' },
  { ...task, id: '3', title: 'Task 3' },
  { ...task, id: '4', title: 'Task 4' },
  { ...task, id: '5', title: 'Task 5' },
  { ...task, id: '6', title: 'Task 6' },
];

export const withPinnedTasks = [
  ...defaultTaskList.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
];

const paddedList = () => {
  return {
    template: `<div style="padding: 3rem;"><story/></div>`,
  };
};

storiesOf('PureTaskList', module)
  .addDecorator(paddedList)
  .add('default', () => ({
    components: { PureTaskList },
    template: `<pure-task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask" />`, 
    data: () => ({
      tasks: defaultTaskList
    }),
    methods,
  }))
  .add('withPinnedTask', () => ({
    components: { PureTaskList },
    template: `<pure-task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask" />`,
    data: () => ({
      tasks: withPinnedTasks
    }),
    methods,
  }))
  .add('loading', () => ({
    components: { PureTaskList },
    template: `<pure-task-list loading @archiveTask="onArchiveTask" @pinTask="onPinTask" />`,
    methods,
  }))
  .add('empty', () => ({
    components: { PureTaskList },
    template: `<pure-task-list @archiveTask="onArchiveTask" @pinTask="onPinTask" />`,
    methods
  }));