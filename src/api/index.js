const API = 'https://gisgs.azurewebsites.net';


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