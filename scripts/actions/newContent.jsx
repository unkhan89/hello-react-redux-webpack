
// An 'action creator' function that returns the 'action' (some new data)
//
// This is a function that a user action will invoke.
// For example, an onClick on a button can bind to this function.
//
export const addNewContentActionCreator = (newContent) => {

  console.log('actions.newContent#addNewContent() newContent: '
              + JSON.stringify(newContent));

  // return actual action (some data in memory):
  return {
    type: "NEW_CONTENT_CREATED",    // an action ID so to speak
    payload: newContent             // data associated with this action?
  };

};
