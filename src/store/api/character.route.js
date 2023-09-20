import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../axiosInstance/axiosInstance";

// ----------------------------------- all characters api------------------------------------/

export const allCharacters = createAsyncThunk("allCharacters", async () => {
  const response = await axiosApi.get("character");
  // console.log("response", response);
    console.log("response", response.data);
  //   return response.data;
  return response.data;
});

// ----------------------------------- single character api------------------------------------/

export const characterSingleView = createAsyncThunk(
  "characterSingleView",
  async (id) => {
    const response = await axiosApi.get(`character/${id}`);
    console.log("response", response);
    return response.data;
  }
);
