import React from 'react'
import styles from '../styles/BenefitsCard.module.css';

function BenefitsCard({img, title, text}) {

  const {container, header, content} = styles;

  return (
    <div className={container}>
      <section className={header}>
        <img src={img} alt="" />
        <h1>{title}</h1>
      </section>
      <section className={content}>
        <canvas />
        <p>{text}</p>
      </section>
    </div>
  )
}

export default BenefitsCard