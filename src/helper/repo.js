class repo {
  static toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      if (arr[i] !== undefined) rv[i] = arr[i];
    return rv;
  }
  static genPassword(chars, passwordLength) {
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
  }
  static checkRole(data) {
    let role = "User";
    if (data == 0) {
      let role = "SuperAdmin";

      return role;
    }
    if (data == 1) {
      let role = "Admin";

      return role;
    }
    return role;
    // 0 => SuperAdmin
    // 1 => Admin
    // 2 => User
    // 3 => User
  }
}
export default repo;
