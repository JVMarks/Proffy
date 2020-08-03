import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/50274461?s=460&u=7c345f3c28f8fe00eb37abb0bb8dc633774dcef9&v=4" alt="João Victor" />
        <div>
          <strong>João Victor</strong>
          <span>Fisico</span>
        </div>
      </header>

      <p>
        Lorem, ipsum dolor sit amet consectetur
        adipisicing elit.Natus, quia.
              <br /> <br />
              Dolore iusto exercitationem corporis quaerat.
              Aut laudantium quam sapiente similiqu
              e nam. Illo reprehenderit fugit id. Accusamus sit
              quis officia officiis.
          </p>
      <footer>
        <p>
          Preço/hora
            <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
              </button>
      </footer>
    </article>
  )
}

export default TeacherItem;