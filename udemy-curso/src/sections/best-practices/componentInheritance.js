import React, { Component } from 'react';


/**
 *
 * WITH INHERITANCE
 *
 */

class Button extends Component {
    constructor(props) {
        super(props)
        this.borderColor = '#09f'
    }

    render() {
        return (
            <button style={{borderColor: this.borderColor, display: 'block'}}>
                {this.props.label}
            </button>
        )
    }
}

class ButtonDanger extends Button {
    constructor(props) {
        super(props)
        this.borderColor = 'red'
    }
}

class ButtonWithLegend extends Button {
    render() {
        return (
            <div>
                {super.render()}
                <small>{this.props.legend}</small>
            </div>
        )
    }
}


/**
 *
 * WITH COMPOSITION
 *
 */

class ButtonWithComposition extends Component {
    render() {
        return (
            <button style={{borderColor: this.props.borderColor, display: 'block'}}>
                {this.props.label}
            </button>
        )
    }
}

ButtonWithComposition.defaultProps = {
    borderColor: '#09f'
}

class ButtonDangerWithComposition extends Component {
    render() {
        return <ButtonWithComposition borderColor='red' label={this.props.label} />
    }
}

class ButtonWithLegendWithComposition extends Component {
    render() {
        return (
            <div>
                <ButtonWithComposition label={this.props.label} borderColor={this.props.borderColor} />
                <small>{this.props.legend}</small>
            </div>
        )
    }
}




class EjemploComposicionVsHerencia extends Component {
    render() {
        return (
            <div>
                <h4>Composicion vs herencia</h4>
                <ButtonWithComposition label='Click aqui'/>
                <br />
                <ButtonDangerWithComposition label='Cuidado!!' />
                <br />
                <ButtonWithLegendWithComposition
                    label='Boton con explicacion'
                    legend='Clica el botón para hacer algo' />
            </div>
        )
    }
}
export default EjemploComposicionVsHerencia