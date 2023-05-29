import { Model } from "sequelize";
import { User } from "../interfaces/user";
import UserModel from "../Models/User";
class UserService {
  static async getUsers(): Promise<User[]> {
    try {
      const allUsers = await UserModel.findAll();
      console.log(typeof allUsers)
      return allUsers as any;
    } catch (error) {
      throw new Error(error.message);
    }    
  }
}

export default UserService;