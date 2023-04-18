const API = 'http://172.31.200.65:5050';


export const endPoints = {
    auth: {
        login: `${API}/login`,
    },
    users: {
        profile: (userId) => `${API}/profile/${userId}`,
        createUser: `${API}/signup`,
    },
}