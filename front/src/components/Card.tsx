import React, { useState } from 'react';
import * as S from './styles/card';

import Contacts from './Contacts';
import Contents from './Contents';

interface newContacts {
  perfil: string;
  name: string;
  message: string;
  thumbnail: string;
  id: string;
  view: boolean;
}


export default function Card() {
  const [contacts, setContacts] = useState<newContacts[]>([
    {
      thumbnail: "https://avatars1.githubusercontent.com/u/47616551?s=460&u=f9f81df034252d349d5c631a85cd57ea603beefa&v=4",
      perfil: "",
      name: "Gustavo Scarpim",
      message: "Clonando WathsApp",
      view: true,
      id: "Gustavo Scarpim"
    },
    {
      perfil: "SP",
      thumbnail: "",
      name: "Scarpim Prof",
      message: "Olá, tudo bem?",
      view: false,
      id: "Scarpim Prof"
    },
    {
      perfil: "DG",
      thumbnail: "",
      name: "Diogo Genuino",
      message: "Hahahaha",
      view: true,
      id: "Diogo Genuino"
    },
    {
      perfil: "NT",
      thumbnail: "",
      name: "Natan Teves",
      message: "Opa",
      view: false,
      id: "Natan Teves"
    },
    {
      perfil: "BR",
      thumbnail: "",
      name: "Brasil",
      message: "Pelé",
      view: false,
      id: "Brasil"
    },
    {
      perfil: "RM",
      thumbnail: "",
      name: "Rodrigo Marcelo",
      message: "Eae!",
      view: true,
      id: "Rodrigo Marcelo"
    },
    {
      perfil: "JS",
      thumbnail: "",
      name: "Jacaré Sujo",
      message: "Nham Nham Nham Nham",
      view: true,
      id: "Jacaré Sujo"
    },
    {
      perfil: "CQ",
      thumbnail: "",
      name: "Cachorro Quente",
      message: "Opa",
      view: true,
      id: "Cachorro Quente"
    },
    {
      perfil: "RP",
      thumbnail: "",
      name: "Risadas Palhaço",
      message: "KKKKKKKK",
      view: true,
      id: "Risadas Palhaço"
    },
    {
      perfil: "FM",
      thumbnail: "",
      name: "Fatal Mortal",
      message: "Uhuuuu",
      view: false,
      id: "Fatal Mortal"
    },
    {
      perfil: "GS",
      thumbnail: "",
      name: "Gustavo Scarpim2",
      message: "Clonando WathsApp",
      view: true,
      id: "Gustavo Scarpim2"
    },
    {
      perfil: "SP",
      thumbnail: "",
      name: "Scarpim Prof2",
      message: "Olá, tudo bem?",
      view: false,
      id: "Scarpim Prof2"
    },
    {
      perfil: "DG",
      thumbnail: "",
      name: "Diogo Genuino2",
      message: "Hahahaha",
      view: true,
      id: "Diogo Genuino2"
    },
    {
      perfil: "NT",
      thumbnail: "",
      name: "Natan Teves2",
      message: "Opa",
      view: false,
      id: "Natan Teves2"
    },
    {
      perfil: "BR",
      thumbnail: "",
      name: "Brasil2",
      message: "Pelé",
      view: false,
      id: "Brasil2"
    },
    {
      perfil: "RM",
      thumbnail: "",
      name: "Rodrigo Marcelo2",
      message: "Eae!",
      view: true,
      id: "Rodrigo Marcelo2"
    },
    {
      perfil: "JS",
      thumbnail: "",
      name: "Jacaré Sujo2",
      message: "Nham Nham Nham Nham",
      view: true,
      id: "Jacaré Sujo2"
    },
    {
      perfil: "CQ",
      thumbnail: "",
      name: "Cachorro Quente2",
      message: "Opa",
      view: true,
      id: "Cachorro Quente2"
    },
    {
      perfil: "RP",
      thumbnail: "",
      name: "Risadas Palhaço2",
      message: "KKKKKKKK",
      view: true,
      id: "Risadas Palhaço2"
    },
    {
      perfil: "FM",
      thumbnail: "",
      name: "Fatal Mortal2",
      message: "Uhuuuu",
      view: false,
      id: "Fatal Mortal2"
    },
  ]);

  const [perfilId, setPerfilId] = useState("AAAAAAAAAAAAAA");
  return (
    <S.Container>
      <S.Sidenav>
        <S.Header>
          <S.Perfil>
            <img src="https://avatars1.githubusercontent.com/u/47616551?s=460&u=f9f81df034252d349d5c631a85cd57ea603beefa&v=4" alt="Perfil" />
          </S.Perfil>
          <S.Items>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" width="24" height="24">
                <path fill="#9C9C9C" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" width="24" height="24">
                <path fill="#9C9C9C" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z" />
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" width="24" height="24">
                <path fill="#9C9C9C" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z" />
              </svg>
            </span>
          </S.Items>
        </S.Header>

        <S.ScrollView>
          {contacts.map((item, index) => (
            <Contacts
              thumbnail={item.thumbnail}
              perfil={item.perfil}
              check={item.view ? "#4FC3F7" : "#B7B7B7"}
              name={item.name}
              message={item.message}
              changeMessage={() => setPerfilId(item.id)}
            />
          ))}
        </S.ScrollView>

      </S.Sidenav>
      {contacts.map((item, index) => (
        <>
          {perfilId === item.id &&
            <Contents
              perfil={item.perfil}
              thumbnail={item.thumbnail}
              name={item.name}
              id={item.id}
            />
          }
        </>
      ))}

    </S.Container>
  )
}