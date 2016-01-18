module.exports = function(elem$) {
  let beforeRect = elem$.getBoundingClientRect();

  Object.assign(elem$.style, {
    maxWidth: '',
    maxHeight: '',
  });

  let rect = elem$.getBoundingClientRect();

  Object.assign(elem$.style, {
    maxWidth: beforeRect.width,
    maxHeight: beforeRect.height,
  });

  return [rect.width, rect.height];
};
