const Dynamic = require('dynamics.js');
const animate = Dynamic.animate;

module.exports = function(elem$, from, to) {
  Object.assign(elem$.style, {
    maxWidth: px(from[0]),
    maxHeight: px(from[1]),
  });

  animate(elem$, {
    maxWidth: px(to[0]),
    maxHeight: px(to[1]),
  });
};
