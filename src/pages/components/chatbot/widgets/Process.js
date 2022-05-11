import React, { Fragment } from 'react';
import { adoptionProcess } from '../../../../utilities/constants';

const Process = () => {
  return (
    <div className='border-2 p-5 pb-0 mx-12 bg-sky-100 rounded-lg'>
      <ul>
        {adoptionProcess.map((process) => {
          return (
            <Fragment key={process.id}>
              <h1 className='font-bold pb-2'>{process.title}</h1>
              <li className='pb-5'>{process.text}</li>
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Process;
