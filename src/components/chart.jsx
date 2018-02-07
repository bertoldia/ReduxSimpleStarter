// @format

import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  //return data.reduce((acc, i) => acc + i, 0) / data.length;
  return _.round(_.sum(data) / data.length);
}

export default ({ data, color, units }) => {
  return (
    <div>
      <Sparklines height={100} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(data)} {units}
      </div>
    </div>
  );
};
