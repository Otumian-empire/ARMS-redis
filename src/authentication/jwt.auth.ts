import jwt from "jsonwebtoken";
import { Response, Request } from "express";
import { FORBIDDEN, REQUEST_TOKEN } from "../util/api.message.js";
import { JWT_SECRET } from "../util/app.constant.js";
import { getJwtIat, getTokenFromHeader } from "../util/function.js";

export default class Auth {
  static async generateJWT(payload = {}) {
    return jwt.sign({ ...payload, iat: getJwtIat() }, JWT_SECRET);
  }

  static async verifyJWT(token:string) {
    const { id, username, email, iat } = jwt.verify(token, JWT_SECRET);
    return { id, username, email, hasExpired: await Auth.hasExpired(iat) };
  }

  static async hasBearerToken(req:Express.Request, res:Express.Response, next:Expres) {
    const token = getTokenFromHeader(req);

    if (!token) {
      return res.status(403).json({ success: false, message: FORBIDDEN });
    }

    req.token = token;

    next();
  }

  static async hasExpiredToken(req:Request,  res:Response, next: () => any) {
    const jwt:string = req.token;
    req.token = undefined;

    const payload = await Auth.verifyJWT(jwt);

    if (payload.hasExpired) {
      return res.json({ success: false, message: REQUEST_TOKEN });
    }

    req.payload = payload;

    return next();
  }

  static async hasExpired(ait: string) {
    return Date.now() >= parseInt(ait);
  }
}
