const animate = require('./animate');
const dimension = require('./dimension');
const css = require('./helper').css;

module.exports = class {
  constructor(elem$) {
    css(elem$.style);
    elem$.addEventListener('click', this.handleClick.bind(this, elem$));
  }

  handleClick(elem$) {
    !this.enlighted
      ? this.light(elem$)
      : this.extinguish(elem$);

    this.enlighted = !this.enlighted;
  }

  light(elem$) {
    animate(elem$,
      dimension(elem$),
      [window.innerWidth, window.innerHeight]
    );
  }

  extinguish(elem$) {
    let rect = elem$.getBoundingClientRect();

    animate(elem$,
      [rect.width, rect.height],
      dimension(elem$)
    );
  }
};
