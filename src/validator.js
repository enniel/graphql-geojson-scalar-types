import {GraphQLError} from 'graphql';

export default (validator, data) => {
    validator(data, (isValid, errors) => {
        if (!isValid) {
            throw new GraphQLError(JSON.stringify(errors));
        }
    });
    return data;
};
