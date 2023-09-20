import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

const CityList = () => {
  const { isLoading, cities } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message />;

  if (cities)
    return (
      <>
        <ul className={styles.cityList}>
          {cities.map((city) => (
            <CityItem city={city} key={city.id} />
          ))}
        </ul>
      </>
    );
};

export default CityList;
