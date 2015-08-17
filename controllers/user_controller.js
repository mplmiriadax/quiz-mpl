var users = { admin1: {id:1, username:"admin1", password:"qwerty"},
              miguel: {id:2, username:"miguel", password:"poiuyt"}
            };

// Comprueba si el usuario esta registrado en users
// Si autenticación falla o hay errores se ejecuta callback(error).
exports.autenticar = function(login, password, callback) {
  if (users[login]){
    if (password === users[login].password){
      callback(null, users[login]);
    }else {
      callback(new Error('Password erróneo.'));
    }
  } else {
    callback(new Error('No existe user=' + login))
  }
};
