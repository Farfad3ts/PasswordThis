const information = document.getElementById('info')
information.innerText = `${versions.node()}`

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
  }
  
  func()