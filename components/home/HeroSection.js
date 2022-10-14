import React from 'react';
import Image from 'next/image';
import classes from './HeroSection.module.scss';
import HeroImg from '../../images/hero_img.jpg';
import Text from '../text/Text';
import ButtonWithLink from '../button/Button';

function HeroSection() {
  return (
    <section className={classes.hero__section}>
      <div className={classes.hero__container}>
        <div className={classes.hero__info}>
          <h1 className={classes.hero__title}>
            Welcome to <span>Frace Recipes,</span> your authentic food recipes
          </h1>
          <br />
          <Text>home of food recipes you can trust</Text>
          <div className={classes.hero__buttons}>
            <div className="rounded-full p-2 px-3 hover:bg-orange-600">
              <ButtonWithLink link="/meals" variant="primary">
                Explore Meals
              </ButtonWithLink>
            </div>
            <div className="rounded-full p-2 px-3 hover:bg-orange-600">
              <ButtonWithLink link="/saved-meals">Saved Meals</ButtonWithLink>
            </div>
          </div>
        </div>
        <div className={classes.hero__img}>
          <Image src={HeroImg} alt="Frace-Recipe" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
