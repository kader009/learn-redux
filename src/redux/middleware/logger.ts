import { Middleware } from "@reduxjs/toolkit";

export const logger:Middleware = (state) => (next) => (action) =>{
  console.log('current state:', state.getState());
  console.log('Action:', action);
  next(action)
  console.log('current state:', state.getState());
}