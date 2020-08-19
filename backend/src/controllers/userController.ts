import { Request, Response } from 'express';
import mongoose from "mongoose";

export default class authenticateContoller {
  async index(request: Request, response: Response) {
    const User = mongoose.model("User");

  } 
}