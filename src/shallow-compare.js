
import shallowEqual from './shallow-equal'

/**
 * Does a shallow comparison for props and state.
 * See ReactComponentWithPureRenderMixin
 * See also https://facebook.github.io/react/docs/shallow-compare.html
 */
const shallowCompare = (instance, nextProps, nextState, nextContext) => (
    !shallowEqual(instance.props, nextProps) ||
    !shallowEqual(instance.state, nextState) ||
    !shallowEqual(instance.context, nextContext)
)

export default shallowCompare;
