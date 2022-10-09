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
const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            return id;
        } catch (e) {
            rejectWithValue(e.response.data);
        }
    }
);
const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.createCar(car);
            return data;
        } catch (e) {
            rejectWithValue(e.response.data);
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
        // deleteCarById: (state, action) => {
        //     const index = state.cars.findIndex(car => car.id === action.payload);
        //     state.cars.splice(index, 1);
        // }
    },

    extraReducers: builder =>
        builder
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car => car.id === action.payload);
                if (index !== -1) state.cars.splice(index, 1);
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars = [...state.cars,action.payload]
            })
});

const {reducer: carReducer, actions: {setCurrentCar}} = carSlice;

const carActions = {
    getAllCars,
    setCurrentCar,
    // deleteCarById
    deleteCar,
    createCar
}

export {carReducer, carActions};