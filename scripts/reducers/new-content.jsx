
// TODO
//
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
