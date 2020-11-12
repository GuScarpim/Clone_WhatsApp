import React, { useState } from 'react';
import * as S from './styles/card';

import Contacts from './Contacts';
import Contents from './Contents';

import ImageWhatsApp from '../Assets/imageWhats.png'

interface newContacts {
  perfil: string;
  name: string;
  message: string;
  thumbnail: string;
  id: string;
  view: boolean;
  array: {
    message: string,
    direction: string,
    date: string,
  }[]
}

interface newMessage {
  id: string;
  view: boolean,
  text: string,
}


export default function Card() {
  const [messages, setMessages] = useState<newMessage[]>([
    {
      text: "Gustavo Scarpim",
      view: true,
      id: "Gustavo Scarpim",
    },

    {
      text: "Pessoa 1",
      view: true,
      id: "Pessoa 1",
    },

    {
      text: "Pessoa 2",
      view: false,
      id: "Pessoa 2",
    },

    {
      text: "Pessoa 3",
      view: true,
      id: "Pessoa 3",
    },

    {
      text: "Pessoa 4",
      view: true,
      id: "Pessoa 4",
    },

    {
      text: "Pessoa 5",
      view: false,
      id: "Pessoa 5",
    },

    {
      text: "Pessoa 6",
      view: false,
      id: "Pessoa 6",
    },

    {
      text: "Pessoa 7",
      view: false,
      id: "Pessoa 7",
    },

    {
      text: "Pessoa 8",
      view: false,
      id: "Pessoa 8",
    },

    {
      text: "Pessoa 9",
      view: true,
      id: "Pessoa 9",
    },

    {
      text: "Pessoa 10",
      view: false,
      id: "Pessoa 10",
    },

    {
      text: "Pessoa 11",
      view: true,
      id: "Pessoa 11",
    },

    {
      text: "Pessoa 12",
      view: false,
      id: "Pessoa 12",
    },

    {
      text: "Pessoa 13",
      view: true,
      id: "Pessoa 13",
    },

    {
      text: "Pessoa 14",
      view: true,
      id: "Pessoa 14",
    },

    {
      text: "Pessoa 15",
      view: false,
      id: "Pessoa 15",
    },
  ])

  const [contacts, setContacts] = useState<newContacts[]>([
    {
      thumbnail: "https://avatars1.githubusercontent.com/u/47616551?s=460&u=f9f81df034252d349d5c631a85cd57ea603beefa&v=4",
      perfil: "",
      name: "Gustavo Scarpim",
      message: "Mensagem 3 - Gustavo Scarpim",
      view: true,
      id: "Gustavo Scarpim",
      array: [
        { message: "Mensagem 1 - Gustavo Scarpim", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Gustavo Scarpim", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Gustavo Scarpim", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "https://uploads.spiritfanfiction.com/fanfics/historias/201704/coisas-aleatorias-de-pessoas-aleatorias-8603595-070420171245.jpg",
      name: "Pessoa 1",
      message: "Mensagem 3 - Pessoa 1",
      view: false,
      id: "Pessoa 1",
      array: [
        { message: "Mensagem 1 - Pessoa 1", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 1", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 1", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "data:image/jpeg;base64,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",
      name: "Pessoa 2",
      message: "Mensagem 3 - Pessoa 2",
      view: true,
      id: "Pessoa 2",
      array: [
        { message: "Mensagem 1 - Pessoa 2", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 2", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 2", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "https://pbs.twimg.com/profile_images/1252072982492729345/60Joicv2_400x400.jpg",
      name: "Pessoa 3",
      message: "Mensagem 3 - Pessoa 3",
      view: false,
      id: "Pessoa 3",
      array: [
        { message: "Mensagem 1 - Pessoa 3", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 3", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 3", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "data:image/jpeg;base64,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",
      name: "Pessoa 4",
      message: "Mensagem 3 - Pessoa 4",
      view: false,
      id: "Pessoa 4",
      array: [
        { message: "Mensagem 1 - Pessoa 4", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 4", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 4", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "https://pbs.twimg.com/profile_images/1171581534563905537/vNGxxJNt_400x400.jpg",
      name: "Pessoa 5",
      message: "Mensagem 3 - Pessoa 5",
      view: true,
      id: "Pessoa 5",
      array: [
        { message: "Mensagem 1 - Pessoa 5", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 5", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 5", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "https://pbs.twimg.com/profile_images/1295817653727223809/Z8m0LkIc.jpg",
      name: "Pessoa 6",
      message: "Mensagem 3 - Pessoa 6",
      view: true,
      id: "Pessoa 6",
      array: [
        { message: "Mensagem 1 - Pessoa 6", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 6", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 6", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "https://i.pinimg.com/736x/db/01/c1/db01c137b14ea7a89b0dda5be9f23832.jpg",
      name: "Pessoa 7",
      message: "Mensagem 3 - Pessoa 7",
      view: true,
      id: "Pessoa 7",
      array: [
        { message: "Mensagem 1 - Pessoa 7", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 7", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 7", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdcxhDdFI2R6cEXX2F7QvmhunY84_OfiQ_MQ&usqp=CAU",
      name: "Pessoa 8",
      message: "Mensagem 3 - Pessoa 8",
      view: true,
      id: "Pessoa 8",
      array: [
        { message: "Mensagem 1 - Pessoa 8", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 8", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 8", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUysEXH1VhPTsop0bSj1JgAlXlRdJWyO6Bxg&usqp=CAU",
      name: "Pessoa 9",
      message: "Mensagem 3 - Pessoa 9",
      view: false,
      id: "Pessoa 9",
      array: [
        { message: "Mensagem 1 - Pessoa 9", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 9", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 9", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "https://pbs.twimg.com/media/D3zjb1BXsAAWrAo.jpg",
      name: "Pessoa 10",
      message: "Mensagem 3 - Pessoa 10",
      view: true,
      id: "Pessoa 10",
      array: [
        { message: "Mensagem 1 - Pessoa 10", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 10", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 10", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZbGsAr5S88dsYC3jNZHmaV7Deb9a5Wl449g&usqp=CAU",
      name: "Pessoa 11",
      message: "Mensagem 3 - Pessoa 11",
      view: false,
      id: "Pessoa 11",
      array: [
        { message: "Mensagem 1 - Pessoa 11", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 11", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 11", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "data:image/jpeg;base64,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",
      name: "Pessoa 12",
      message: "Mensagem 3 - Pessoa 12",
      view: true,
      id: "Pessoa 12",
      array: [
        { message: "Mensagem 1 - Pessoa 12", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 12", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 12", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "https://i.pinimg.com/564x/23/9c/05/239c05c5dcbf173b8642432fe8e460f1.jpg",
      name: "Pessoa 13",
      message: "Mensagem 3 - Pessoa 13",
      view: false,
      id: "Pessoa 13",
      array: [
        { message: "Mensagem 1 - Pessoa 13", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 13", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 13", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "data:image/jpeg;base64,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",
      name: "Pessoa 14",
      message: "Mensagem 3 - Pessoa 14",
      view: false,
      id: "Pessoa 14",
      array: [
        { message: "Mensagem 1 - Pessoa 14", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 14", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 14", direction: "right", date: "10:20" },
      ]
    },

    {
      perfil: "",
      thumbnail: "data:image/jpeg;base64,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",
      name: "Pessoa 15",
      message: "Mensagem 3 - Pessoa 15",
      view: true,
      id: "Pessoa 15",
      array: [
        { message: "Mensagem 1 - Pessoa 15", direction: "right", date: "20:22" },
        { message: "Mensagem 2 - Pessoa 15", direction: "left", date: "14:20" },
        { message: "Mensagem 3 - Pessoa 15", direction: "right", date: "10:20" },
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
            />
          }
        </>
      ))}

    </S.Container>
  )
}
// "/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg"