const newNotesController = require('./newNotesController');
const newVoteController = require('./newVoteController')
const deleteVoteController = require('./deleteVoteController')

module.exports = {
    newNotesController,  
    newVoteController,
    deleteVoteController
}

// cambiar el tema de las "s" asi no nos volvemos locos por ejemplo: votes o notes y note o vote en los controllers o los models.