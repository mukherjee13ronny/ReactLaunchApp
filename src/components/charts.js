/** react-vis library is used for Bar Chart. react-vis React visualization library created by Uber. */
import React from 'react';
import {
    XYPlot,
    VerticalBarSeries,
    LabelSeries
} from 'react-vis';

class BarChart extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    componentWillReceiveProps(nextProps) {
        let data = nextProps.countryCount
        this.setState({
            data: [data]
        });
    }

    render() {
        const chartWidth = 400;
        const chartHeight = 200;
        const chartDomain = [0, 5];
        return (
            <React.Fragment>
                {this.state.data && this.state.data.length>0 ?
                <XYPlot 
                xType="ordinal" 
                width={chartWidth} 
                height={chartHeight} 
                yDomain={chartDomain}
              >
                 <VerticalBarSeries
                     data={this.state.data[0]}
                 />
                 <LabelSeries
                     data={this.state.data[0] && this.state.data.length>0 ?
                         this.state.data[0].map(obj => {
                         return { ...obj, label: (obj.x.toString()).concat("/"+obj.y.toString()) }
                     }):[]}
                     labelAnchorX="middle"
                     labelAnchorY="text-after-edge"
                 />
             </XYPlot>
                :null}
            
            </React.Fragment>
        );
    }
}
export default BarChart;