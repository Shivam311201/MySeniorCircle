import { FETCHUSER_POSTS,FETCH_ALL,CREATE, FETCHSINGLE_POST, DELETE_POST, LIKE_POST, GET_USER, COMMENT_POST, } from "../constants/actionTypes";
export default (state={posts:[],post:{},user:{}},action)=>
{
    switch(action.type)
    {
        case FETCH_ALL:
            return {...state, posts:action.payload};
        case CREATE:
            return {...state, posts: [...state.posts, action.payload] };
        case FETCHSINGLE_POST:
            return {...state, post:action.payload};
        case DELETE_POST:
            return {...state, posts:state.posts.filter((item)=>item._id!==action.payload)};
        case LIKE_POST:
            return { ...state, posts:state.posts?.map((item) => (item._id === action.payload._id ? action.payload : item))};
        case COMMENT_POST:
            return { ...state, posts:state.posts?.map((item) => (item._id === action.payload._id ? action.payload : item))};    
        case GET_USER:
            return {...state,user:action.payload};
        default:
            return state;    
    }
}