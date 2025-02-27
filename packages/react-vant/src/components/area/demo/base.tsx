import React from 'react';
import { Area } from 'react-vant';
import { areaList } from '@vant/area-data';

export default () => {
  return (
    <Area
      title="标题"
      areaList={areaList}
      onChange={(v) => console.log(v)}
      onConfirm={(v) => console.log(v)}
    />
  );
};
