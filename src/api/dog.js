let key = 'rqgLcLaO8ZSjNJDMdqy1i19a3qZBrDVBrcGHHWF366C34RtFJN'
let secret = 'kfQMxVox4kH2I7A56kwo1JPrJyoRuQEnxWHwfoDc'
let org ="RI77"
let status= "adoptable"
let size = "small"

fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
	body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}).then(function (resp) {

	// Return the response as JSON
	return resp.json();

}).then(function (data) {

	// Log the API data
	console.log('token', data);

	// Return a second API call
	// This one uses the token we received for authentication
	return fetch('https://api.petfinder.com/v2/animals?size=' + size + '&status=' + status, {
		headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

}).then(function (resp) {

	// Return the API response as JSON
	return resp.json();

}).then(function (data) {

	// Log the pet data
	console.log('pets', data);

}).catch(function (err) {

	// Log any errors
	console.log('something went wrong', err);

});
