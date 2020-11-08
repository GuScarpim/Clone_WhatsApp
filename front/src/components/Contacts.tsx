import React, { useState } from 'react';
import * as S from './styles/contacts';

type Props = {
  perfil: string;
  name: string;
  message: string;
  check: string;
  thumbnail: string;
  changeMessage: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Contacts(props: Props) {

  return (
    <>
      <S.Contacts onClick={props.changeMessage}>
        <S.Perfil>
          {/* {props.perfil} */}
          {props.perfil === "" ?
            <img src={props.thumbnail} alt="Perfil" /> :
            props.perfil}
        </S.Perfil>
        <section>
          <span>{props.name}</span>
          <small>
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18" width="18" height="18">
              <path fill={`${props.check}`} d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z" />
            </svg>
            {props.message}</small>
        </section>
      </S.Contacts>
    </>
  )
}