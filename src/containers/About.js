import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import JobItem from '../components/JobItem';

class About extends Component {
  static pageType = 'about_page';

  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    this.populateJobs();
  }

  fetchById(id) {
    if (this.props.api) {
      return this.props.api.getByID(id);
    }
  }

  populateJobs() {
    this.props.doc.data.job_list.map(({ job }, index) => {
      this.fetchById(job.id).then(({ data }) => {
        this.setState({
          jobs: [...this.state.jobs, { id: job.id, data }],
        });
      });
    });
  }

  render() {
    return (
      <div>
        <div className="hero-section">
          <h1 className="title">
            {RichText.asText(this.props.doc.data.hero_title)}
          </h1>
          <p className="subtext">{RichText.asText(this.props.doc.data.bio)}</p>
        </div>
        <div className="section-block">
          <h2 className="title">
            {RichText.asText(this.props.doc.data.current_info_title)}
          </h2>
          <p className="body">
            {RichText.asText(this.props.doc.data.current_info)}
          </p>
          <div className="btn-group">
            <a href="mailto:wang.jo@husky.neu.edu">
              <button className="btn primary">Get in touch</button>
            </a>
          </div>
        </div>
        <div className="section-block">
          <h2 className="title">
            {RichText.asText(this.props.doc.data.jobs_title)}
          </h2>
          <div className="job-listings">
            {this.state.jobs.map((job, index) => (
              <JobItem key={job.id} data={job.data} />
            ))}
          </div>
        </div>
        <div className="sock">
          <div className="btn-group">
            <a href="/misc/Joseph_Wang_Resume.pdf" target="_blank">
              <button className="btn primary">View my resume</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PrismicPageApi(About);
