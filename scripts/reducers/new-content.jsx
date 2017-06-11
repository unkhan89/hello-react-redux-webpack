
// A reducer function that will be called when an action creator is executed
// (recall an action creator is invoked by something like a button onClick in a component)
//
// If the action.type matches something this function can handle, it will return
// the data that was passed along with the action.
//
export default function(state=null, action) {

  switch(action.type) {
    case 'NEW_CONTENT_CREATED':
      return action.payload;
      break;
    default:
      console.log('Warning! Unmapped action type: ' + action.type);
      return null;
    }
}
