/**Table Component for Data Display from Response using Material-UI */

import React, {Component} from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  table: {
    position: "relative",
    margin: "auto",
    width: "100%",
    border: "1px solid rgba(0,0,0,0.1)"
  },
  row: {
    height: "30px",
    "&:hover": {
      backgroundColor: "#f2f2f2",
      color: "white"
    }
  },
  thead: {
    height: "30px",
    background:"#053674",
    color: "#fff"
  },
  headRow: {
    height: "34px"
  },
  headerCell: {
    color: "white",
    paddingRight: 4,
    paddingLeft: 5
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
    height: "34px"
  },
});

 class LaunchTable extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.dataSet
        });
    }
    
  render() {
    const { classes } = this.props;
    return (
<React.Fragment>
  {this.props.dataSet  && this.props.dataSet.length > 0?
        (<Paper>
        <Table className={classes.table}>
          <TableHead className={classes.thead}>
            <TableRow className={classes.headRow}>
              <TableCell className={classes.headerCell}>Name</TableCell>
              <TableCell className={classes.headerCell} align="right">Location</TableCell>
              <TableCell className={classes.headerCell} align="right">Launch Window Start</TableCell>
              <TableCell className={classes.headerCell} align="right">Launch Window End</TableCell>
              <TableCell className={classes.headerCell} align="right">Rocket Name</TableCell>
              <TableCell className={classes.headerCell} align="right">Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map(row => (
              <TableRow className={classes.row} key={row.name}>
                <TableCell className={classes.tableCell}  scope="row">
                  {row.name}
                </TableCell>
                <TableCell className={classes.tableCell}  align="right">
                  {row.location.name}
                </TableCell>
                <TableCell className={classes.tableCell}  align="right">{row.windowstart}</TableCell>
                <TableCell className={classes.tableCell}  align="right">{row.windowend}</TableCell>
                <TableCell className={classes.tableCell}  align="right">{row.rocket.name}</TableCell>
                <TableCell className={classes.tableCell}  align="right">{row.location.countryCode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>):null}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(LaunchTable);
