const ApiResponse = require('../util/apiResponse');
const { cards } = require('../data/data')


module.exports.getAnimeById = (event, ctx, cb) => {
    const { pathParameters = {} } = event;
    if (!pathParameters.id) {
        return cb(null, ApiResponse.badRequest({ message: 'Missing Anime id' }));
    }

    const { id } = pathParameters;
    if (!cards[id - 1]) {
        return cb(
            null,
            ApiResponse.notFound({ message: `Anime ${id} was not found` })
        );
    }

    return cb(null, ApiResponse.ok({ message: 'success', Anime: cards[id - 1] }));
}