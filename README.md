### Explain what the simple List component does.
> List Component is memoized version of WrappedListComponent which accepts items prop which is an array and returns a unordered list mapped over SingleListItem.

### What problems / warnings are there with code?
The list of warnings
- Warning: Failed undefined type: Cannot read properties of undefined (reading 'isRequired')

- Warning: Failed prop type: WrappedListComponent: prop type `items` is invalid; it must be a function, usually from the `prop-types` package, but received `undefined`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.

- Warning: Each child in a list should have a unique "key" prop.

- Warning: Failed prop type: The prop `text` is marked as required in `WrappedSingleListItem`, but its value is `undefined`.

- Warning: Cannot update a component (`WrappedListComponent`) while rendering a different component (`WrappedSingleListItem`)

- Warning: Failed prop type: Invalid prop `isSelected` of type `number` supplied to `WrappedSingleListItem`, expected `boolean`.

- TypeError: _propTypes.default.shapeOf is not a function

# Please fix, optimize, and/or modify the component as much as you think is necessary.
[List Component](./List.js)
