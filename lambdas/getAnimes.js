const ApiResponse = require('../util/apiResponse');
const { cards } = require('../data/data')

module.exports.getList = (event, ctx, cb) => {

    return cb(null, ApiResponse.ok({ message: 'success', list: cards }));
}