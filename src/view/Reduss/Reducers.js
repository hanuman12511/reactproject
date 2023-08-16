const initial={
    username:'',
    status:false,
    isLoading:false,
    isLoggedIn:false
}

  function reducers(state,action){

    switch(action.type){
        case 'login':
           
            return{
                ...state,
                isLoading:true
            }
        case 'success':
            return{
                ...state,
                isLoading:false,
                isLoggedIn:true
            }
        case 'logout':
            return{
                ...state,
                isLoading:false,
                isLoggedIn:false
            }
    }

} 


export {reducers,initial}