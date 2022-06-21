const jwt = require('jsonwebtoken')
const QRCode = require('qrcode')

const generateQR = async (req,res) => {
  const token = jwt.sign({
  }, process.env.JWT_SECRET, {
    expiresIn: '30s'
  })
  const qr = await QRCode.toDataURL(process.env.VUE_APP_URL+'/horas/jwt/'+token)
  res.send({
    qr
  })
}


module.exports = {
  generateQR
}