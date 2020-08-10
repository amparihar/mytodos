export const InitialState = {
  events: [],
  todos: {
    groups: [
    ],
    tasks: [
      {
        name: 'Refactor tests',
        id: 'T1',
        group: 'G1',
        isComplete: false
      },
      {
        name: 'Meet with CTO',
        id: 'T2',
        group: 'G1',
        isComplete: true
      },
      {
        name: 'Compile ES6',
        id: 'T3',
        group: 'G2',
        isComplete: false
      },
      {
        name: 'Update component snapshots',
        id: 'T4',
        group: 'G2',
        owner: 'U1',
        isComplete: true
      },
      {
        name: 'Production optimizations',
        id: 'T5',
        group: 'G3',
        isComplete: false
      }
    ],
    comments: [
      {
        id: 'C1',
        task: 'T1',
        content: 'Great work!'
      }
    ]
  }
};
