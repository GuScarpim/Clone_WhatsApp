import React, { useState } from 'react';
import * as S from './styles/contacts';

interface Contacts {
  // contacts: Array<{
  perfil: string;
  name: string;
  message: string;
  view: boolean;
  // }>
}

export default function Contacts() {
  const [contacts, setContacts] = useState<Contacts[]>([
    {
      perfil: "GS",
      name: "Gustavo Scarpim",
      message: "Clonando WathsApp",
      view: true
    },
    {
      perfil: "SP",
      name: "Scarpim Prof",
      message: "Olá, tudo bem?",
      view: false
    },
    {
      perfil: "DG",
      name: "Diogo Genuino",
      message: "Hahahaha",
      view: true
    },
    {
      perfil: "NT",
      name: "Natan Teves",
      message: "Opa",
      view: false
    },
    {
      perfil: "BR",
      name: "Brasil",
      message: "Pelé",
      view: false
    },
    {
      perfil: "RM",
      name: "Rodrigo Marcelo",
      message: "Eae!",
      view: true
    },
    {
      perfil: "JS",
      name: "Jacaré Sujo",
      message: "Nham Nham Nham Nham",
      view: true
    },
    {
      perfil: "CQ",
      name: "Cachorro Quente",
      message: "Opa",
      view: true
    },
    {
      perfil: "RP",
      name: "Risadas Palhaço",
      message: "KKKKKKKK",
      view: true
    },
    {
      perfil: "FM",
      name: "Fatal Mortal",
      message: "Uhuuuu",
      view: false
    },
    {
      perfil: "GS",
      name: "Gustavo Scarpim",
      message: "Clonando WathsApp",
      view: true
    },
    {
      perfil: "SP",
      name: "Scarpim Prof",
      message: "Olá, tudo bem?",
      view: false
    },
    {
      perfil: "DG",
      name: "Diogo Genuino",
      message: "Hahahaha",
      view: true
    },
    {
      perfil: "NT",
      name: "Natan Teves",
      message: "Opa",
      view: false
    },
    {
      perfil: "BR",
      name: "Brasil",
      message: "Pelé",
      view: false
    },
    {
      perfil: "RM",
      name: "Rodrigo Marcelo",
      message: "Eae!",
      view: true
    },
    {
      perfil: "JS",
      name: "Jacaré Sujo",
      message: "Nham Nham Nham Nham",
      view: true
    },
    {
      perfil: "CQ",
      name: "Cachorro Quente",
      message: "Opa",
      view: true
    },
    {
      perfil: "RP",
      name: "Risadas Palhaço",
      message: "KKKKKKKK",
      view: true
    },
    {
      perfil: "FM",
      name: "Fatal Mortal",
      message: "Uhuuuu",
      view: false
    },
  ]);

  return (
    <>
      {contacts.map((item, index) => (

        <S.Contacts>
          <S.Perfil>
            {item.perfil}
          </S.Perfil>
          <section>
            <span>{item.name}</span>
            <small>
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18" width="18" height="18">
                <path fill={item.view ? "#4FC3F7" : "#B7B7B7"} d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z" />
              </svg>
          Clone do Wats</small>
          </section>
        </S.Contacts>
      ))}

    </>
  )
}