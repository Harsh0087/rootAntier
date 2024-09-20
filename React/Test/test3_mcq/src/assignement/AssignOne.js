import React from 'react'

export default function AssignOne() {

    const programs = [
        {
            id: 101,
            views: 6000,
            program_name: "ddlj",
            date_telecast: "15august2023",
            income_of_ad: 500,
            expenses: 100
        },
        {
            id: 102,
            views: 10000,
            program_name: "deadpool1",
            date_telecast: "17august2023",
            income_of_ad: 700,
            expenses: 500   
        },
        {
            id: 103,
            views: 20000,
            program_name: "IPL",
            date_telecast: "25april2024",
            income_of_ad: 1000,
            expenses: 100
        },
        {
            id: 104,
            views: 3000000,
            program_name: "Jatt And Juliet",
            date_telecast: "18july2024",
            income_of_ad: 100,
            expenses: 10
        },
        {
            id: 105,
            views: 1000,
            program_name: "Rabb Da Radio",
            date_telecast: "18july2024",
            income_of_ad: 700,
            expenses: 6000
        },    
    ]  

    // this Show the details of The Ipl program.
    const iplRecord = programs.filter(detail => (detail.id === 103));
    console.log("this Show the details of The Ipl program.");
    console.log(iplRecord);


    // this will display the max views.
    const max = programs.map(details => (details.views));
    const maxViews = Math.max(...max);
    const maxViewDisplay = programs.filter(details => (details.views === maxViews));
    console.log("this will display the max views.");
    console.log(maxViewDisplay);
    
    //add new value
    const newElement = {
      id: 106,
      views: 7000,
      program_name: "tmkoc",
      date_telecast: "2june2020",
      income_of_ad: 5000,
      expenses: 60,
    };

    const updatedList = [...programs, newElement];
    

    //loss
    console.log("===============");

    const loss = programs.map(details => {
        if (details.expenses > details.income_of_ad) {
            return (
              <table border={2}>
                <th>
                  <td>Views</td>
                </th>
                <th>
                  <td>Program Name</td>
                </th>
                <th>
                  <td>Telecast Date</td>
                </th>
                <th>
                  <td>Income of ADs</td>
                </th>
                <th>
                  <td>Expenses</td>
                    </th>
                    <th>
                        <td>Loss</td>
                    </th>
                
                  <tr key={details.id}>
                    <td>{details.views}</td>
                    <td>{details.program_name}</td>
                    <td>{details.date_telecast}</td>
                    <td>{details.income_of_ad}</td>
                    <td>{details.expenses}</td>
                    <td>{details.income_of_ad-details.expenses}</td>
                  </tr>
                
              </table>
            );
       }
   }
 )
    

   
    // deleted the third record
    const del = delete programs[2];
console.log("deleted the third record");
    console.log(programs)
    

    // update the expenses by 10%
    const update = programs.map(details => (details.expenses + (details.expenses * 0.10)));
    console.log("updated the expenses by 10%");
    console.log(update)



    console.log(programs)
  return (
      <div>
          <h1>Assignment 1</h1>
      <h2>All Records:-</h2>
      <table border={2}>
        <th>
          <td>Views</td>
        </th>
        <th>
          <td>Program Name</td>
        </th>
        <th>
          <td>Telecast Date</td>
        </th>
        <th>
          <td>Income of ADs</td>
        </th>
        <th>
          <td>Expenses</td>
        </th>
        {programs.map((value) => (
          <tr key={value.id}>
            <td>{value.views}</td>
            <td>{value.program_name}</td>
            <td>{value.date_telecast}</td>
            <td>{value.income_of_ad}</td>
            <td>{value.expenses}</td>
          </tr>
        ))}
      </table>
      <hr />
      <h2>Programs in loss:-</h2>
          {loss}
          <hr />
      <h2>Updated List</h2>
      <table border={2}>
        <th>
          <td>Views</td>
        </th>
        <th>
          <td>Program Name</td>
        </th>
        <th>
          <td>Telecast Date</td>
        </th>
        <th>
          <td>Income of ADs</td>
        </th>
        <th>
          <td>Expenses</td>
        </th>
        {updatedList.map((value) => (
          <tr key={value.id}>
            <td>{value.views}</td>
            <td>{value.program_name}</td>
            <td>{value.date_telecast}</td>
            <td>{value.income_of_ad}</td>
            <td>{value.expenses}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
