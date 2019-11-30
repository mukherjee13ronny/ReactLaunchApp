/**Root Component for Search. Connected to store and passing data to the child as props */

import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import Table from '../components/table';
import BarChart from '../components/charts';
import { launchAction } from '../store/actions/launchAction';

class searchParameters extends React.Component {
    constructor() {
        super();
        this.state = {
                startDate: "",
                endDate: "",

            dataSet: [],
            countryCount: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    search = async () => {
        const queryParams = (this.state.startDate+"/").concat(this.state.endDate);
        this.props.launchAction(queryParams);
    }

    componentWillReceiveProps(nextProps) {
        let countryObj = {};
        let countryArray = [];
        /**Getting Count for the country and making Array of Object out of that */
        nextProps.searchResultsVo.forEach(function (i) {
            if (countryObj[i.location.countryCode] == null) {
                countryObj[i.location.countryCode] = 0;
            }
            countryObj[i.location.countryCode] += 1;
        });
        console.log(countryObj)

        for (let key in countryObj) {
            countryArray.push({
                x: key,
                y: countryObj[key]
            })
        };
        console.log(countryArray)
        this.setState({
            dataSet: nextProps.searchResultsVo,
            countryCount: countryArray
        })
    }


    render() {
        console.log(this.state)
        console.log(this.props)
        return (
            <React.Fragment>
                <h2>Enter Values in (YYYY-MM-DD) Format and click on Search!</h2>
                START DATE: <input type="text"
                    name="startDate"
                    id="startDate"
                    class="datepicker"
                    placeholder="YYYY-MM-DD"
                    value={this.state.startDate}
                    onChange={this.handleInputChange} 
                    required/><br />
                END DATE:&nbsp;&nbsp;&nbsp;&nbsp; <input type="text"
                   name="endDate"
                   id="endDate"
                   class="datepicker"
                   placeholder="YYYY-MM-DD"
                   value={this.state.endDate}
                   onChange={this.handleInputChange} 
                   required/><br />
                <br />
                <Button variant="contained" color="primary" onClick={this.search}>Search</Button>
                <Table dataSet={this.state.dataSet} />
                <BarChart countryCount={this.state.countryCount} />
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => {
    return {
        searchResultsVo: state.launchData.searchResultList
    };
};

const mapDispatchToProps = {
    launchAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(searchParameters);