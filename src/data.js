module.exports = {
  constructor: `**Constructor - React Documentation**

  If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
  
  The constructor for a React component is called before it is mounted. When implementing the constructor for a \`React.Component\` subclass, you should call \`super(props)\` before any other statement. Otherwise, \`this.props\` will be \`undefined\` in the \`constructor\`, which can lead to bugs.
  
  [Read More](https://reactjs.org/docs/react-component.html#constructor)`,
  
  render: `**render - React Documentation**
  
  The \`render()\` method is the only required method in a class component.

  When called, it should examine this.props and this.state and return one of the following types:
  
  * React elements. Typically created via JSX.
  * Arrays and fragments.
  * Portals. Let you render children into a different DOM subtree.
  * String and numbers. These are rendered as text nodes in the DOM.
  * Booleans or null. Render nothing.
  
The \`render()\` function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.
  
  [Read More](https://reactjs.org/docs/react-component.html#render)`,

  defaultProps: `**defaultProps - React Documentation**
  
  \`defaultProps\` can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for \`null\` props.
  
  [Read More](https://reactjs.org/docs/react-component.html#defaultprops)`,

  componentDidMount: `**componentDidMount - React Documentation** 
  
  \`componentDidMount()\` is invoked immediately after a component is mounted (inserted into the tree). 
  
  Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in \`componentWillUnmount()\`. 
  
  [Read More](https://reactjs.org/docs/react-component.html#componentdidmount)`,

  componentDidUpdate: `**componentDidUpdate - React Documentation**
  
  \`componentDidUpdate()\` is invoked immediately after updating occurs. This method is not called for the initial render.

  Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

  [Read More](https://reactjs.org/docs/react-component.html#componentdidupdate)`,

  componentWillUnmount: `**componentWillUnmount - React Documentation**
  
  \`componentWillUnmount()\` is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in \`componentDidMount()\`.

  [Read More](https://reactjs.org/docs/react-component.html#componentwillunmount)`,

  shouldComponentUpdate: `**shouldComponentUpdate - React Documentation**

  Use \`shouldComponentUpdate()\` to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.

  [Read More](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
  `
}