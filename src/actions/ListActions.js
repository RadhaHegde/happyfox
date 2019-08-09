
// export const GET_LISTS='GET_LISTS'

/* export function getAllLists(lists){
    return function(dispatch){
        dispatch({
            type:'GETLISTS_REQUEST'
        })
    return fetch("https://api.trello.com/1/boards/5d3f23cea02d998eddee61cf/?cards=all")
    .then(response=>response.json().then(
        body=>({response, body})))
        .then(({response,body})=>{
            if(!response.ok){
                dispatch({
                    type:'GET_LISTS_FAILURE',
                    error:body.error
                })
            }
            else{
                dispatch({
                    type:'GET_LISTS_SUCCESS',
                    lists:body
                })
            }
        })
}
} */



export function getLists(){
    return function dispatch(){
        dispatch(request())
        return fetch("https://api.trello.com/1/boards/5d3f23cea02d998eddee61cf/?cards=all")
        .then(
            response=>{
                if(!response.ok){
                    dispatch(failure(response))
                }
                else{
            dispatch(success(response))
        }
    }
            )
    }
}


export function request(){
    return({
        type:"GET_LISTS_REQUEST"
    })
}

export function success(){
    return ({
        type:"GET_LISTS_SUCCESS"
    })
}

export function failure(){
    return ({
        type:"GET_LISTS_FAILURE"
    })
}