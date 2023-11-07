import { createSlice } from "@reduxjs/toolkit"

const initialState={
    dummy:[{
        id:'1',
        title:'firsr',
        description:'this is first',
        date:'2023-05-15'
    },
    {
        id:'2',
        title:'dusra',
        description:'this is second',
        date:'2023-05-15'
    },
    {
        id:'3',
        title:'third',
        description:'this is third',
        date:'2023-05-15'
    },
    {
        id:'4',
        title:'fourth',
        description:'this is fourth',
        date:'2023-05-15'
    },],
    completed:[],
    

}

export const compslice=createSlice({
    name:'data',
    initialState,
    reducers:{
        entityCompleted:(state,action)=>{
            state.completed.push(action.payload.id);
        },
        entityIncomplete:(state,action)=>{
            state.completed.splice(state.completed.indexOf(action.payload.id),1);
        },
        delete:(state,action)=>{
            const n=state.dummy.filter((entity=>entity.id !==action.payload))
            state.dummy=n
            // state.dummy.splice(((entity)=>entity.id !==action.payload.id),1)
            // state.completed.splice(state.completed.indexOf(action.payload.id),1);
        },
        add:(state,action)=>{
            const id=new Date().toString()+Math.random().toString
            const n=state.dummy.push({...action.payload,id:id},...state)
            state.dummy=n;
        }
    }
})

export const entityCompleted=compslice.actions.entityCompleted;
export const entityIncomplete=compslice.actions.entityIncomplete;
export const deleteEntity=compslice.actions.delete;
export const addEntity=compslice.actions.add;
export default compslice.reducer;