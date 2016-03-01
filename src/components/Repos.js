import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(e) {
    e.preventDefault()
    const userName = e.target.elements[0].value;
    const repo = e.target.elements[1].value;
    const path= `/repos/${userName}/${repo}`;
    this.context.router.push(path);
  },

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><Link to="/repos/rackt/react-router">React Router</Link></li>
          <li><Link to="/repos/facebook/react">React</Link></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> /{' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});
