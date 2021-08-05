import liveChatImage from './live-chat-photo.jpg';
import liveCStreamImage from './live-stream.jpg';

const projects = [
  {
    // liveChat: {
      title: "Live Chat App",
      descriptionEnglish: (
        <div className="projects__text">
          <p>Live chat application allows to send instant live messages between users.</p>
          <p>This project was develpoed with React.js on the front end and Node.js on the back end. Using Socket.io, i was able to creat realtime, bi-directional communication between web clients and servers.</p>
        </div>
      ),
      descriptionSpanish: (
        <div className="projects__text">
          <p>La aplicación de chat en vivo permite enviar mensajes instantáneos en vivo entre usuarios.</p>
          <p>Este proyecto se desarrolló con React.js en el front-end y Node.js en el back-end. Con Socket.io, pude crear comunicación bidireccional en tiempo real entre clientes web y servidores.</p>
        </div>
      ),
      app: "https://youthful-spence-664ce8.netlify.app/",
      github: "https://github.com/yoelnoy/reactjs-live-chat",
      img: liveChatImage
      
    },
    {
    // liveStream: {
      title: "Live Stream App",
      descriptionEnglish: (
        <div className="projects__text">
          <p>Live Stream mimics our favorite video streaming platform and it's UI.</p>
          <p>This project was develpoed with React.js on the front end, incorporating Stripe Payments, Redux, React Router, Axios and Firebase authentication.</p>
        </div>
      ),
      descriptionSpanish: (
        <div className="projects__text">
          <p>Live Stream imita nuestro plataforma favorito de streaming y su Interfaz.</p>
          <p>Este proyecto se desarrolló con React.js incorporando Stripe Payments, Redux, React Router, Axios y autenticación de Firebase.</p>
        </div>
      ),
      app: "https://live-stream-app-52dba.web.app/",
      github: "https://github.com/yoelnoy/reactjs-live-stream",
      img: liveCStreamImage
  }
]




export default projects;