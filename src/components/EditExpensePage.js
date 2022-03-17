import React from 'react';
const EditExpensePage =(props) =>{
    console.log(props)
    return(
        <div>
        This is Edit Expensepage.{props.match.params.id}
    </div>
    )
}

export default EditExpensePage;