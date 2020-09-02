import EventEmitter from 'events';

describe('for event', () => {
  function waitForEvents() {
    return new Promise(resolve => setTimeout(() => resolve(), 0));
  }

  fit('should capture event', (done) => {
    const element = new EventEmitter();
    const logs = [];

    function onClick() {
      logs.push('I have been clicked.');
      done();
    }

    // <--start
    // Please add the event listener to handle `click` event on `element`.
    element.addListener('click', onClick);

    // --end->

    element.emit('click');
  }, 1000 /* 1 second to timeout */);

  fit('should invoke multiple times', (done) => {
    const element = new EventEmitter();
    const logs = [];

    element.addListener('click', () => logs.push('I have been clicked'));
    element.emit('click');
    element.emit('click');

    waitForEvents()
      .then(() => {
        // <--start
        // Please write down the correct value. You should write the final result directly.
        const expected = ['I have been clicked', 'I have been clicked'];
        // --end->

        expect(logs).toEqual(expected);
        done();
      });
  });

  fit('should remove event listener', (done) => {
    const element = new EventEmitter();
    const logs = [];

    element.addListener('click', () => {
      logs.push('I have been clicked');
      element.removeAllListeners('click');
    });
    element.emit('click');
    element.emit('click');

    waitForEvents()
      .then(() => {
        // <--start
        // Please write down the correct value. You should write the final result directly.
        const expected = ['I have been clicked'];
        // --end->

        expect(logs).toEqual(expected);
        done();
      });
  });
});
