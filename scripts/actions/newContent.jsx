
// An 'action creator' function that returns the 'action' (some new data)
//
export const addNewContentActionCreator = (newContent) => {

  console.log('actions.newContent#addNewContent() newContent: '
              + JSON.stringify(newContent));

  return {
    type: "NEW_CONTENT_CREATED",
    payload: "Some more new-ish fresh content :)"
  };

};
