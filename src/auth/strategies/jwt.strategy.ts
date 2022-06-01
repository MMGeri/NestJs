import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // bearer token in Authorization header
      ignoreExpiration: false, // if true, will ignore token expiration
      secretOrKey: jwtConstants.secret, // secret key
    });
  }

  /*JWT contains token consists of: header.payload.signature
    header: type of token, and algorithm being used

    payload: iss (issuer), exp (expiration time), sub (subject), aud (audience)
        (base64encoded) so its not really meant to be public information
        példa: eyJ1c2VybmFtZSI6InRlc3Q3QGdtYWlsLmNvbSIsInN1YiI6NywiaWF0IjoxNjU0MTA0NDU4LCJleHAiOjE2NTQxMDQ1MTh9
               {"username":"test7@gmail.com","sub":7,"iat":1654104458,"exp":1654104518}

    signature: To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.*/

  /*Passport first verifies the JWT's signature and decodes the JSON (payload)*/
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username }; //attaches the decoded payload to request object
  }
}