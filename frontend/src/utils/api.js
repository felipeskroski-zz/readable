const endpoint = 'http://localhost:3001'

export function fetchCategories () {
  const url = `${endpoint}/categories`
  console.log('fetching from url', url)
  fetch(url, { headers: { 'Authorization': 'whatever-you-want' },credentials: 'include' })
    .then( (res) => { return(res.text()) })
    .then((data) => {
      console.log(data)
      //this.setState({backend:data})
    }
  );
}
