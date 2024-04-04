import React from 'react';

const RegularErrors = ({message,isShow} : {message:string,isShow:boolean}) => {
    return (
        <div>
            {isShow && <span>{message}</span>}
        </div>
    );
};

export default RegularErrors;