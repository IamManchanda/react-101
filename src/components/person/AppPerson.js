import React from 'react';

const AppPerson = (props) => {
  return (
    <div className="app-Person">
      <h3 className="app-Person_Title" onClick={ props.click }>
        { props.name }, { props.age }
      </h3>
      <p className="app-Person_Content">
        He is the { props.children } of { props.country }.
      </p>
      <input type="text" onChange={ props.changed } value={ props.name } />
    </div>
  );
};

export default AppPerson;
