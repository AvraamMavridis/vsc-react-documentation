module.exports = {
  render: `The render() method is the only required method in a class component.

  When called, it should examine this.props and this.state and return one of the following types:
  
  * React elements. Typically created via JSX.
  * Arrays and fragments.
  * Portals. Let you render children into a different DOM subtree.
  * String and numbers. These are rendered as text nodes in the DOM.
  * Booleans or null. Render nothing.
  
  The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.
  
  If you need to interact with the browser, perform your work in componentDidMount()`,
  defaultProps: `defaultProps can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null props.`
}