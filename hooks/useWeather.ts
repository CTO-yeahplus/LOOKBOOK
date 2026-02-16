// hooks/useWeather.ts
import { useState, useEffect } from "react";

export function useWeather() {
  const [localWeather, setLocalWeather] = useState({temp: 15, city: "Seoul", condition: "URBAN" });

  const getAuraVibe = (weatherCode: number) => {
    if (weatherCode === 0) return "SUNNY";
    if (weatherCode >= 1 && weatherCode <= 3) return "CHILL";
    if (weatherCode === 45 || weatherCode === 48) return "MIST";
    if ((weatherCode >= 51 && weatherCode <= 67) || (weatherCode >= 80 && weatherCode <= 82)) return "GLOOMY";
    if ((weatherCode >= 71 && weatherCode <= 77) || weatherCode === 85 || weatherCode === 86) return "FROST";
    if (weatherCode >= 95) return "WILD";
    return "URBAN";
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        if ("geolocation" in navigator) {
          const pos = await new Promise<GeolocationPosition>((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
          const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current_weather=true`);
          const weatherData = await weatherRes.json();
          
          setLocalWeather({ 
            temp: Math.round(weatherData.current_weather.temperature), 
            city: "Current Location",
            condition: getAuraVibe(weatherData.current_weather.weathercode)
          });
        }
      } catch (e) { 
        console.warn("위치 권한 없음. 기본 날씨를 사용합니다."); 
      }
    };
    fetchWeather();
  }, []);

  return { localWeather };
}