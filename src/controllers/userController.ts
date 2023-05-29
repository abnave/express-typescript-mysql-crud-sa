import UserService from "../services/userService";
import { Request, Response } from "express";

class UserController {
  static async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const allUsers = await UserService.getUsers();
      console.log(allUsers);
      res.json(allUsers);
    } catch (error) {}
  }
}

export default UserController;
