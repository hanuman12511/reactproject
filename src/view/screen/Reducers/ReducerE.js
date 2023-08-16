const ReducerE=(state,action)=>{
    switch(action.types){

        case 'incr':
            return{
                count:state.count+1
            }
        case 'decr':
            return{
                count:state.count-1
            }
        default :return {
            count:state.count
        }

    }

}
export  default   ReducerE    


