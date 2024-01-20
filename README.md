# Shrood Component Library

## Background

Custom component library using [@mui/base](https://mui.com/base-ui/) components and shrood's design system. This library is 100% agnostic to a design system. It provides only the layout and functionality of each component which allows for assigning it any design system that matches its classes.

## Use

At the moment, any project using it are cloning it and importing components from the `src/lib` dir. Eventually this should be a package.

## Dev

Application of any kind of styles should happen within the app importing it. **DO NOT** add styles here. The most common way to apply the styles is by using my private CDN
