interface UserClass {
  firstname: string;
  lastname: string;
  email: string;
}

interface UserAuth extends UserClass {
  password: string;
}

interface AuthenticatedUser extends UserClass {
  userId: string;
  token: string;
  name: string;
}

type AuthProps = {
  authType: "LOGIN" | "REGISTER";
};

type AuthError = {
  msg: string;
};

export type { AuthenticatedUser, AuthError, AuthProps, UserAuth, UserClass };
