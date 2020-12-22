import React from 'react';

import Datepicker from './datepicker'
import SiteSwitcher from './site-switcher'
import Filters from './filters'
import CurrentVisitors from './stats/current-visitors'
import VisitorGraph from './stats/visitor-graph'
import Sources from './stats/sources'
import Pages from './stats/pages'
import Countries from './stats/countries'
import Devices from './stats/devices'
import Conversions from './stats/conversions'
import { withPinnedHeader } from './pinned-header-hoc';

class Realtime extends React.Component {
  renderConversions() {
    if (this.props.site.hasGoals) {
      return (
        <div className="w-full block md:flex items-start justify-between mt-6">
          <Conversions site={this.props.site} query={this.props.query} title="Goal Conversions (last 30 min)" />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="mb-12">
        <div id="stats-container-top"></div>
        <div className={`sticky top-0 bg-gray-50 dark:bg-gray-850 py-3 z-9 ${this.props.stuck ? 'z-10 fullwidth-shadow' : ''}`}>
          <div className="w-full sm:flex justify-between items-center">
            <div className="w-full flex items-center">
              <SiteSwitcher site={this.props.site} loggedIn={this.props.loggedIn} />
            </div>
            <Datepicker site={this.props.site} query={this.props.query} />
          </div>
          <Filters query={this.props.query} history={this.props.history} />
        </div>
        <VisitorGraph site={this.props.site} query={this.props.query} timer={this.props.timer} />
        <div className="w-full block md:flex items-start justify-between">
          <Sources site={this.props.site} query={this.props.query} timer={this.props.timer} />
          <Pages site={this.props.site} query={this.props.query} timer={this.props.timer} />
        </div>
        <div className="w-full block md:flex items-start justify-between">
          <Countries site={this.props.site} query={this.props.query} timer={this.props.timer} />
          <Devices site={this.props.site} query={this.props.query} timer={this.props.timer} />
        </div>

        { this.renderConversions() }
      </div>
    )
  }
}

export default withPinnedHeader(Realtime, 'realtime');
