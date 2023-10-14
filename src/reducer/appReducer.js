export const  myReducer=(state,action)=>{
   switch(action.type){
    case "Auth" : 
    state = {
        ...state,
        isLoggedIn:action.payload
    }
    break;
    case "UserInfo" :
        state = {
            userInfo :{
                ...state.userInfo,
              ...action.payload  
            }
        }
        break;
   }
   return state
}