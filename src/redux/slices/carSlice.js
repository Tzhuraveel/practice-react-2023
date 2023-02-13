import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../api";



const initialState = {
    cars: [],
    updatedCar: null,
    total_pages: null,
    error: null,
    loading: null,
    prev: null,
    next: null,
    state: null
}


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        updateCarLocal: (state, action) => {
               state.updatedCar = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllCars.fulfilled, (state, action) => {
                const {items, prev, next} = action.payload
                state.loading = false
                state.cars = items
                state.prev = prev
                state.next = next
            })
            .addCase(getAllCars.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(getAllCars.pending, (state) => {
                state.loading = true
            })
            .addCase(createCar.fulfilled, (state, action) => {
            })
            .addCase(updatedCar.fulfilled, (state, action) => {
                const foundCar = state.cars.find(value => value.id === action.payload.id);
                Object.assign(foundCar, action.payload)

            })

})


const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async ({page}, thunkAPI) => {
       try {
           const {data} = await carService.getAllCar(page);
           return data
       }catch (e) {
           thunkAPI.rejectWithValue(e.response.data)
       }
    }
)


const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {rejectWithValue, dispatch}) => {
        try {
            await carService.createCar(car)
            dispatch(getAllCars({page: 1}))
        }catch (e) {
            rejectWithValue(e.response.data)
        }
    }

)


const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({car}, {rejectWithValue, dispatch}) => {
        try {
            await carService.deleteCar(car.id)

        }catch (e) {
            rejectWithValue(e.response.data)
        }
    }

)

const updatedCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({updatedCar, car}, {rejectWithValue}) => {
        try {
            await carService.updateCar(updatedCar.id, car)
            return {id:updatedCar.id, ...car}
        }catch (e) {
            rejectWithValue(e.response.data)
        }
    }

)


const {reducer: carReducer, actions: {updateCarLocal}} = carSlice;


const carActions = {
    updateCarLocal,
    updatedCar,
    getAllCars,
    createCar,
    deleteCar
}

export {
    carReducer,
    carActions,
}




