import { combineReducers } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";
import enterpriseReducer from "./slices/enterpriseSlice";
import offerReducer from "./slices/offerSlice";
import templateReducer from "./slices/templateSlice";
import roomStyleReducer from "./slices/roomStyleSlice";
import authReducer from "./slices/authSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  contact: contactReducer,
  enterprise: enterpriseReducer,
  offer: offerReducer,
  template: templateReducer,
  roomStyle: roomStyleReducer,
});
