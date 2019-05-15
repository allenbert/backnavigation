class API {
  static baseURL = 'http://track.jksoftec.com'

  static endpoints = {
    create: 'ride',
    update: 'ride/{id}',
    complete: 'ride/{id}/complete',
  }

  static headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  static create(name, startPoint, destination) {
    const url = `${this.baseURL}/${this.endpoints.create}`;
    const body = new FormData()

    return fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name,
        startPoint,
        destination: {
          latitude: destination.lat,
          longitude: destination.lng,
        },
      }),
    });
  }

  static update(id, location) {
    const endpoint = this.endpoints.update.replace('{id}', id);
    const url = `${this.baseURL}/${endpoint}`;

    return fetch(url, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({ location }),
    });
  }

  static complete(id) {
    const endpoint = this.endpoints.complete.replace('{id}', id);
    const url = `${this.baseURL}/${endpoint}`;

    return fetch(url, {
      method: 'POST',
      headers: this.headers,
    });
  }
}

export default API;