import { z } from "zod";

export const SignupValidation = z.object({
  username: z.string().min(2,{message: 'too short'}).max(50),
  name: z.string().min(2,{message: 'too short'}),
  email: z.string().email(),
  password: z.string().min(8,{message: 'password must be at least 8 characters'})
});
