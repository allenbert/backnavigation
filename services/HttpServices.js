import Global from '../global'

const getHeaders = (accessToken) => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
});

async function getAccessToken(username, password) {

    const body = JSON.stringify({
        "grant_type": "password",
        "client_id": Global.ClientId,
        "client_secret": Global.ClientSecret,
        "username": username,
        "password": password,
        "scope": ""
    });
    debugger;
    const url = `${Global.APIUrl}${Global.access_token}`
    const headers = {
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
    }

    const res = await fetch(url, {
        method: 'POST',
        headers,
        body
    })

    if (!res.ok) {
        debugger;
        throw res;
    }

    return res.json()
}

export { getAccessToken }