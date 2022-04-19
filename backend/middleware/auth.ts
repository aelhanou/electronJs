import jwt, { JwtPayload } from "jsonwebtoken"
import { finished } from "stream/promises"


const { JWT_SECRET } = process.env
export const getUser = (token: any): JwtPayload | null | void => {


  if (token) {
    return jwt.verify(token, JWT_SECRET as string, { algorithms: ["HS256"] }, (err, payload) => {

      return err ?
        err.name == "TokenExpiredError" ?
          { tokenExpired: true } : { tokenInvalid: true }
        : payload

    })
  }
  return null
}



export const singleUpload = async ({ file }: any) => {

  const { createReadStream, filename, mimetype, encoding } = await file;
  const stream = createReadStream();

  const out = require('fs').createWriteStream("public/Images/" + filename);
  stream.pipe(out);
  await finished(out);

  return { filename, mimetype, encoding };
}