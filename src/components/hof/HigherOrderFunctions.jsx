import React from 'react';


class HigherOrderFunctions extends React.Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
    
            ]
        }
    }
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderByUserType=()=>{
        const data = this.state.userData;
        const FilteredByType =data.filter((item)=>{
            return item.user_type === 'Designer';
        })
        const mapRows = FilteredByType.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    }

    renderByName=()=>{
        const data = this.state.userData;
        const FilteredByName =data.filter((item)=>{
            return item.name[0] ==='J';
        })
        const mapRows = FilteredByName.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    }

    renderByAge=()=>{
        const data = this.state.userData;
        const FilteredByAge =data.filter((item)=>{
            return item.age > 28 && item.age<=50;
        })
        const mapRows = FilteredByAge.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    }

    renderTotalExperienceOfTheDesigners=()=>{
        const data = this.state.userData;
        let arr=[]
        const FilteredTotalExperienceOfTheDesigners =data.filter((item)=>{
            return item.user_type === 'Designer' ;
        })
        const mapRows = FilteredTotalExperienceOfTheDesigners.map((item) => {
            {arr.push(item.years)}
           });
        mapRows;
        const totalValue = arr.reduce(
            (previousScore, currentScore)=>previousScore+currentScore, 
            0);

        return totalValue
    }
    render() {
        return (
        // instead of a parent div tag, we can also use React.Fragment
          <React.Fragment>
            <h1>Display all items</h1>
            <div className="display-box">
                <ul>{this.renderItems()} </ul>
            </div>
            <h1>Display based on user type</h1>
            <div className="display-box">
                <ul>{this.renderByUserType()}</ul>
            </div>
            <h1>Filter all names starting with the letter J</h1>
            <div className="display-box">
                <ul>{this.renderByName()}</ul>
            </div>
            <h1>Filter all data based on age greater than 28 and less than or equal to 50</h1>
            <div className="display-box">
                <ul>{this.renderByName()}</ul>
            </div>
            <h1>Filter all data based on age greater than 28 and less than or equal to 50</h1>
            <div className="display-box">
                <ul>{this.renderTotalExperienceOfTheDesigners()}</ul>
            </div>
          </React.Fragment>
        )
    }
}
export default HigherOrderFunctions;