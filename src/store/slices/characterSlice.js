import { createSlice } from "@reduxjs/toolkit";
import { allCharacters, characterSingleView } from "../api/character.route";
const initialState = {
  data: null,
  characterViewObject: {},
  characterList: [],
  characterView: {},
};
const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: {
    [allCharacters.pending]: () => {
      console.log("allCharacters pending");
    },
    [allCharacters.fulfilled]: (state, action) => {
      console.log("allCharacters fulfilled");
      state.characterViewObject = action.payload;
      state.characterList = action.payload.docs;
    },
    [allCharacters.rejected]: () => {
      console.log("allCharacters rejected");
    },
    [characterSingleView.pending]: () => {
      console.log("characterSingleView pending");
    },
    [characterSingleView.fulfilled]: (state, action) => {
      console.log("characterSingleView fulfilled");
      state.characterView = action.payload.docs;
    },
    [characterSingleView.rejected]: () => {
      console.log("characterSingleView rejected");
    },
  },
});

export default characterSlice.reducer;
