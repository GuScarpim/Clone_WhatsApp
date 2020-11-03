import React from 'react';
import * as S from './styles';

import Card from '../components/Card';

export default function Home() {
  return (
    <S.Container>
      <header />
      <S.Content>
        <Card />
      </S.Content>
    </S.Container>
  )
}