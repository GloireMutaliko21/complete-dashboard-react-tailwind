/* eslint-disable no-unused-vars */
import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Page, Search, Toolbar, Inject } from "@syncfusion/ej2-react-grids";
import { employeesData, contextMenuItems, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Sort, Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees