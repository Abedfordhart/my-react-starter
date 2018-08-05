


export function render(rootDomEl, Component) {  
  // const appElement = createElement('li', {}, 'Hello World!');
  // const domTree = buildDOMTree(appElement);
  // rootDomEl.appendChild(domTree); 

  const appElement = createElement(Component);
  const domTree = buildDOMTree(appElement);
  // console.log('domTree', domTree)
  rootDomEl.appendChild(domTree);
  
}

export function createElement(el, props, children) {
  return {
    el,
    props,
    children
  }
}

function buildDOMTree(elementObj) {
  if (typeof elementObj.el === 'string') {
    const children = elementObj.children;
    const domEl = document.createElement(elementObj.el);
    if (typeof children === 'string') {
      const textEl = document.createTextNode(children);
      domEl.appendChild(textEl);
    } else {
      const childEls = children.map((child) => {
        return buildDOMTree(child);
      });
     childEls.forEach((child) => {
      domEl.appendChild(child);
     })
    }
    return domEl;
  } else {
    const resultElementObj = elementObj.el(elementObj.props);
    const subTree = buildDOMTree(resultElementObj);
    return subTree;
  }
}