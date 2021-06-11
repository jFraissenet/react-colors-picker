# React Colors Picker Guide

## Summary

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

const pl=[{label:"couleur1", value:"#123456"},
          {label:"couleur2", value:"#eeeeee"},
          {label:"couleur3", value:"#123456"}, 
          {label:"couleur4", value:"#eeeeee"}]

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

## Properties

The component is totally tunable. It's possible to change shape, border, size. You can allow the zoom when hovering the circle or not

| Propertie     | Type      | Default values | Mandatory | Comments|
| ------------- | ------------- |-----------| ----------| ------------|
|   | colors  | Array | none | Yes | Array od colors objects [{label: "Nom13, value:"#ffffff"}, ...] |
| handle  | Function  | none | Yes | Callback onClick. It return the object sent |
