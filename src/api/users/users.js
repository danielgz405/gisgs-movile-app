import { endPoints } from ".."
import axios from "axios";

const login = async (email, password) => {
    const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
      };

    const response = await axios.post(endPoints.auth.login, { email, password }, config);
    return await response;
}

export { login }
