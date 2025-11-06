import { useState, useEffect } from "react";
import axios from "axios";

export default function useCoffeeData() {
    const BASE_URL =
        "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(BASE_URL);
                setData(response.data);
            } catch (err) {
                setError(err.statusText);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return [data, loading, error];
}
