import { TRole } from "./user.interface";

export const Role: TRole[] = ["user", "admin"];

export const USER_ROLE = {
  user: "user",
  admin: "admin",
} as const;

export type TUserRole = keyof typeof USER_ROLE;
