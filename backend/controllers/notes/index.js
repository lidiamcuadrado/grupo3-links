const newNotesController = require('./newNotesController');
const newVoteController = require('./newVoteController')
const deleteVoteController = require('./deleteVoteController')
const deleteNotesController = require('./deleteNotesController');
const listNotesController = require('./getNotesController');


module.exports = {
    newNotesController,  
    newVoteController,
    deleteVoteController,
    deleteNotesController,
    listNotesController,
}

// cambiar el tema de las "s" asi no nos volvemos locos por ejemplo: votes o notes y note o vote en los controllers o los models.