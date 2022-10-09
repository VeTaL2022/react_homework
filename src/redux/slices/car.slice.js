import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    currentCar: null
};

const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCurrentCar: (state, action) => {
            state.currentCar = action.payload;
        },
        deleteCarById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload);
            state.cars.splice(index, 1);
        }
    },

    extraReducers: builder =>
        builder
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
});

const {reducer: carReducer, actions: {setCurrentCar, deleteCarById}} = carSlice;

const carActions = {
    getAllCars,
    setCurrentCar,
    deleteCarById
}

export {carReducer, carActions};