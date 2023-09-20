import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../axiosInstance/axiosInstance";

// ----------------------------------- all characters api------------------------------------/

export const allCharacters = createAsyncThunk(
  "allCharacters",
  async ({ limit, pages, sort, name, gender, race }) => {
    const response = await axiosApi.get(
      `character?limit=${limit ? limit : 10}&page=${
        pages ? pages : 1
      }&sort=name:${sort ? sort : "asc"}&name=${name ? name : ""}&gender=${
        gender ? gender : ""
      }&race=${race ? race : ""}`
    );
    // console.log("response", response);
    console.log("response", response.data);
    //   return response.data;
    return response.data;
  }
);

// ----------------------------------- single character api------------------------------------/

export const characterSingleView = createAsyncThunk(
  "characterSingleView",
  async (id) => {
    const response = await axiosApi.get(`character/${id}`);
    console.log("response", response);
    return response.data;
  }
);
