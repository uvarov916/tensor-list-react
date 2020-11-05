import logo from './logo.svg';
import './App.css';
import React from 'react';

function Message(props) {
  return (
    <div className="item">
      <div className="photo">
        <img
          src={props.message.person.photo}
        />
      </div>
      <div className="message">
        <div className="info">
          <a href="#" className="name">{props.message.person.name}</a>
          <div
            className="date"
            title="Отправлено 03 ноя 2020 16:49, прочитано 03 ноя 2020 16:49"
          >
            24 май 21:43
						</div>
        </div>
        <div className="text">
          {props.message.text}
        </div>
      </div>
    </div>
  );
}

const defaultPhoto = 'data:image/webp;base64,UklGRmoBAABXRUJQVlA4IF4BAACwBgCdASoYABgAPpE8mEelo6KhMAgAsBIJagC22cgfsBlgBNYNjWmADm228BB0k8SoilWCnmyUM+BxUjEtAAD++qjuBCCpzUumTA4f32ek/FhEb1HfXneijeO5rfEOQz1Aa+ffefCHTj59v6hf7Bf/iJO5oJvz1AUwmsn3JD3fRzSzKsetNGddsXCzXOMljAJ7WaYS1ahHe3rVm/iw5bRMDBX3lf1At5xw5OcvxW9Ekr6f/g3u3koTv+Gv/UZ1/hjmJ16M3P6GPLS3/+rn4JwVmJp+mksqDf815lWJnlIAEz/stWzFOZuOq+hsMj5RMprrWAt/SfZNvgUTOVJ3A0evOTlCX0zCET5ayYJ47I8JUuny0BR6H77cbnqj0B1+X8cB6m/l9nZpNd9seNcKTvqMJWXTBKVitqKPklNmLskxApVv4rZz1MxtGObHfK3/vRti3h9kG/fW3/28uLgAAA==';


const people = [
  {
    name: 'Баева Татьяна',
    photo: 'data:image/webp;base64,UklGRmoBAABXRUJQVlA4IF4BAACwBgCdASoYABgAPpE8mEelo6KhMAgAsBIJagC22cgfsBlgBNYNjWmADm228BB0k8SoilWCnmyUM+BxUjEtAAD++qjuBCCpzUumTA4f32ek/FhEb1HfXneijeO5rfEOQz1Aa+ffefCHTj59v6hf7Bf/iJO5oJvz1AUwmsn3JD3fRzSzKsetNGddsXCzXOMljAJ7WaYS1ahHe3rVm/iw5bRMDBX3lf1At5xw5OcvxW9Ekr6f/g3u3koTv+Gv/UZ1/hjmJ16M3P6GPLS3/+rn4JwVmJp+mksqDf815lWJnlIAEz/stWzFOZuOq+hsMj5RMprrWAt/SfZNvgUTOVJ3A0evOTlCX0zCET5ayYJ47I8JUuny0BR6H77cbnqj0B1+X8cB6m/l9nZpNd9seNcKTvqMJWXTBKVitqKPklNmLskxApVv4rZz1MxtGObHfK3/vRti3h9kG/fW3/28uLgAAA=='
  },
  {
    name: 'Малютин Вячеслав',
    photo: 'data:image/webp;base64,UklGRmIBAABXRUJQVlA4IFYBAACwBgCdASoYABgAPpFCm0olo6IhqAgAsBIJbAC24aAlgDeUyVVeQz6MC+3Os9zpAZOHvJEgTRSG+f1+OdXEAAD++W6b+FWrsl4q9ZFFohZp9U4IwZ0xi57K+iQtpjdp3Ul4mDfG1usT/gL0clsQnBX1Hbgs1bnqMXW8mo2mc9I89rp95PsRPf62tjc11haujyBxHR3VhZACWpMGlfP9ljopa++7niLvhtfIh9S/O+B37TLCtDBfFZoWbO/tBjfKjW1SbvfdMQMj0RZ7GNDBPuz6MM+iGSxX+BbZKlhqqPqqPqfsw3t8L55oKK27WXq2/7xRWVldVucl6r+/k/3DY/6JK2+b8Yp64PUNm5Ty+14/ZiR960zs8PoqMaRBtnU16tWu6+aoek/03vZhuse1CK9zGjjvzeOf/v5GGDv/EHW/XHzRo95mGXv2f8Cx19uoGY2XAiGoAAA='
  },
  {
    name: 'Щуров Илья',
    photo: 'data:image/webp;base64,UklGRjABAABXRUJQVlA4ICQBAAAwBgCdASoYABgAPo02k0elIqGhMAwAoBGJYgDA3ywTkn7JjA2MVrHBGqIP1MB+2dWF6+1oWHYUYgwAAP76Fag4oK1tsVijOe47Q56xmXogxEVNPKLBj3xva/pv53U+Ww05g+fWKnP7D3Var2QRTuP0eCHvT334NHWTbpLyZ/HzhgxfdI6vNLI0eXyADLTkjXdX8t3uZq/S82K3NvwYo+bZ7Zo2UlcF9FqwEX2zQVWvR/QLInJ9urEMscH+xutr8fnPWWfKq8GevmMLi8mWFTJtHT1J4OqlFD+HPENOR5suSX2deXy9c4eSDtCOP5jP82E6mszl4fpWtKud9pdgEHS3f6yGNT8Z5Zno8/eMadQP7tUrza6n29SVZsgQ4UFNmu6I0gAA'
  },
  {
    name: 'Елифантьев Олег',
    photo: 'data:image/webp;base64,UklGRi4BAABXRUJQVlA4ICIBAAAwBgCdASoYABgAPpE8nEkloyMhKAqosBIJZAC7IICj0Pi2H++2gUDk3EgdKbSnGquRwGNhhkpsRMGgAP75dMXtgoV1sWTrlUNfjpMzZKqk0/HYfLQo0LVcvMVgF5RVP0gi8oomDvVard+fbUawwrUNg8mTfzXxE4ZfdEe19Gua0CLJicDvH3b6Yhgzugzf0JsSsQLpgWmTMSl7cOvwfWjerbgHQci0n7lXe6//b17zzpSXwZ20yUxf7b/gK1XCas6rJ+Q8xVPHVP6tfDlNznJHXvzgc3SiIegLW8r4o62ibR2Lp7FozMsb4w/ZOveWlTM6bwhJJRmz8A3XfByMg4jL1fqfWQNmxh7/sL74jVNIXRU1KkQDGuC7zS/fZNifX0AAAA=='
  }
];

const messages = [
  'Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений.',
  'Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу.',
  'Равным образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.',
  'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений.',
  'С другой стороны рамки и место обучения кадров способствует подготовки и реализации модели развития. Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия.',
  'Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании новых предложений.',
  'Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.',
  'Tation delenit percipitur at vix. Ceteros assentior omittantur cum ad.',
  'Oratio accumsan et mea.',
  'Sea esse deserunt ei, no diam ubique euripidis has.',
  'Lorem ipsum dolor sit amet, an eos lorem ancillae expetenda, vim et utamur quaestio. Tation delenit percipitur at vix. Oratio accumsan et mea.\nSolum vituperata definitiones te vis, vis alia falli doming ea. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui.',
];

function generateMessages(startId, count) {
  return Array.from({length: count}, (_, i) => {
    let key = startId + i;
    return {
      key: key,
      text: messages[key % messages.length],
      person: people[key % people.length],
    }
  });
}

class App extends React.Component {

  constructor() {
    super();

    this.scrollContainer = React.createRef();
    this.intersectionObserver = React.createRef();

    this.state = {
      messages: generateMessages(0, 20)
    }
  }

  loadMessages() {
    this.setState(state => {
      const messages = [...state.messages, ...generateMessages(state.messages.length, 20)];
 
      return {
        messages
      };
    });
  }

  componentDidMount() {
    const ioOptions = {
      root: this.scrollContainer.current,
      rootMargin: '0px',
      threshold: 1.0
    }

    let observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        this.loadMessages();
      }
    }, ioOptions);

    observer.observe(this.intersectionObserver.current);
  }

  render() {
    return (
      <div className="app">
        <div className="container" ref={this.scrollContainer}>
          {this.state.messages.map((message) => {
            return <Message message={message} key={message.key} />
          })}
          <div className="intersectionObserver" ref={this.intersectionObserver} />
        </div>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
