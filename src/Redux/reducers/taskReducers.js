const initialState = {
    tasks: [],
}

const taskReducer = (state = initialState, action) =>{
    
    console.log(state.tasks);
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case "DELETE_TASK":
            return{
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            };
    
        default: return state ;
    }
}


export default taskReducer