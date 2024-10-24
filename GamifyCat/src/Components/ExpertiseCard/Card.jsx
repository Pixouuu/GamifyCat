import React from 'react';
import './card.css';
import CardTemplate from './CardComponents/CardTemplate';
import AnimationBase from '../GeneralComponents/AnimationBase';

function Card() {
  return (
    <div className='bg-light w-full h-[1000px]' id='card-div'>
        <div className='w-screen h-[240px] flex items-center'>
             <AnimationBase initialX={-100} finalX={0}>
                 <h1 className='font-jakarta font-bold text-8xl ml-32'>Expertise</h1>
             </AnimationBase>
        </div>
        <div className='w-screen h-[720px] flex flex-col'>
            <div className='w-screen h-1/2 flex justify-center gap-10'>
                <CardTemplate Titre={"Design"} text1={"Logo, Branding, Icons"} text2={"Custom Illustrations"} text3={"User Experience (UX)"} text4={"User Interface (UI)"} text5={"Web & Product Design"}/>
                <CardTemplate Titre={"Development"} text1={"Js, Vue, React, Angular"} text2={"Web Development"} text3={"App Development"} text4={"Wordpress, Webflow"} text5={"Shopify, BigCommerce"}/> 
            </div>


            <div className='w-screen h-1/2 flex justify-center gap-10 mt-10'>
                <CardTemplate Titre={"Marketing"} text1={"PPC, SEO & SMM"} text2={"Content Marketing"} text3={"Email Marketing"} text4={"Marketing Research"} text5={"Web & Game Analytics"}/>
                <CardTemplate Titre={"Gamification"} text1={"Interactive ADs Banners"} text2={"Animated Landing Page"} text3={"Gamification Web Design"} text4={"Game Design & Development"} text5={"HTML5 & Unity Game Development"}/> 
            </div>
        </div>
    </div>
  );
}

export default Card;
