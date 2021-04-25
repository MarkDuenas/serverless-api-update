'use strict';

const personModel = require('./schema.js');

exports.handler = async (event) => {

  console.log(JSON.stringify(event, undefined, 2));
  try {
    console.log('Event Body', event.body);
    console.log('Path Parameters', event.pathParameters);

    const body = JSON.parse(event.body);

    const id = event.pathParameters.id;

    const person = await personModel.update({"id":id}, body);

    let result = JSON.stringify(person);

    return {
      statusCode: 200,
      body: result,
    };

  } catch (e) {
    return{
      statusCode: 500,
      body: e.message
    }
  }

}