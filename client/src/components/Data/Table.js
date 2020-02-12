import React, { Component } from 'react';
import {AppProvider, Page} from '@shopify/polaris';
import DataTable from './DataTable';
import './App.css';

class Table extends Component {
  render() {

    const headings = [
      'Product name',
      'SKU',
      'Stock quantity',
      'Wholesale cost',
      'Sale price',
      'Quantity sold',
      'Gross sales',
      'Net sales',
      'Notes',
    ];

    const rows = [
      [
        'Red and black plaid scarf with thin red stripes and thick black stripes',
        124689325,
        28,
        '$35.00',
        '$60.00',
        12,
        '$720.00',
        '$300.00',
        '',
      ],
      [
        'Yellow plaid scarf',
        124689389,
        0,
        '$35.00',
        '$60.00',
        20,
        '$1200.00',
        '$500.00',
        'Currently on back order by the supplier. Do not place another order to restock.',
      ],
      [
        'Blue plaid scarf',
        124689332,
        30,
        '$35.00',
        '$60.00',
        10,
        '$600.00',
        '$250.00',
        '',
      ],
      [
        'Pink plaid scarf',
        124689376,
        16,
        '$35.00',
        '$60.00',
        4,
        '$240.00',
        '$100.00',
        '',
      ],
    ];

    return (
      <AppProvider>
        <Page title="Data table">
          <DataTable headings={headings} rows={rows} />
        </Page>
      </AppProvider>
    );
  }
}
export default class DataTable extends React.Component {
  renderHeadingRow = (_cell, cellIndex) => {
    const {headings} = this.props;

    return (
      <Cell
        key={`heading-${cellIndex}`}
        content={headings[cellIndex]}
        header={true}
      />
    )
  };
  
  renderRow = (_row, rowIndex) => {
    const {rows} = this.props;

    return (
      <tr key={`row-${rowIndex}`}>
        {rows[rowIndex].map((_cell, cellIndex) => {
          return (
            <Cell
              key={`${rowIndex}-${cellIndex}`}
              content={rows[rowIndex][cellIndex]}
            />
          )
        })}
      </tr>
    )
  };

  render() {
    const {headings, rows} = this.props;

    this.renderHeadingRow = this.renderHeadingRow.bind(this);
    this.renderRow = this.renderRow.bind(this);
    
    const theadMarkup = (
      <tr key="heading">
        {headings.map(this.renderHeadingRow)}
      </tr>
    );

    const tbodyMarkup = rows.map(this.renderRow);
  
    return (
      <table className="Table">
        <thead>{theadMarkup}</thead>
        <tbody>{tbodyMarkup}</tbody>
      </table>
    );
  }
}

export default Table;