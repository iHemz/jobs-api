interface UserClass {
  name: string;
  email: string;
}

interface UserAuth extends UserClass {
  password: string;
}

interface AuthenticatedUser extends UserClass {
  userId: string;
  token: string;
}

type AuthProps = {
  authType: "LOGIN" | "REGISTER";
};

type AuthError = {
  msg: string;
};

export type { AuthenticatedUser, AuthError, AuthProps, UserAuth, UserClass };
