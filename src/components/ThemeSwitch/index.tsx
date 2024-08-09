import React, { useEffect, useState, memo } from 'react';

import { useDarkMode } from '~/hooks/useDarkMode';

import { Checkbox, Container, Shadow, Thumb, ThumbWrapper, Track } from './styles';

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onThemeSwitchClick = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Container role={'button'} aria-pressed={isClient ? darkMode : false} onClick={onThemeSwitchClick}>
      <Track />
      <ThumbWrapper>
        <Thumb />
        <Shadow />
      </ThumbWrapper>
      <Checkbox type='checkbox' aria-label={'Theme Switch'} checked={darkMode} onChange={onThemeSwitchClick} />
    </Container>
  );
};

export default memo(ThemeSwitch);
