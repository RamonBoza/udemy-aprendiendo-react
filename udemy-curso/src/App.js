import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Box extends Component {
  render() {
    return (
        <div style={{ border: '1px solid #000', margin: 5, padding: 5}}>
          {this.props.children}
        </div>
    )
  }
}

class Article extends Component {
    static propTypes = {
        author: PropTypes.string.isRequired
    }

  render() {

    const { author, children, date, title } = this.props

    return (
        <section>
          <h2>{title}</h2>
          {author && <p><em>Escrito por {author}</em></p>}
          <Box>{date}</Box>
          <article>
            {children}
          </article>
        </section>
    )
  }
}


class App extends Component {
  render() {
    return (
        <div className="App">
          <Article
              author='Alguien'
              date={new Date().toLocaleDateString()}
              title='Artículo sobre la prop children'
          >
            <p>El contenido que envolvemos dentro del component Article será enviado</p>
            <strong>Y mantiene las etiquetas que hayáis añadido dentro</strong>
          </Article>
        </div>
    )
  }
}

export default App;