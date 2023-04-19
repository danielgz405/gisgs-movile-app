const API = 'http://172.30.56.183:5050';


export const endPoints = {
    auth: {
        login: `${API}/login`,
    },
    users: {
        profile: (userId) => `${API}/profile/${userId}`,
        createUser: `${API}/signup`,
    },
    events: {
        InsertAutomobile: `${API}/automobile`,
        InsertVisitor: `${API}/visitor`,
        InsertPackage: `${API}/package`,
        GetEvents: `${API}/events/list`,
    }
}