# React Colors Picker Guide

## Summary

> You are a web developer and want, for example, to sell products with various colors. This components allows to modify your carousel pictures or to dynamically change any properties by simply clicking on the corresponding item. You just need to code your callback function.

> Displays color circles

> Allows callback onClick

> Tunable component

![alt text](https://github.com/jFraissenet/react-colors-picker/blob/main/react-colors-picker/assets/Resume.PNG?raw=true)

## Installation

How to intall it ?

```bash
npm install --save @jfraissenet/react-colors-picker
```

How to use it ?

```bash
import {ColorsPicker} from '@jfraissenet/react-colors-picker';

const pl=[{label:"color1", value:"#123456"},
          {label:"color2", value:"#eeeeee"},
          {label:"color3", value:"#123456"}, 
          {label:"color4", value:"#eeeeee"}]

function App() {
  return (
    <div>
      <ColorsPicker colors={pl} handle={handleOnClick}/>
    </div>
  );
}

function handleOnClick(colorItem) {
  alert(colorItem.label);
}

export default App;
```

label and value are mandatories.

## Properties

The component is completelly tunable. It's possible to change shape, border, size of the items. You can allow the zoom when hovering over the circle or not

| Properties     | Types      | Default values | Mandatory | Comments|
| ------------- | ------------- |-----------| ----------| ------------|
| colors  | Array | none | Yes | Array of colors objects [{label: "Nom13, value:"#ffffff"}, ...] |
| handle  | Function  | none | Yes | Callback on click. It return the object sent |
| borderRadius  | String  | 20px | No | Change the shape. "0px" --> square. "20px" --> circle |
| border  | String  | 1px solid black | No | Change the design of the item's border |
| width  | String  | 28px | No | Change the item width |
| height  | String  | 28px | No | Change the item height |
| marginRight  | String  | 10px | No | Change the right margin |
| marginBottom  | String  | 4px | No | change the bottom margin |
| transformOnHover  | Boolean  | true | No | When hovering on items, a scale transformation of 1.1 appears |
