# OddsChecker Technical Test

## Description

OddsChecker betslip application developed for a technical test.

The goal of the exercise is to demonstrate every capability I can apply on ReactJS and ESnext development. Promises, await/async, React hooks, componentDidCatch, architecture, indexes, modularisation.

The coding style of the project is standardjs. I've also implemented some very personal coding style, alphabetical ordering on imports and destructuring, and also propTypes, defaultProps position on the module. Directory hierarchy has also been carefully designed.

The project might seem a bit complex, because the solution should have been a bit easier. I've implemented this to demonstrate how would I create a scalable application.

It has been 4 very intense days for me, but I feel the result is extraordinary :)

## Notes

I've upgraded create-react-router to the latest version, in order to use hooks.

## Technologies

### backend

* nodejs
* express

### frontend

* create-react-app (latest)
* reactjs
* redux
* redux-form
* react-router
* redux-thunk
* lodash
* axios
* classnames
* node-sass (cra: scss handling)

## Architecture

* following one of my latest architectures on the frontend
* standard and common hierarchy for every page/component has been implemented
* using indexes and maximising modularisation
* modularisation offers a more mantainable, distributed and clean code
* allows the developers not to conflict between changes, because of its modularisation
* modularisation makes it easier to find and modify any class/function/module/...
* redux as app-store
* redux-form to handle the form behaviour
* using redux-thunk to create asynchronous actions (thunks)
* implemented node-sass in order to import SASS modules on the frontend components
* standardjs as code style globally
* applied editorconfig common rules for the project

## Addons

I've added 3 more views to the project:

* betslip.error: rendered when an error occurs on the betslip
* error: rendered when an exception is thrown and not handled anywhere in the code
* error.notFound: rendered when no other route matches

I've implemented multiple resource fetching using `Promise.all` and error handling on async actions.

## Author

Jesus Gonzalez Jaen

jesus.gonzalez.development@gmail.com
