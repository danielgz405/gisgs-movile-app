import { endPoints } from ".."
import axios from "axios";

export const getEvents = async () => {
    const config = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.get(endPoints.events.GetEvents, config);
    return response;
};

export const insertAutomobile = async (data) => {
    const config = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(endPoints.events.InsertAutomobile, data, config);
    return response;
};

export const insertVisitor = async (data) => {
    const config = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(endPoints.events.InsertVisitor, data, config);
    return response;
};

export const insertPackage = async (data) => {
    const config = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(endPoints.events.InsertPackage, data, config);
    return response;
};
