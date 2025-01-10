import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Alex",
    email: "alex@gmail.com",
    userTasks: []
}
const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {}
})

export default userSlice.reducer