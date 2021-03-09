const fetchRequests = {

  getUrls: () => {
    return fetch('http://localhost:3001/api/v1/urls')
    .then(response => response.json())
  },

  postUrl: (url, title) => {
    const postObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        long_url: url,
        title: title
      })
    }
    return fetch('http://localhost:3001/api/v1/urls', postObj)
  }

}

export default fetchRequests
