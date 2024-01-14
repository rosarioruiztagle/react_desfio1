import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MyCard from './components/MyCard'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Header titulo="Adopta un perrito"/>
      <main className="catalogo">
      <MyCard
      imagen="https://cdn.pixabay.com/photo/2023/07/03/19/35/border-collie-8104878_1280.jpg"
      titulo="Pepe"
      descripcion="Pepe es un cachorro de 8 meses. Le gusta correr, saltar y atrapar pelotas."
      colorTag="success"
      textoTag="Border Collie"
      />
       <MyCard
      imagen="https://cdn.pixabay.com/photo/2017/07/24/15/07/akita-2534986_1280.jpg"
      titulo="Kira"
      descripcion="Con Kira podras vivir en plena seguridad, ya que es la perrita más protectora de todas."
      colorTag="primary"
      textoTag="Akita"
      />
       <MyCard
      imagen="https://cdn.pixabay.com/photo/2017/07/27/19/04/malinois-2546361_1280.jpg"
      titulo="Susy"
      descripcion="A Susy le encanta bañarse en el agua, ya sea en piscinas, lagos o mar."
      colorTag="danger"
      textoTag="Pastor Belga"
      />
       <MyCard
      imagen="https://cdn.pixabay.com/photo/2020/07/06/16/19/dog-5377475_1280.jpg"
      titulo="Samy"
      descripcion="Samy tiene 2 años y no le gusta correr."
      colorTag="warning"
      textoTag="Galgo"
      />
      </main>
      <Footer />
    </>
  )
}

export default App
