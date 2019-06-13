import React, { Component } from 'react'

/**
 * CLASS ARTICLE
 */
// class Article extends Component {
//     render() {
//         return (
//             <section>
//                 <h2>{this.props.title}</h2>
//                 <p><em>Escrito por {this.props.author}</em></p>
//                 <date>{this.props.date}</date>
//                 <article>
//                     {this.props.children}
//                 </article>
//             </section>
//         )
//     }
// }

/**
 * Same object but pure functional (as no need state just render this is more effective)
 * @param props
 * @returns {*}
 * @constructor
 */
function Article (props) {
    return (
        <section>
            <h2>{props.title}</h2>
            <p><em>Escrito por {props.author}</em></p>
            <date>{props.date}</date>
            <article>
                {props.children}
            </article>
        </section>
    )
}


/**
 * CLASS BUTTON
 */
// class Button extends Component {
//     render() {
//         return (
//             <button style={{ borderColor: this.props.borderColor, display: 'block'}}>
//                 {this.props.label}
//             </button>
//         )
//     }
// }

/**
 * Same component but stateless as a constant type
 * @param borderColor
 * @param label
 * @returns {*}
 * @constructor
 */
const Button = ({ borderColor, label }) => (
    <button style={{ borderColor, display: 'block'}}>
        {label}
    </button>
)