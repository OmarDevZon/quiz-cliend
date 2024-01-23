import { createSlice } from "@reduxjs/toolkit";
import { TAction, TInitialState } from "../../types/redux/addQuizType";

const initialState: TInitialState = {
  quiz: [],
};

export const quizSlice = createSlice({
  name: "addQuiz",
  initialState,
  reducers: {
    addQuiz: (state, action: TAction) => {
      state.quiz.push(action.payload);
    },
  },
});

export const { addQuiz } = quizSlice.actions;

export const quizReducer = quizSlice.reducer;
