const qrImage = document.getElementById('qrImage')
const qrButton = document.getElementById('qrButton')
const loader = document.getElementById('loader')
const container = document.getElementById('container')
const counter = document.getElementById('counter')
const loaderContainer = document.getElementById('loader-container')

const getQR = () => {
  container.style.display = 'block'
  loader.style.display = 'flex'
  qrImage.style.display = 'block'
  counter.style.display = 'block'
  loaderContainer.style.display = 'block'
  fetch('/token')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      qrButton.style.display = 'none'
      qrImage.src = data.qr
      loader.classList.remove('notransition')
      loader.style.transform = "translateX(-100%)"
      // Contador tiempo
      counter.innerText = 30
      const contadorInterval = setInterval(()=>{
          const text = counter.innerText
          const newText = text-1
          counter.innerText = newText
          console.log('hola')
        },1000)
      setTimeout(()=>{
        clearInterval(contadorInterval)
        console.log('Timeout!')
        qrImage.src = ''
        loader.classList.add('notransition')
        loader.style.transform = "translateX(0)"
        loader.style.display = 'none'
        qrImage.style.display = 'none'
        container.style.display = 'none'
        qrButton.style.display = 'flex'
        counter.style.display = 'none'
        loaderContainer.style.display = 'none'
      },30000)
    })
}

qrButton.addEventListener('click', getQR)