const getInvides = () => {

    fetch('URL_ENPOINT')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => ...)


}

export default getInvides;