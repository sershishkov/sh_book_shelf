const config = {
  production:{
    SECRET:process.env.SECRET,
    DATABASE:process.env.MONGODB_URI
  },
  default:{
    SECRET:'shSecret',
    DATABASE:'mongodb://localhost:27017/sh_books_shelf'
  }
}

exports.get = function get(env){
  return config[env] || config.default ;
};