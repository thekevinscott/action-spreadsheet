export default function fetchMiddleware({
  dispatch,
  //getState,
}) {
  return next => action => {
    if (!action || !action.fetch) {
      return next(action);
    }

    const {
      fetch,
    } = action;

    const promise = fetch({});

    return next({
      ...action,
      promise,
    });
  };
}
