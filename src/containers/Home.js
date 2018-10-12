import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import WorkItem from '../components/WorkItem';

class Home extends Component {
  static pageType = 'homepage';

  constructor(props) {
    super(props);
    this.state = {
      work: [],
    };
  }

  componentDidMount() {
    this.populateWork();
  }

  fetchById(id) {
    if (this.props.api) {
      return this.props.api.getByID(id);
    }
  }

  populateWork() {
    this.props.doc.data.portfolio_items.map(({ portfolio_piece: p }, index) => {
      this.fetchById(p.id).then(({ data }) => {
        this.setState({
          work: [...this.state.work, { id: p.id, data }],
        });
      });
    });
  }

  render() {
    return (
      <div>
        <div className="hero-section">
          <h1 className="title">
            {RichText.asText(this.props.doc.data.hero_text)}
          </h1>
          <p className="subtext">
            {RichText.asText(this.props.doc.data.hero_subtext)}
          </p>
        </div>
        <div className="section-block">
          <h2 className="title">
            {RichText.asText(this.props.doc.data.section_1_title)}
          </h2>
          <p className="body">
            {RichText.asText(this.props.doc.data.section_1_body)}
          </p>
          <div className="btn-group">
            <a href="/misc/Joseph_Wang_Resume.pdf" target="_blank">
              <button className="btn primary">View resume</button>
            </a>
            <a href="/about">
              <button className="btn secondary">Learn more</button>
            </a>
          </div>
        </div>
        <div className="section-block">
          <h2 className="title">
            {RichText.asText(this.props.doc.data.portfolio_preview_title)}
          </h2>
          <div className="work-grid home--work-grid">
            {this.state.work.map((p, index) => (
              <WorkItem key={p.id} featured={index < 2} data={p.data} />
            ))}
          </div>
        </div>
        <div className="sock">
          <div className="btn-group">
            <a href="/work">
              <button className="btn primary">See all work</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PrismicPageApi(Home);