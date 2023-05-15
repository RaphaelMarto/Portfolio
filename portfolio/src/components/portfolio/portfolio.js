import React from 'react';
import MyCard from './Card';
import DTO from './DTO';
import { Container } from 'react-bootstrap';
import './portfolio.css'

const Portfolio = () => {
  return (
    <>
        <section id="portfolio">
            <h1>Portfolio</h1>
            <div className='portfolio-content'>
                <Container className="d-flex justify-content-center flex-wrap">
                {
                    DTO.map((item,index)=>{
                        const className = index % 2 === 0 ? 'custom-card-even' : 'custom-card-odd';
                        return <MyCard key={index} imageSrc={item.IMAGE} desc={item.DESC} nom={item.NOM} theme={item.THEME} done={item.TIME_DONE} valid={item.TIME_VALIDATED} preuve={item.PREUVE} className={className}/>
                    })
                }
                </Container>
            </div>
        </section>
    </>
  );
};

export default Portfolio;
