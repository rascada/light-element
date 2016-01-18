const Light = require('./src/Light');

module.exports = class {
  constructor(...elements$) {
    let oneElement = elements$.length < 2;
    this.elements$ =
      oneElement
        ? elements$[0]
        : elements$;

    this.attach();
  }

  attach() {
    [].map.call(this.elements$, elem$ => new Light(elem$));
  }
};
