import styles from "./CityList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

const CountryList = () => {
  const { isLoading, cities } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  if (cities)
    return (
      <>
        <ul className={styles.cityList}>
          {countries.map((country) => (
            <CountryItem country={country} key={country.country} />
          ))}
        </ul>
      </>
    );
};

export default CountryList;
