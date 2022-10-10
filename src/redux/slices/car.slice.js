import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    update: null
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

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateById(id, car);
            return data;
        } catch (e) {
            rejectWithValue(e.response.data);
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

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setUpdate: (state, action) => {
            state.update = action.payload;
        }
    },

    extraReducers: builder =>
        builder
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars = [...state.cars, action.payload]
            })
            .addCase(updateCar.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car => car.id === action.payload.id);
                state.cars[index] = action.payload;
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car => car.id === action.payload);
                state.cars.splice(index, 1);
            })
});

const {reducer: carReducer, actions: {setUpdate}} = carSlice;

const carActions = {
    setUpdate,

    getAllCars,
    createCar,
    updateCar,
    deleteCar,
}

export {carReducer, carActions};