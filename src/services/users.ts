import { HTTP } from "./http";

import type { ApiConfig, User } from "../types";
export class Users {
  static $inject: string[] = ["http", "config"];

  constructor(private http: HTTP, private apiConfig: ApiConfig) {}

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
