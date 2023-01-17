# shouldComponentUpdate
## `shouldComponentUpdate(nextProps, nextState, nextContext)`
- If you define `shouldComponentUpdate`, React will call it to determine whether a re-render can be skipped.
- If you are confident you want to write it by hand, you may compare `this.props` with `nextProps` and `this.state` with `nextState` and return `false` to tell React the update can be skipped.

## React Docs
https://beta.reactjs.org/reference/react/Component#shouldcomponentupdate
