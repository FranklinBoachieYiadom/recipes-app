import React from 'react';
import Text from '../text/Text';
import Title from '../text/Title';
import classes from './About.module.scss';

function About() {
  return (
    <div className={classes.about}>
      <Title className={classes.title}>About FraceRecipes</Title>
      <Text>
        Frace Recipe is the one stop site for all your food recipes, we have
        both local and continental dishes you can select from, the system is
        user friendly and has a wide range of functionalities that can help you
        the user to select from. The dishes have been categorized by type for
        easy identification and selection, you can also manually type in your
        preferred food to search for it from our system. You have the option to
        save any meal of your choice into your saved list where you can easily
        access all your saved meals. Finally you can also add your own recipe to
        your saved list.
        <br />
        <br />
        <span className="text-orange-600 text-5xl">Frace Recipes</span> was
        developed by
        <span className="text-orange-600"> Mr. Franklin Boachie- Yiadom </span>
        and 
        <span className="text-orange-600"> Madam Grace Agbemor</span> in the
        year 2022 at Pre-Mest CodeCoast training. It was built to help users
        design food menu for the day or month and also solve the problem of
        people finding it difficult to try out new delicacies in their kitchen,
        the system allows users to save their new tried recipes to their saved
        meals.
      </Text>
    </div>
  );
}

export default About;
