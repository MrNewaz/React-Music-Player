import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Jazz Cabbage",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      artist: "Ian Ewing, Strehlow",
      id: uuidv4(),
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
      active: true,
    },
    {
      name: "Lagoons",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      artist: "Strehlow, Chris Mazuera",
      id: uuidv4(),
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8266",
      active: false,
    },
    {
      name: "Deyale Deyale",
      cover: "https://m.media-amazon.com/images/I/81OAokRhjPL._SS500_.jpg",

      artist: "Minar",
      id: uuidv4(),
      color: ["#801B21", "#F6E89B"],
      audio: "https://sumirbd.mobi/files/download/id/70272",
      active: false,
    },
  ];
}

export default chillHop;
