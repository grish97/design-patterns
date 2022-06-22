interface BaseUser {
  id: string;
  name: string;
  accessToken: string | null;
  credentials: {
    username: string;
    password: string;
  };
}

interface Administrator extends BaseUser {
  roles: string[];
}

interface Oridinary extends BaseUser {
  tasks: string[];
}

interface Authentication<T extends BaseUser> {
  signIn(user: T): Promise<T>;
  signOut(user: T): void;
}

class User<T extends BaseUser> implements Authentication<T> {
  public isAuthenticated = false;

  public async signIn(user: T): Promise<T> {
    const data = await fetch("/authenticate", {
      method: "POST",
      body: JSON.stringify(user.credentials),
    });

    const resultUser = (await data.json()) as T;

    this.isAuthenticated = true;
    user.accessToken = resultUser.accessToken;

    return resultUser;
  }

  public signOut(user: T): void {
    this.isAuthenticated = false;
    user.accessToken = null;
  }
}

function createAuthentication<T extends BaseUser>() {
  return User<T>;
}

const AdminAuth = createAuthentication<Administrator>();
const adminAuth = new AdminAuth();

adminAuth.signIn({
  id: "adm.1234",
  name: "Cesar Admin",
  accessToken: "adm.token.1234",
  credentials: {
    username: "cesar.admin",
    password: "1234",
  },
  roles: [],
});


const OridinaryAuth = createAuthentication<Oridinary>();
const ordinaryAuth = new OridinaryAuth();

ordinaryAuth.signOut({
    id: '1234',
    name: 'Cesar',
    accessToken: '1234',
    credentials: {
      username: 'cesar',
      password: '1234'
    },
    tasks: []
  })