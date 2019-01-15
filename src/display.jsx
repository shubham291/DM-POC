import React, { Component } from 'react';

import './App.css';

class Display extends Component {
  render() {
    return (
      <div className="App">

        <div>

          <h1 className="h2">DM Analytics Demo</h1>

        </div>
        <div className="flex">
          <div >
            {/* <select className="selectBoxStyle" onChange={this.props.onChangeHandler} name="input1">
              <option>BLA BLA</option>
              <option value="publication">Publication</option>

            </select> */}
            <input className="selectBoxStyle" onChange={this.props.onChangeHandler} name="input1"  />
          </div>
          <div >
            <select className="selectBoxStyle" onChange={this.props.onChangeHandler} name="input2">
              <option >YEAR</option>
              <option value="2013">2013</option>
            </select>
          </div>

          <button className="btn" onClick={this.props.onClickSearch}>Search</button>

        </div>


        <div className="table">
          <h2 className="h2">Search Console</h2>

          <tr className="tableHeadings">
            <th> totalrecordsperquery </th>
            <th> totalrecords </th>
            <th> pages </th>
            <th> page</th>
          </tr>
          {this.props.data.length && this.props.data.map((item,key)=>
          <tr key = {key}>
            <td>{item.info.totalrecordsperquery}</td>
            <td>{item.info.totalrecords}</td>
            <td>{item.info.pages}</td>
            <td>{item.info.page}</td>
          </tr>
          )}

        </div>

      </div>
    );
  }
}

export default Display;
