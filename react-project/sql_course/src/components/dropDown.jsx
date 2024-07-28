import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function DropDown() {
  return (
    <div style={{marginTop:"5rem"}}>
      <div className=' rounded-md '>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><span className='font-bold'>Module 1:</span> Introduction to SQL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:"left"}}>
          1. Course Overview
   - Objectives
   - Course structure and expectations
<br /><br />
2. Introduction to Databases
   - What is a database?
   - Types of databases (Relational, NoSQL, etc.)
   - Overview of SQL
<br /><br />
3. Setting Up the Environment
   - Installing a database management system (e.g., MySQL, SQL Server)
   - Introduction to database tools (e.g., MySQL Workbench)

          </Typography>
        </AccordionDetails>
        
      </Accordion>
      </div>
      <br />
      <div  className=' rounded-md '>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography><span className='font-bold'>Module 2:</span> Basic SQL Queries</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:"left"}}>
          1. Understanding Databases and Tables
   - Database schemas
   - Creating databases and tables
<br /><br />
2. Basic Query Structure
   - SELECT statements
   - Filtering data with WHERE
   - Sorting data with ORDER BY
<br /><br />
3. Working with Multiple Columns
   - Selecting specific columns
   - Using aliases for columns
<br /><br />
4. Basic Functions and Calculations
   - Using functions (e.g., COUNT, SUM, AVG)
   - Performing basic arithmetic operations

          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <br />
      
      <div  className=' rounded-md '> 
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography><span className='font-bold'>Module 3:</span> Data Manipulation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:"left"}}>
          1. Inserting Data
   - INSERT INTO statements
   - Bulk inserts
<br /><br />
2. Updating Data
   - UPDATE statements
   - Conditional updates
<br /><br />

3. Deleting Data
   - DELETE statements
   - Conditional deletions

          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      
      <br />
      
      <div  className=' rounded-md '>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography><span className='font-bold'>Module 4:</span> Advanced Data Retrieval</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:"left"}}>
          1. Joins
   - Understanding different types of joins (INNER, LEFT, RIGHT, FULL OUTER)
   - Writing join queries
   - Multi-table joins
<br /><br />
2. Subqueries
   - Writing subqueries
   - Using subqueries in SELECT, WHERE, and FROM clauses
<br /><br />
3. Grouping and Aggregating Data
   - GROUP BY clause
   - Aggregate functions (e.g., MIN, MAX, COUNT, SUM)
   - HAVING clause for filtering groups

          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <br />

      <div  className=' rounded-md '>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography><span className='font-bold'>Module 5:</span> Advanced SQL Functions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:"left"}}>
          1. String Functions
   - CONCAT, LENGTH, SUBSTRING
   - Pattern matching with LIKE
<br /><br />
2. Date and Time Functions
   - Working with date and time data types
   - Functions for manipulating dates and times
<br /><br />
3. Numeric Functions
   - ROUND, FLOOR, CEILING
   - Mathematical operations

          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <br />
      
      <div  className=' rounded-md '>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography><span className='font-bold'>Module 6:</span> Managing Database Objects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:"left"}}>
          1. Views
   - Creating and managing views
   - Using views in queries
<br /><br />
2. Indexes
   - Understanding indexes
   - Creating and using indexes for performance optimization
<br /><br />
3. Stored Procedures and Functions
   - Introduction to stored procedures
   - Writing and executing stored procedures
   - Creating user-defined functions

          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <br />

      <div  className=' rounded-md '>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography><span className='font-bold'>Module 7:</span> Intermediate Topics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:"left"}}>
         
          1. Transactions and Concurrency
   - Understanding transactions
   - COMMIT and ROLLBACK
   - Managing concurrent transactions
<br /><br />
2. Error Handling
   - Implementing error handling in SQL
   - Using TRY...CATCH blocks (SQL Server specific)
<br /><br />
3.Advanced Joins and Set Operations
   - Self joins
   - UNION, INTERSECT, and EXCEPT

          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <br />

      <div  className=' rounded-md '>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography><span className='font-bold'>Module 8:</span> Additional SQL Topics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:"left"}}>
          1. Temporary Tables
   - Creating and using temporary tables
   - When to use temporary tables
<br /><br />
2. Common Table Expressions (CTEs)
   - Introduction to CTEs
   - Writing and using CTEs for complex queries
<br /><br />
3. Window Functions
   - Introduction to window functions
   - Using ROW_NUMBER, RANK, and DENSE_RANK
<br /><br />
4. JSON Data Handling
   - Storing and querying JSON data
   - JSON functions in SQL (e.g., JSON_VALUE, JSON_QUERY)

          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <br />

      <div  className=' rounded-md '>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography><span className='font-bold'>Module 9:</span> Practical Projects and Case Studies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:"left"}}>
          1. Simple Projects
   - Project 1: Employee Management System
     - Designing tables for employee data
     - Performing CRUD operations
   - Project 2: Sales Data Analysis
     - Creating a sales database
     - Writing queries for sales reports
<br /><br />
2. Real-World Scenarios
   - Project 3: Data Analysis and Reporting
     - Analyzing customer data for a retail company
<br /><br />
3. Final Project
   - Comprehensive project combining all learned concepts
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}
