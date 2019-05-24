import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      title: 'inicial',
      content: 'sem conteudo'
    };
  }

  render() {
    return (
      <>
        <section>
          <div>
            <h1>{this.state.title}</h1>
            <p>{this.state.content}</p>
          </div>
        </section>
        {this.state.articles}
      </>
    );
  }

  componentDidMount() {
    const dados = fetch(
      'https://newsapi.org/v2/top-headlines?country=br&apiKey=9b24437dec764b1a9c376460a3a52213'
    );

    dados
      .then(response => {
        return response.json();
      })
      .then(result => {
        if (result.status == 'ok') {
          const articles = result.articles.map(item => {
            return (
              <section key={Math.random()}>
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.content}</p>
                </div>
              </section>
            );
          });

          this.setState({
            articles
          });
        } else {
          this.setState({
            title: 'erro '
          });
        }
      })
      .catch(e => {
        this.setState({
          title: 'deu ruim na conexão'
        });
      });

    if (!window.navigator.onLine) {
      this.setState({
        title: 'vc esta offline'
      });
    }
  }
}
