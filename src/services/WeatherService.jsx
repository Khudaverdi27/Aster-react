import { getPosition } from "../utils/helper";
import { getWeather } from "./request";

export const serviceWeather = () =>
  new Promise(async (resolve, reject) => {
    if ("geolocation" in navigator) {
      try {
        const position = await getPosition();

        const { latitude, longitude } = position?.coords;
        const key = "1882ca3053a86bff2e348a30b9d66d62";
        const query = `weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
        resolve(await getWeather(query));
      } catch (error) {
        reject(error);
      }
    } else {
      reject(new Error("Browser dont support geolocation"));
    }
  });
