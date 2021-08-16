import axios from 'axios';

export const GET_COVID_DATA = 'GET_COVID_DATA';
export const START_FETCHING = 'START_FETCHING';
export const FETCH_FAILED = 'FETCH_FAILED';

export const getCovidData = () => {
	return (dispatch) => {
		dispatch({ type: START_FETCHING });

		axios.get(
			'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global_and_us?country=Canada&state=Alberta&min_date=2020-04-22T00:00:00.000Z&max_date=2020-04-27T00:00:00.000Z&hide_fields=_id, country, country_code, country_iso2, country_iso3, loc, state')
			.then((res) => {
				console.log(
					('API DATA =====> ', res.data)
				);
				dispatch({
					type: GET_COVID_DATA,
					payload: res.data,
				});
			})
			.catch((err) => {
				console.error(
					'ERROR PULLING DATA',
					err.message
				);
				dispatch({
					type: FETCH_FAILED,
					payload: err.message,
				});
			});
	};
};
