import { databases, frontend, backend, IA, otherTools, testingTools } from './mocks/techSkills';

exports.handler = async function () {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      frontend,
      backend,
      testingTools,
      databases,
      IA,
      otherTools,
    }),
  };
};
