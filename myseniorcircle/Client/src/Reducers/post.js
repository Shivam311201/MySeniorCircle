import { FETCHUSER_POSTS,FETCH_ALL,CREATE, FETCHSINGLE_POST, } from "../constants/actionTypes";
export default (state={posts:[],post:{}},action)=>
{
    switch(action.type)
    {
        case FETCH_ALL:
            return {...state,posts:action.payload};
        case CREATE:
            return {...state, posts: [state.posts.data, action.payload] };
        case FETCHSINGLE_POST:
            return {...state,post:action.payload};
        default:
            return state;    
    }
}