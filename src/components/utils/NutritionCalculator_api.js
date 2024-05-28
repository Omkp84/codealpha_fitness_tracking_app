import axios from 'axios';

export async function fetchBMI(heightFeet, heightInches, weight) {
    const options = {
        method: 'GET',
        url: 'https://nutrition-calculator.p.rapidapi.com/api/bmi',
        params: {
            measurement_units: 'std',
            feet: heightFeet,
            inches: heightInches,
            lbs: weight
        },
        headers: {
            'X-RapidAPI-Key': '723258dc36msh69bd0206e198ac1p1cae86jsnf1e3df645b31',
            'X-RapidAPI-Host': 'nutrition-calculator.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data.bmi;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}
