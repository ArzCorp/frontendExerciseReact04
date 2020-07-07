import React from 'react';
import { Link } from 'react-router-dom';
import './css/Information.css';

const Information = () => {
  return (
    <section className="information container">
      <div className="article">
        <h2 className="article__title">¡Bienvenido</h2>
        <div className="article__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum, sed enim iure cupiditate
            tempora cum consequuntur possimus voluptates dolorum placeat commodi quo cumque vel voluptatum, natus
            quam excepturi praesentium?
            </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab repellat itaque quam laudantium ipsa!
            Placeat ducimus ipsa eveniet labore quod, officiis quo recusandae consequuntur laborum saepe minus sunt
            cupiditate quam.
            </p>
        </div>
        <Link to="" className="button-article">Leer mas</Link>
      </div>
      <div className="article">
        <h2 className="article__title">Noticias recientes</h2>
        <div className="article__content">
          <div className="new">
            <h3 className="new__title">Publicada 09.09.2020</h3>
            <div className="new__title">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae veniam maxime odit tempora ipsam
                ea. Sapiente corrupti facere nobis maiores impedit excepturi error! Quidem dolor dolore quo fugit
                asperiores!
                </p>
            </div>
          </div>
          <div className="new">
            <h3 className="new__title">Publicada 09.09.2020</h3>
            <div className="new__content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae veniam maxime odit tempora ipsam
                ea. Sapiente corrupti facere nobis maiores impedit excepturi error! Quidem dolor dolore quo fugit
                asperiores!
                </p>
            </div>
          </div>
        </div>
        <Link to="" className="button-article">Saber mas</Link>
      </div>
      <div className="article">
        <h2 className="article__title">Nuestros servicios</h2>
        <div className="article__content">
          <ul className="service__list">
            <li>
              <Link to="/">Consultoria general</Link>
            </li>
            <li>
              <Link to="/">Analisis regulatorio de politicas</Link>
            </li>
            <li>
              <Link to="/">investigacion de mercado</Link>
            </li>
            <li>
              <Link to="/">Gestion de proyectos</Link>
            </li>
            <li>
              <Link to="/">Regulacion de soporte</Link>
            </li>
            <li>
              <Link to="/">Formacion Gerencial</Link>
            </li>
            <li>
              <Link to="/">Formacion Gerencial</Link>
            </li>
          </ul>
        </div>
        <Link to="" className="button-article">Leer mas</Link>
      </div>
    </section>
  )
}

export default Information;