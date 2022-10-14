import React from 'react';
import Image from 'next/image';
import classes from './Footer.module.scss';
import Logo from '../../images/FraceLogo21.png';
import Text from '../text/Text';

function Footer() {
  return (
    <footer className={classes.footer}>
      <Image src={Logo} alt="FraceRecipes2 logo" />
      <Text>Home of recipes you can trust!!!</Text>
      s
      <Text className={classes.copyright}>
        © “Frace Recipes” 2022 All right reserved.
      </Text>
    </footer>
  );
}

export default Footer;
