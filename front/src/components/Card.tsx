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
  array: {
    message: string,
    direction: string
  }[]
}

interface newMessage {
  id: string;
  direction: string,
  view: boolean,
  text: string,
  date: string,
}


export default function Card() {
  const [messages, setMessages] = useState<newMessage[]>([
    {
      text: "",
      date: "12:25",
      view: true,
      direction: "right",
      id: "Gustavo Scarpim",
    },

    {
      text: "Scarpim Prof",
      date: "Olá, tudo bem12:25",
      view: true,
      direction: "right",
      id: "Scarpim Prof",
    },

    {
      text: "Diogo Genuino",
      date: "12:25",
      view: false,
      direction: "right",
      id: "Diogo Genuino",
    },

    {
      text: "Natan Teves",
      date: "12:25",
      view: true,
      direction: "right",
      id: "Natan Teves",
    },

    {
      text: "Brasil",
      date: "12:25",
      view: true,
      direction: "right",
      id: "Brasil",
    },

    {
      text: "Rodrigo Marcelo",
      date: "Eae12:25",
      view: false,
      direction: "right",
      id: "Rodrigo Marcelo",
    },

    {
      text: "Jacaré Sujo",
      date: "Nham Nham Nham 12:25",
      view: false,
      direction: "right",
      id: "Jacaré Sujo",
    },

    {
      text: "Cachorro Quente",
      date: "12:25",
      view: false,
      direction: "right",
      id: "Cachorro Quente",
    },

    {
      text: "Risadas Palhaço",
      date: "12:25",
      view: false,
      direction: "right",
      id: "Risadas Palhaço",
    },

    {
      text: "Fatal Mortal",
      date: "12:25",
      view: true,
      direction: "right",
      id: "Fatal Mortal",
    },

    {
      text: "Gustavo Scarpim2",
      date: "Clonando 12:25",
      view: false,
      direction: "right",
      id: "Gustavo Scarpim2",
    },

    {
      text: "Scarpim Prof2",
      date: "Olá, tudo bem12:25",
      view: true,
      direction: "right",
      id: "Scarpim Prof2",
    },

    {
      text: "Diogo Genuino2",
      date: "12:25",
      view: false,
      direction: "right",
      id: "Diogo Genuino2",
    },

    {
      text: "Natan Teves2",
      date: "12:25",
      view: true,
      direction: "right",
      id: "Natan Teves2",
    },

    {
      text: "Brasil2",
      date: "12:25",
      view: true,
      direction: "right",
      id: "Brasil2",
    },

    {
      text: "Rodrigo Marcelo2",
      date: "Eae12:25",
      view: false,
      direction: "right",
      id: "Rodrigo Marcelo2",
    },

    {
      text: "Jacaré Sujo2",
      date: "Nham Nham Nham 12:25",
      view: false,
      direction: "right",
      id: "Jacaré Sujo2",
    },

    {
      text: "Cachorro Quente2",
      date: "12:25",
      view: false,
      direction: "right",
      id: "Cachorro Quente2",
    },

    {
      text: "Risadas Palhaço2",
      date: "12:25",
      view: false,
      direction: "right",
      id: "Risadas Palhaço2",
    },

    {
      text: "Fatal Mortal2",
      date: "12:25",
      view: true,
      direction: "right",
      id: "Fatal Mortal2",
    },
  ])

  const [contacts, setContacts] = useState<newContacts[]>([
    {
      thumbnail: "https://avatars1.githubusercontent.com/u/47616551?s=460&u=f9f81df034252d349d5c631a85cd57ea603beefa&v=4",
      perfil: "",
      name: "Gustavo Scarpim",
      message: "Clonando WathsApp",
      view: true,
      id: "Gustavo Scarpim",
      array: [
        { message: "Mensagem 1 do Gustavo Scarpim", direction: "right" },
        { message: "Mensagem 2 do Gustavo Scarpim", direction: "left" },
        { message: "Mensagem 3 do Gustavo Scarpim", direction: "right" },
      ]
    },

    {
      perfil: "SP",
      thumbnail: "",
      name: "Scarpim Prof",
      message: "Olá, tudo bem?",
      view: false,
      id: "Scarpim Prof",
      array: [
        { message: "Mensagem 1 do Scarpim Prof", direction: "right" },
        { message: "Mensagem 2 do Scarpim Prof", direction: "left" },
        { message: "Mensagem 3 do Scarpim Prof", direction: "right" },
      ]
    },

    {
      perfil: "DG",
      thumbnail: "",
      name: "Diogo Genuino",
      message: "Hahahaha",
      view: true,
      id: "Diogo Genuino",
      array: [
        { message: "Mensagem 1 do Diogo Genuino", direction: "right" },
        { message: "Mensagem 2 do Diogo Genuino", direction: "left" },
        { message: "Mensagem 3 do Diogo Genuino", direction: "right" },
      ]
    },

    {
      perfil: "NT",
      thumbnail: "",
      name: "Natan Teves",
      message: "Opa",
      view: false,
      id: "Natan Teves",
      array: [
        { message: "Mensagem 1 do Natan Teves", direction: "right" },
        { message: "Mensagem 2 do Natan Teves", direction: "left" },
        { message: "Mensagem 3 do Natan Teves", direction: "right" },
      ]
    },

    {
      perfil: "BR",
      thumbnail: "",
      name: "Brasil",
      message: "Pelé",
      view: false,
      id: "Brasil",
      array: [
        { message: "Mensagem 1 do Brasil", direction: "right" },
        { message: "Mensagem 2 do Brasil", direction: "left" },
        { message: "Mensagem 3 do Brasil", direction: "right" },
      ]
    },

    {
      perfil: "RM",
      thumbnail: "",
      name: "Rodrigo Marcelo",
      message: "Eae!",
      view: true,
      id: "Rodrigo Marcelo",
      array: [
        { message: "Mensagem 1 do Rodrigo Marcelo", direction: "right" },
        { message: "Mensagem 2 do Rodrigo Marcelo", direction: "left" },
        { message: "Mensagem 3 do Rodrigo Marcelo", direction: "right" },
      ]
    },

    {
      perfil: "JS",
      thumbnail: "",
      name: "Jacaré Sujo",
      message: "Nham Nham Nham Nham",
      view: true,
      id: "Jacaré Sujo",
      array: [
        { message: "Mensagem 1 do Jacaré Sujo", direction: "right" },
        { message: "Mensagem 2 do Jacaré Sujo", direction: "left" },
        { message: "Mensagem 3 do Jacaré Sujo", direction: "right" },
      ]
    },

    {
      perfil: "CQ",
      thumbnail: "",
      name: "Cachorro Quente",
      message: "Opa",
      view: true,
      id: "Cachorro Quente",
      array: [
        { message: "Mensagem 1 do Cachorro Quente", direction: "right" },
        { message: "Mensagem 2 do Cachorro Quente", direction: "left" },
        { message: "Mensagem 3 do Cachorro Quente", direction: "right" },
      ]
    },

    {
      perfil: "RP",
      thumbnail: "",
      name: "Risadas Palhaço",
      message: "KKKKKKKK",
      view: true,
      id: "Risadas Palhaço",
      array: [
        { message: "Mensagem 1 do Risadas Palhaço", direction: "right" },
        { message: "Mensagem 2 do Risadas Palhaço", direction: "left" },
        { message: "Mensagem 3 do Risadas Palhaço", direction: "right" },
      ]
    },

    {
      perfil: "FM",
      thumbnail: "",
      name: "Fatal Mortal",
      message: "Uhuuuu",
      view: false,
      id: "Fatal Mortal",
      array: [
        { message: "Mensagem 1 do Fatal Mortal", direction: "right" },
        { message: "Mensagem 2 do Fatal Mortal", direction: "left" },
        { message: "Mensagem 3 do Fatal Mortal", direction: "right" },
      ]
    },

    {
      perfil: "GS",
      thumbnail: "",
      name: "Gustavo Scarpim2",
      message: "Clonando WathsApp",
      view: true,
      id: "Gustavo Scarpim2",
      array: [
        { message: "Mensagem 1 do Gustavo Scarpim2", direction: "right" },
        { message: "Mensagem 2 do Gustavo Scarpim2", direction: "left" },
        { message: "Mensagem 3 do Gustavo Scarpim2", direction: "right" },
      ]
    },

    {
      perfil: "SP",
      thumbnail: "",
      name: "Scarpim Prof2",
      message: "Olá, tudo bem?",
      view: false,
      id: "Scarpim Prof2",
      array: [
        { message: "Mensagem 1 do Scarpim Prof2", direction: "right" },
        { message: "Mensagem 2 do Scarpim Prof2", direction: "left" },
        { message: "Mensagem 3 do Scarpim Prof2", direction: "right" },
      ]
    },

    {
      perfil: "DG",
      thumbnail: "",
      name: "Diogo Genuino2",
      message: "Hahahaha",
      view: true,
      id: "Diogo Genuino2",
      array: [
        { message: "Mensagem 1 do Diogo Genuino2", direction: "right" },
        { message: "Mensagem 2 do Diogo Genuino2", direction: "left" },
        { message: "Mensagem 3 do Diogo Genuino2", direction: "right" },
      ]
    },

    {
      perfil: "NT",
      thumbnail: "",
      name: "Natan Teves2",
      message: "Opa",
      view: false,
      id: "Natan Teves2",
      array: [
        { message: "Mensagem 1 do Natan Teves2", direction: "right" },
        { message: "Mensagem 2 do Natan Teves2", direction: "left" },
        { message: "Mensagem 3 do Natan Teves2", direction: "right" },
      ]
    },

    {
      perfil: "BR",
      thumbnail: "",
      name: "Brasil2",
      message: "Pelé",
      view: false,
      id: "Brasil2",
      array: [
        { message: "Mensagem 1 do Brasil2", direction: "right" },
        { message: "Mensagem 2 do Brasil2", direction: "left" },
        { message: "Mensagem 3 do Brasil2", direction: "right" },
      ]
    },

    {
      perfil: "RM",
      thumbnail: "",
      name: "Rodrigo Marcelo2",
      message: "Eae!",
      view: true,
      id: "Rodrigo Marcelo2",
      array: [
        { message: "Mensagem 1 do Rodrigo Marcelo2", direction: "right" },
        { message: "Mensagem 2 do Rodrigo Marcelo2", direction: "left" },
        { message: "Mensagem 3 do Rodrigo Marcelo2", direction: "right" },
      ]
    },

    {
      perfil: "JS",
      thumbnail: "",
      name: "Jacaré Sujo2",
      message: "Nham Nham Nham Nham",
      view: true,
      id: "Jacaré Sujo2",
      array: [
        { message: "Mensagem 1 do Jacaré Sujo2", direction: "right" },
        { message: "Mensagem 2 do Jacaré Sujo2", direction: "left" },
        { message: "Mensagem 3 do Jacaré Sujo2", direction: "right" },
      ]
    },

    {
      perfil: "CQ",
      thumbnail: "",
      name: "Cachorro Quente2",
      message: "Opa",
      view: true,
      id: "Cachorro Quente2",
      array: [
        { message: "Mensagem 1 do Cachorro Quente2", direction: "right" },
        { message: "Mensagem 2 do Cachorro Quente2", direction: "left" },
        { message: "Mensagem 3 do Cachorro Quente2", direction: "right" },
      ]
    },

    {
      perfil: "RP",
      thumbnail: "",
      name: "Risadas Palhaço2",
      message: "KKKKKKKK",
      view: true,
      id: "Risadas Palhaço2",
      array: [
        { message: "Mensagem 1 do Risadas Palhaço2", direction: "right" },
        { message: "Mensagem 2 do Risadas Palhaço2", direction: "left" },
        { message: "Mensagem 3 do Risadas Palhaço2", direction: "right" },
      ]
    },

    {
      perfil: "FM",
      thumbnail: "",
      name: "Fatal Mortal2",
      message: "Uhuuuu",
      view: false,
      id: "Fatal Mortal2",
      array: [
        { message: "Mensagem 1 do Fatal Mortal2", direction: "right" },
        { message: "Mensagem 2 do Fatal Mortal2", direction: "left" },
        { message: "Mensagem 3 do Fatal Mortal2", direction: "right" },
      ]
    },

  ]);

  const [perfilId, setPerfilId] = useState("");
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
              array={item.array}
              view={true}
              date={""}
            />
          }
        </>
      ))}

    </S.Container>
  )
}
// "/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg"