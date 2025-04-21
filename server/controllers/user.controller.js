const registerUser = async (req, res) => {
  try {
    console.log(req,res)
  } catch (error) {
    next(handleError(500, error.message))
  }
}

const loginUser = async (req, res) => {
  try {
    console.log(req,res)
  } catch (error) {
    console.log('LOGIN ', error)
  }
}

const logoutUser = async (req, res) => {
  try {
    console.log(req, res)
  } catch (error) {
    console.log('LOGOUT', error)
  }
}

module.exports = {
  loginUser,
  logoutUser,
  registerUser,
}
