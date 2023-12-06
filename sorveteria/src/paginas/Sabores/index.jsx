import Topo from '../../components/Topo';
import Rodape from '../../components/Rodape';
import './style.css'
export default function Sabores() {
    return(
      <div>
      <Topo />
        <main>
      <section className='box-banner' >
        <div className='box-title'>
          <h1>NOSSOS SABORES</h1>
        </div>
      </section>
      
      <section className='secao-sabores' >
          <h2>Sabores de sorvete</h2>
        <div className='box-sabores limita-secao'>
        <figure className="box-sorvete">
              <img src="assets/sabor-oreo.png" alt="sorvete sabor oreo"/>
              <figcaption>
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
              </figcaption>
            </figure>


            <figure className="box-sorvete">
              <img src="./assets/sabor-pistache.png" alt="sorvete sabor pistache"/>
              <figcaption>
              <h3>Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
              </figcaption>
            </figure>

            <figure className="box-sorvete">
              <img src="assets/sabor-cookies-avela.png" alt="sorvete sabor cookie com avelã"/>
              <figcaption>
              <h3>Sorvete Cookies & Avelã</h3>
              <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
              </figcaption>             
            </figure>


            <figure className="box-sorvete">
              <img src="assets/sorbet-kiwi.png" alt="sorbet sabor kiwi"/>
              <figcaption>
              <h3>Sorvete de Kifigure</h3>
              <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
              </figcaption>
            </figure>


            <figure className="box-sorvete">
              <img src="assets/sorbet-morango.png" alt="sorbet sabor morango"/>
              <figcaption>
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
              </figcaption>
            
            </figure>


            <figure className="box-sorvete">
              <img src="assets/sorbet-limao.png" alt="sorbet limão siciliano"/><figcaption>
              <h3>Sorvete de Limão Siciliano</h3>
              <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
              </figcaption>
            </figure>
         
        </div>
   
      
        
            
      </section>
        </main>
        <Rodape />
      </div>
      
    
)  }