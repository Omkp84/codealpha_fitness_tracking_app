import axios from 'axios';

export const fetchCaloriesData = async (activity, weight, duration) => {
    const options = {
        method: 'GET',
        url: 'https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned',
        params: {
            activity: activity,
            weight: weight,
            duration: duration
        },
        headers: {
            'X-RapidAPI-Key': '723258dc36msh69bd0206e198ac1p1cae86jsnf1e3df645b31',
            'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data from API');
    }
};
