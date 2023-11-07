import {configureStore} from '@reduxjs/toolkit'
import dataReducer from './entityData'

export const store=configureStore({
    reducer:{
        data:dataReducer
    }
})