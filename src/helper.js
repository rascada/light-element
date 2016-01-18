module.exports = {
  px(value) { return `${value}px`; },

  css(style) {
    Object.assign(style, {
      position: 'relative',
    });
  },
};
