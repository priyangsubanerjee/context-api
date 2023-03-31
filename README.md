## Context API

Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is designed to share data that can be considered `global` for a tree of React components, such as the current authenticated user, theme, or preferred language. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
