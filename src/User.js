import bcrypt from "bcrypt";

class User {
  constructor(email, password) {
    this.email = email;
    this.passwordHash = "";
    this.setPassword(password);
  }

  async setPassword(password) {
    const saltRounds = 10;
    this.passwordHash = await bcrypt.hash(password, saltRounds);
  }

  async validatePassword(password) {
    return await bcrypt.compare(password, this.passwordHash);
  }
}

export default User;